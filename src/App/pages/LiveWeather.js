import React from "react";

function LiveWeather(props) {
    return (
        <div className="liveFeed">
            <h1 className="liveFeedHeader">Live Weather Stream</h1>
            <iframe allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" src="https://video.nest.com/embedded/live/O3X0qogP7N" frameBorder="0" width="720" height="576" title="SLC"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "4.5vw",
                    marginRight: "5.5vw",
                    marginBottom: "10vh",
                    width: "90vw",
                    height: "50vh"
                }}
            ></iframe>
        </div>
    )
}

export default LiveWeather;