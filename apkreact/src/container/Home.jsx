import React, {Component} from "react";
import YoutubeComp from "../component/YoutubeComp/YoutubeComp";
import Product from "./Product/Product";

class Home extends Component {
    render () {
        return (
            <div>
                 {/* <p>YouTube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12"
                    title="Tutorial Memasak Ayam 1"
                    desc="2x ditonton. 2 hari yang lali"/>
                <YouTubeComp 
                    time="9.20"
                    title="Tutorial Memasak Ayam 2"
                    desc="12x ditonton. 3 hari yang lali"/>
                <YouTubeComp 
                    time="6.12" 
                    title="Tutorial Memasak Ayam 3"
                    desc="9x ditonton. 4 hari yang lali"/>
                <YouTubeComp 
                    time="5.03"
                    title="Tutorial Memasak Ayam 4"
                    desc="8x ditonton. 5 hari yang lali"/>
                <YouTubeComp/> */}               
                 <p>Counter</p>
                 <hr />
                 <Product />
            </div>
        ) 
    }
}

export default Home;