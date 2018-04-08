import React, { Component } from "react";
import styles from './index.css';
import { isString } from 'lodash'; 

export default class Round extends Component{
    constructor(props){
        super(props);

        let {title,fontSize} = {...{fontSize:12,},...props};
        
        this.state={
            height:null,
            width:null,
        };

    }
    componentDidMount(){

        let _that=this;

        setTimeout(()=>{
            let width = getComputedStyle(_that.refs.title).width;
            width=isString(width)?+width.replace(/px/g,''):12;
            console.log(width);
            _that.setState({
                height:`${width/2}px`,
                width:`${width/2}px`,
            })
        })

        // width=isString(width)?+width.replce(/px/g,''):12;

        // this.setData({
        //     width:`${width}px`,
        //     height:`${width}px`,
        // })
    }
    cmptWidth(){
         
    }
    render(){

        let isOpacity=isString(this.state.width) && isString(this.state.height);


        return (
            <div style={{
                opacity:isOpacity?1:0,
                zIndex:isOpacity?0:-1,
                
            }} className={styles.circle}>
                <span ref="title">{this.props.title}</span>
            </div>
        )
    }
}


Round.defaultProps={
    title:"这个就是标题",
    fontSize:16,
}