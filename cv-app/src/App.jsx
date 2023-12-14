import { useState } from 'react'
import './App.css'
import Education from './components/Education'
import GeneralInformation from './components/GeneralInfo'
import PracticalExperience from './components/PracticalExperience'
import InputForm from './components/Form/InputForm'
function App() {
  const [formdata, setFormData] = useState({
    "name"  : "",
    "email" : "",
    "phoneNumber" : "",
    "schoolName": "",
    "degree" : "",
    "startDate" : "",
    "endDate" : "",
    // "jobExperience" : {0 :{
    //   "company" : "",
    //   "position" : "",
    //   "expStartDate" : "",
    //   "expEndDate" : "",
    //   "description" : ""
    // }
  // }
  
  })
  const [experiences , setExperiences] = useState([{"company" : "",
  "position" : "",
  "expStartDate" : "",
  "expEndDate" : "",
  "description" : ""}]);

  const handleFormChange = (newFormData) =>{
    setFormData(newFormData);
  } 

  
  // const handleAddExperience = (newE) => {
  //   setExperiences([...experiences, {company: "",
  //   position: "",
  //   expStartDate: "",
  //   expEndDate: "",
  //   description: ""}]) // Add an empty experience to the list
  // }
  const handleAddExperience = (newExperiences) => {
    setExperiences(newExperiences) 
  }
  const handleDeleteExperience = (newExperiences) => {
    setExperiences(newExperiences)
  };
  // const handleExpChange = (e, index) =>{
  //   const {name, value} = e.target;
  //   console.log("Handling change:", e.target.name, e.target.value);
  //   // If you change "company" at index 1, only that index gets changed.
  //   setExperiences((newExperiences) => )
  //   setExperiences((pastExperiences)=>{
  //     const newExperiences = [...pastExperiences];
  //     newExperiences[index] = {...newExperiences[index], [name] : value};
  //     return newExperiences
  //   })
  const handleExpChange = (newExperiences) =>{
    setExperiences(newExperiences)
  }
    
    // If you change "company" at index 1, only that index gets changed.
    
  return (
    
    <div className = "app">
      <InputForm className = "form" onChange = {handleFormChange} addExp = {handleAddExperience} delExp = {handleDeleteExperience} expChange = {handleExpChange} experiences = {experiences}/>
      <div className = "form-container">
        <GeneralInformation 
          name ={formdata.name} 
          email = {formdata.email} 
          phoneNumber = {formdata.phoneNumber}
        />
        <Education 
          schoolName={formdata.schoolName} 
          degree = {formdata.degree} 
          startDate = {formdata.startDate} 
          endDate = {formdata.endDate}
        />
        <PracticalExperience 
          experiences={experiences} 
        />
      </div>
    </div>
  )
}


export default App
