import React from "react";

import { Route } from "react-router-dom";

import CollectionsOverview from "../collections-overview/collections-overview.component";
import CollectionPage from "../page/collection/collection.component";

const ShopPage = ({ match, history }) => {
  console.log(match);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
