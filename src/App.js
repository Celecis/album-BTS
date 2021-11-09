import React from "react";
import "./App.css";

import data from "./data.js";
import band from "./band.js";
import missing from "./missing.js";
import { AlbumList } from "./components/album-list/album-list.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      band: band,
      albuns: data,
      missing: missing,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="band">
          {this.state.band.map((item) => (
            <div>
              <div>
                <img src={item.img} alt={item.name} />
              </div>
              <div>
                <h1>{item.name}</h1>
                <h2>{item.hangul}</h2>
                <h3>{item.romanji}</h3>
                <p>{item.genre}</p>
                <p>{item.description}</p>
                <div className="members">
                  <p>Members:</p>
                  <span>
                    {item.members
                      .map((member) => {
                        return member;
                      })
                      .join(", ")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="discography">DISCOGRAPHY: </h3>
        <AlbumList albums={this.state.albuns} />
        <h3 className="discography">MISSING: </h3>
        <AlbumList albums={this.state.missing} />
      </div>
    );
  }
}

export default App;
