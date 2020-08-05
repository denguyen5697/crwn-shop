import React from "react";

import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./components/page/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./components/page/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.action";
class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser: null,
  //   };
  // }

  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());

          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   },
          // });

          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          {/*  <Route exact path="/signin" component={SignInAndSignUpPage} />*/}
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

//use distructuring instead of (state)
const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
  };
};

const mapDispatchToProps = (dispatch, action) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
