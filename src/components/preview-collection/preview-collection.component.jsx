import React from "react";

import "./preview-collection.styles.scss";

import CollectionItem from '../collection-item/collection-item.component';
const PreviewCollection = (props) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => index < 4)
          .map((item, index) => {
            return <CollectionItem key={index} item={item}/>
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;
