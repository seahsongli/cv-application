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
    "company" : "",
    "position" : "",
    "expStartDate" : "",
    "expEndDate" : "",
    "description" : ""
  })
  const handleFormChange = (newFormData) =>{
    setFormData(newFormData);
  } 
  return (
    <>
    <InputForm onChange = {handleFormChange}/>
    <div className = "display">
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
        company = {formdata.company} 
        positionTitle= {formdata.position} 
        startDate={formdata.expStartDate} 
        endDate = {formdata.expEndDate} 
        description= {formdata.description}
      />
    </div>
    </>
  )
}

export default App
