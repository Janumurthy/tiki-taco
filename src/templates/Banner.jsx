import React, {Component} from "react";
import Tribe from "../assets/images/Tribe.png";
import '.././../node_modules/uikit/dist/css/uikit.css'
import '.././../node_modules/uikit/dist/js/uikit.js'

export default class Banner extends Component{ 
    constructor(props){
        super();
    }


    render(){
        return (
            <section id="coming-soon">
                <div className ="container">
                    <img src={Tribe} className ="symbol" alt="Tiki Taco" data-uk-scrollspy="{cls:'uk-animation-fade', delay:3000}"/>
                </div>
            </section>
        )
    }
}
