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
  })

  const [experiences , setExperiences] = useState([{"company" : "",
  "position" : "",
  "expStartDate" : "",
  "expEndDate" : "",
  "description" : ""}]);

  const handleFormChange = (newFormData) =>{
    setFormData(newFormData);
  } 

  const handleExperienceChange = (newExperiences) =>{
    setExperiences(newExperiences)
  }
    
  return (
    
    <div className = "app">
      <InputForm className = "form" onChange = {handleFormChange} expChange = {handleExperienceChange} experiences = {experiences}/>
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
