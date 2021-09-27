import React from "react";
import "./album.styles.css";

class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      album: props.album,
      show: false,
    };
  }

  toggleShow = () =>
    this.setState((prevState) => ({
      show: !prevState.show,
    }));

  render() {
    return (
      <div className="album-container">
        <div className="album-infos">
          <div className="info">
            <img alt="album" src={this.state.album.imgUrl} />
            <span className="releaseDate">{this.state.album.releaseDate}</span>
            <h2 className="album-name">{this.state.album.name}</h2>
            <span className="info">
              {this.state.album.info.map((p) => (
                <p>{p}</p>
              ))}
            </span>
          </div>
          <div className="show_tracklist">
            <button class="btn-open-modal" onClick={() => this.toggleShow()}>
              See Tracklist
            </button>
          </div>
        </div>
        {this.state.show && (
          <div className="tracklist">
            <div className="songs">
              <h2>{this.state.album.name}</h2>
              {this.state.album.tracklist.map((song) => (
                <p>{song}</p>
              ))}
              <button class="btn-close-modal" onClick={() => this.toggleShow()}>
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Album;
