

import { Component } from 'react';
import { PersonalInfo } from './Components/Personal';
import { EducationalInfo } from './Components/Educational';
import { PracticalInfo } from './Components/Practical';
import { Cv } from './Components/cv';
import avatar from './npc_avtar.png'

class App extends Component{
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
    this.handleUniName=this.handleUniName.bind(this);
    this.handleUniDeg=this.handleUniDeg.bind(this);
    this.handleUniSub=this.handleUniSub.bind(this);
    this.handleUniCity=this.handleUniCity.bind(this);
    this.handleUniFrom=this.handleUniFrom.bind(this);
    this.handleUniTo=this.handleUniTo.bind(this);
    this.handlePosChange=this.handlePosChange.bind(this);
    this.handleCompNameChange=this.handleCompNameChange.bind(this);
    this.handleCompCityChange=this.handleCompCityChange.bind(this);
    this.handleCompFromChange=this.handleCompFromChange.bind(this);
    this.handleCompToChange=this.handleCompToChange.bind(this);
    this.handleJobDescChange=this.handleJobDescChange.bind(this);
    this.state={
        name:'',
        age:'',
        email:'',
        title:'',
        address:'',
        phone:'',
        obj:'',
        img:avatar,
        uniName:'',
        uniCity:'',
        uniDeg:'',
        uniSub:'',
        uniFrom:'',
        uniTo:'',
        pos:'',
        compName:'',
        compCity:'',
        compFrom:'',
        compTo:'',
        jobDesc:'',


    }
  }

  handleNameChange=(name)=> {
    this.setState({ name });
  };
  handleAgeChange=(age)=>{
    this.setState({age});
  };
  handleTitleChange=(title=>{
    this.setState({title});
  });
  handleObjChange=(obj=>{
    this.setState({obj})
  });
  handlePhoneChange=(phone=>{
    this.setState({phone});
  });
  handleAddressChange=(address=>{
    this.setState({address})
  });
  handleEmailChange=(email=>{
    this.setState({email})
  });
  handlePicChange=(img=>{
    this.setState({img})
  });
  handleUniName=(uniName=>{
    this.setState({uniName})
  });
  handleUniCity=(uniCity=>{
    this.setState({uniCity})
  });
  handleUniDeg=(uniDeg=>{
    this.setState({uniDeg})
  });
  handleUniSub=(uniSub=>{
    this.setState({uniSub})
  });
  handleUniFrom=(uniFrom=>{
    this.setState({uniFrom})
  });
  handleUniTo=(uniTo=>{
    this.setState({uniTo})
  });
  handlePosChange=pos=>{
    this.setState({pos})
  };
  handleCompNameChange=(compName=>{
    this.setState({compName})
  });
  handleCompCityChange=(compCity=>{
    this.setState({compCity})
  });
  handleCompFromChange=(compFrom=>{
    this.setState({compFrom})
  });
  handleCompToChange=(compTo=>{
    this.setState({compTo})
  });
  handleJobDescChange=(jobDesc=>{
    this.setState({jobDesc})
  })

  render(){
    return(
      <>
      <div className='inputs'>
      <PersonalInfo  handleNameChange={this.handleNameChange} 
      handleAgeChange={this.handleAgeChange}
      handleTitleChange={this.handleTitleChange} 
      handleAddressChange={this.handleAddressChange}
      handleEmailChange={this.handleEmailChange}
      handleObjChange={this.handleObjChange}
      handlePhoneChange={this.handlePhoneChange}
      handlePicChange={this.handlePicChange}
       />

      <EducationalInfo
      handleUniName={this.handleUniName}
      handleUniCity={this.handleUniCity}
      handleUniDeg={this.handleUniDeg}
      handleUniSub={this.handleUniSub}
      handleUniFrom={this.handleUniFrom}
      handleUniTo={this.handleUniTo}

      />

      <PracticalInfo 
      handlePosChange={this.handlePosChange}
      handleCompNameChange={this.handleCompNameChange}
      handleCompCityChange={this.handleCompCityChange}
      handleCompFromChange={this.handleCompFromChange}
      handleCompToChange={this.handleCompToChange}
      handleJobDescChange={this.handleJobDescChange}
      />


      </div>


      <Cv name={this.state.name} 
      age={this.state.age}
      title={this.state.title} 
      phone={this.state.phone}
      obj={this.state.obj}
      address={this.state.address}
      email={this.state.email}
      img={this.state.img}
      uniName={this.state.uniName}
      uniCity={this.state.uniCity}
      uniDeg={this.state.uniDeg}
      uniSub={this.state.uniSub}
      uniFrom={this.state.uniFrom}
      uniTo={this.state.uniTo}
      pos={this.state.pos}
      compName={this.state.compName}
      compCity={this.state.compCity}
      compFrom={this.state.compFrom}
      compTo={this.state.compTo}
      jobDesc={this.state.jobDesc}

       />
      </>
    )
  }
}
export default App;
