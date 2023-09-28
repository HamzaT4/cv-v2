import React, { Component } from "react";
import '../styles/personalStyle.css';
import avatar from '../npc_avtar.png'



class PersonalInfo extends Component{
    constructor(props){
        super(props);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleAgeChange=this.handleAgeChange.bind(this);
        this.handleAddressChange=this.handleAddressChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleTitleChange=this.handleTitleChange.bind(this);
        this.handlePhoneChange=this.handlePhoneChange.bind(this);
        this.handleObjChange=this.handleObjChange.bind(this);
        this.handlePicChange=this.handlePicChange.bind(this);
        this.state={
            name:'',
            age:'',
            email:'',
            title:'',
            address:'',
            phone:'',
            obj:'',
            img:avatar
        }
    }
    handleNameChange=(e)=> {
    const name = e.target.value;
    this.setState({ name });
    this.props.handleNameChange(name);
    };
    handleAgeChange=(e)=> {
        const age = e.target.value;
        this.setState({ age });
        this.props.handleAgeChange(age);
    };
    handleTitleChange=(e)=>{
        const title = e.target.value;
        this.setState({ title });
        this.props.handleTitleChange(title);
    };
    handleAddressChange=(e)=>{
        const address = e.target.value;
        this.setState({ address });
        this.props.handleAddressChange(address);
    };
    handlePhoneChange=(e)=>{
        const phone = e.target.value;
        this.setState({ phone });
        this.props.handlePhoneChange(phone);
    };
    handleEmailChange=(e)=>{
        const email = e.target.value;
        this.setState({ email });
        this.props.handleEmailChange(email);
    };
    handleObjChange=(e)=>{
        const obj = e.target.value;
        this.setState({ obj });
        this.props.handleObjChange(obj);
    };
    handlePicChange=(e)=>{
        const pic=e.target.files[0];
        const reader = new FileReader();

     reader.onload = () => {
        const imageDataURL = reader.result;
        this.setState({imageDataURL});
        this.props.handlePicChange(imageDataURL)
      };
  
      reader.readAsDataURL(pic);
    };

    render(){
        return(
            <>
                
                <div  className="per-inputs">
                <h3>Personal Information</h3>
                <textarea placeholder="Objective" onChange={this.handleObjChange}></textarea>
                <input placeholder="Full name" onChange={this.handleNameChange} id="fullName"   type="text"></input>
                <input placeholder="Title" onChange={this.handleTitleChange} id="title"   type="text"></input>
                <input placeholder="Address" onChange={this.handleAddressChange} id="title"   type="text"></input>
                <input placeholder="Phone Number" onChange={this.handlePhoneChange} id="title"   type="text"></input>
                <input placeholder="Age" onChange={this.handleAgeChange}  id="age"   type="text"></input>
                <input placeholder="Email" onChange={this.handleEmailChange} id="email" type="email"></input>
                <input  accept="image/*"  onChange={this.handlePicChange} id="facePic"   type="file"></input>
              
                </div>
            
            </>

        )

    }
};





export {PersonalInfo};