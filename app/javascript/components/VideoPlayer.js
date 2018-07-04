import React from "react";
import PropTypes from "prop-types";


class VideoPlayer extends React.Component {

    constructor(props){
        super(props)

    }



    render () {
        return (
            <div align="center" className="embed-responsive embed-responsive-16by9">
                <video autoPlay loop className="embed-responsive-item">
                    <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4"/>
                </video>
            </div>
        );
    }

}

export default VideoPlayer

VideoPlayer.propTypes = {
    videoInfo: PropTypes.object
};


