import React from "react";
import './YoutubeComp.css';

const YoutubeComp =  (props) => {
    return (
    <div className="youtube-wrapper">
        <div className="img-thumb">
            <img src="https://i.ytimg.com/vi/4_zdirgU3EU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCxY3RBIq2UlCRcqsVejg9Pk1V0Tw" alt=""/>
            <p className="time">{props.time}</p>
        </div>
        
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
    </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00'
    //title: 'Litle Angel'
    
}

export default YoutubeComp;