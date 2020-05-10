import React from "react";
import { Helmet } from "react-helmet"
import Loader from '../templates/Loader';
import Banner from '../templates/Banner';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

const {Component} = React;
export default class Wrapper extends Component {
    constructor(props){
        super(props);
        this.state = {isLoading : false}
    }

    componentDidMount(){
        this.setState({isLoading: true});
        setInterval(()=>{
            this.setState({isLoading: false});
        }, 5000);
    }
    render(){
        return(
         this.state.isloading ? <Loader /> :  
            <div className="application">
                <Helmet>
                <meta charSet="utf-8" />
                <title>Tiki Taco</title>
                <link rel="canonical" href="http://tikitaco.in/" />
                </Helmet>
                <Header />
                <main>
                    <Banner />
                    {/* <About />
                    <Menu />
                    <TacoTribe />
                    <Locate /> */}
                </main>
                <Footer />
            </div>
        )
    }
}