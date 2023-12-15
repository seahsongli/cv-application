import { useState } from 'react'
import './App.css'
import Education from './components/Education'
import GeneralInformation from './components/GeneralInfo'
import PracticalExperience from './components/PracticalExperience'
import InputForm from './components/Form/InputForm'
function App() {
  const [formdata, setFormData] = useState({
    "name"  : "Geroge Swavorski",
    "email" : "george@gmail.com",
    "phoneNumber" : "+12 3456 7891",
    "schoolName": "Stanford University",
    "degree" : "Bachelor of Computer Science",
    "startDate" : "2023-12-15",
    "endDate" : "2027-12-15",
  })

  const [experiences , setExperiences] = useState([{
  "company" : "Softwarexyz",
  "position" : "Software internship",
  "expStartDate" : "2022-10-15",
  "expEndDate" : "2022-12-15",
  "description" : "Created and maintained CI/CD Pipeline and improved sales of the company by 10%"}]);

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
