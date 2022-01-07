import React, {Component} from 'react';
import NewsItems from './NewsItems';

export default class News extends Component{
  render(){
    return(
      <div className="bg-dark">
      <div>hello i'm news</div>
      <NewsItems/>
      <NewsItems/>
      <NewsItems/>
      <NewsItems/>
      <NewsItems/>
      <NewsItems/>
      </div>
    );
  }
}