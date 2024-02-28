import React from "react";

class ChildClassIqbal extends React.Component {

    constructor(p){
        super(p);
        console.log("constructor called");
        this.state = {
            id: 1,
            name: "iqbal",
            age: 25
        };
    }

    componentDidMount(){
        console.log("componentDidMount called");
        this.setState({
            name: "iqbal componentDidMount"
        })
    }

    
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate called");
    }  

    render(){
        console.log("render called"); 
        return(
        <div>
            <label>age = {this.state.age}</label>
            <br/>
            <label>name = {this.state.name}</label>
            <br/>
            <label>num = {this.props.num}</label>
        </div>
        );
    }

}

export default ChildClassIqbal