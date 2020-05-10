import React, {Component} from "react";
import Tribe from "../assets/images/Tribe.png";

export default class Banner extends Component{ 
    constructor(props){
        super();
    }


    render(){
        return (
            <section id="coming-soon">
                <div className ="container">
                    <img src={Tribe} className ="symbol" alt="Tiki Taco"/>
                </div>
            </section>
        )
    }
}
