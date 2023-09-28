import React,{Component} from "react";
import '../styles/expStyle.css'

class PracticalInfo extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.handlePosChange=this.handlePosChange.bind(this);
        this.handleCompNameChange=this.handleCompNameChange.bind(this);
        this.handleCompCityChange=this.handleCompCityChange.bind(this);
        this.handleCompFromChange=this.handleCompFromChange.bind(this);
        this.handleCompToChange=this.handleCompToChange.bind(this);
        this.handleJobDescChange=this.handleJobDescChange.bind(this);


        this.state={
            exp:[],
            pos:'',
            compName:'',
            compCity:'',
            compFrom:'',
            compTo:'',
            jobDesc:'',

        }
    }
    handlePosChange=(e)=>{
        const pos = e.target.value;
        this.setState({pos});
        this.props.handlePosChange(pos);
    };
    handleCompNameChange=(e)=>{
        const compName = e.target.value;
        this.setState({compName});
        this.props.handleCompNameChange(compName);
    };
    handleCompCityChange=(e)=>{
        const compCity = e.target.value;
        this.setState({compCity});
        this.props.handleCompCityChange(compCity);
    };
    handleCompFromChange=(e)=>{
        const compFrom = e.target.value;
        this.setState({compFrom});
        this.props.handleCompFromChange(compFrom);
    };
    handleCompToChange=(e)=>{
        const compTo = e.target.value;
        this.setState({compTo});
        this.props.handleCompToChange(compTo);
    };
    handleJobDescChange=(e)=>{
        const jobDesc = e.target.value;
        this.setState({jobDesc});
        this.props.handleJobDescChange(jobDesc);
    };
    render(){
        return(

            <div className="exp-inputs"> 
            <h3>Experience </h3>
                <input onChange={this.handlePosChange} placeholder="Position "  id="posName"   type="text"></input> 
                <input onChange={this.handleCompNameChange} placeholder="Company name"  id="compName"   type="text"></input>
                <input onChange={this.handleCompCityChange} placeholder="City"  id="cityName"   type="text"></input>
                <input onChange={this.handleCompFromChange} placeholder="from"  id="workFrom"   type="number"></input>
                <input onChange={this.handleCompToChange} placeholder="to"  id="workTo"   type="number"></input>
                <textarea onChange={this.handleJobDescChange} placeholder="Description"></textarea>
                <div className="expButtons">
                <button id="addExpButton">Add</button> 
                <button id="deleteExpButton">Delete</button> 
                </div>
            </div>
        )

    }
}
export {PracticalInfo};