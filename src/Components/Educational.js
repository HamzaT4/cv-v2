import React, { Component } from "react";
import '../styles/eduStyle.css'
class EducationalInfo extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handleUniName=this.handleUniName.bind(this);
        this.handleUniDeg=this.handleUniDeg.bind(this);
        this.handleUniSub=this.handleUniSub.bind(this);
        this.handleUniCity=this.handleUniCity.bind(this);
        this.handleUniFrom=this.handleUniFrom.bind(this);
        this.handleUniTo=this.handleUniTo.bind(this);

        this.state={
            eduUni:[],
            uniName:'',
            uniCity:'',
            uniDeg:'',
            uniSub:'',
            uniFrom:'',
            uniTo:'',
            


        }
    }
    handleUniName=(e)=>{
        const uniName=e.target.value;
        this.setState({uniName});
        this.props.handleUniName(uniName);
    };
    handleUniCity=(e)=>{
        const uniCity=e.target.value;
        this.setState({uniCity});
        this.props.handleUniCity(uniCity);
    };
    handleUniDeg=(e)=>{
        const uniDeg=e.target.value;
        this.setState({uniDeg});
        this.props.handleUniDeg(uniDeg);
    };
    handleUniSub=(e)=>{
        const uniSub = e.target.value;
        this.setState({uniSub});
        this.props.handleUniSub(uniSub);
    };
    handleUniFrom=(e)=>{
        const uniFrom = e.target.value;
        this.setState({uniFrom});
        this.props.handleUniFrom(uniFrom);
    };
    handleUniTo=(e)=>{
        const uniTo = e.target.value;
        this.setState({uniTo});
        this.props.handleUniTo(uniTo);
    };
    render(){
        return(

            <div className="edu-inputs">
                <h3>Education </h3>
                
                <input onChange={this.handleUniName} placeholder="University name"  id="uniName"   type="text"></input> 
                <input onChange={this.handleUniCity} placeholder="City"  id="uniCity"   type="text"></input>
                <input onChange={this.handleUniDeg} placeholder="Degree"  id="deg"   type="text"></input>
                <input onChange={this.handleUniSub} placeholder="Subject"  id="studySub"   type="text"></input>
                <input onChange={this.handleUniFrom} placeholder="from"  id="studyFrom"   type="number"></input>
                <input onChange={this.handleUniTo} placeholder="to"  id="studyTo"   type="number"></input>
                <div className="eduButtons">
                <button id="addEduButton">Add</button> 
                <button id="deleteEduButton">Delete</button> 
                </div>


             </div>
        )

    }
};
export {EducationalInfo};