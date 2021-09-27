import React from "react";
import "./album-list.styles.css";

import Album from "../album/album.component";

export const AlbumList = (props) => {
  console.log(props);
  return (
    <div className="album-list">
      {props.albums.map((album) => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};
