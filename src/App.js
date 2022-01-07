import React,{Component} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import "./style.css";

export default class App extends Component {
  render(){
    return(
      <>
      <Navbar/>
      <News/>
      </>
    );
  };
};