import React,{Component} from "react";
import "../styles/cv.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faMapLocationDot} from'@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
class Cv extends Component{
    constructor(props) {
        super(props);
        this.cvLayoutRef = React.createRef();
        this.downloadAsPDF=this.downloadAsPDF.bind(this);
      }
    
      downloadAsPDF = () => {
        const element = this.cvLayoutRef.current;
    
        html2canvas(element).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save(`${this.props.name}_CV.pdf`);
        });
      };

    render(){

        return(
            
            <div>
                <div className="cvLayout" ref={this.cvLayoutRef}>
                    <div className="cvHeader">
                    <h1> {this.props.name} </h1>
                    <h5> {this.props.title} </h5>

                    </div>
                        <div className="cvBody">
                            <div className="cvPer">
                        <img src={this.props.img}></img>
                        <h4>Personal Details</h4>
                        <h5><FontAwesomeIcon icon={faEnvelope} />:{this.props.email}</h5>
                            <h5><FontAwesomeIcon icon={faPhone} />:{this.props.phone}</h5>                       
                            <h5><FontAwesomeIcon icon={faMapLocationDot} />:{this.props.address}</h5>
                            <h5><FontAwesomeIcon icon={faUser} />:{this.props.age}</h5>
                            
                            </div>
                            <div className="cvContent">
                            <h4>Objective</h4>
                            <h5>{this.props.obj}</h5>
                            <h4>Education</h4>
                            <div className="eduPeriod">
                                <p>{this.props.uniFrom}-{this.props.uniTo}</p>
                                <div className="eduData">
                                    <p>{this.props.uniName},{this.props.uniCity}</p>
                                    <p>Degree:{this.props.uniDeg}  Subject:{this.props.uniSub}</p>
                                </div>

                            </div>

                            <h4>Experience</h4>
                            <div className="expPeriod">
                                <p>{this.props.compFrom}-{this.props.compTo}</p>
                                <div className="expData">
                                    <p>{this.props.pos}</p>
                                    <p>{this.props.compName},{this.props.compCity}</p>
                                    <p>Job Description:{this.props.jobDesc}</p>
                                </div>

                            </div>
                        
                            </div>
                        </div>
                </div>
                <button onClick={this.downloadAsPDF}>Download as PDF</button>
            </div>
            
        )
    }

}

export {Cv}