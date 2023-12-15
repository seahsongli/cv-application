import { useState } from "react";
const PracticalExperienceSection = ({onChange, experiences}) =>{
    const handleAddExperience = () => {
      const newExperiences = [...experiences, {company: "",
      position: "",
      expStartDate: "",
      expEndDate: "",
      description: ""}]   // Add an empty experience to the list
      onChange(newExperiences);
      return newExperiences
    }
    const handleDeleteExperience = (index) => {
      const newExperiences = [...experiences];
      newExperiences.splice(index, 1); // Remove the experience at the specified index
      onChange(newExperiences);
      return newExperiences;
    };
    const handleChange = (e, index) =>{
      const {name, value} = e.target;
      // If you change "company" at index 1, only that index gets changed.
        const newExperiences = [...experiences];
        newExperiences[index] = {...newExperiences[index], [name] : value};
        onChange(newExperiences);
        return newExperiences
      }
      
    return (
      <div className = "experience-info" id = "form">
        <h1>Work Experience</h1>
        {experiences.map((experience, index) =>{
          return (
            <div className = "experience" key = {index}>
              <h2>Experience {index + 1}</h2>
              <label> 
                Company: 
                <input type = "text" name ="company" onChange = {(e)=>handleChange(e, index)}></input>
              </label>
              <label>
                Position Title:
                <input type = "text" name = "position" onChange = {(e)=>handleChange(e, index)}></input>
              </label>
              <label>
                Start date:
                <input type = "date" name = "expStartDate" onChange = {(e)=>handleChange(e, index)}></input>
              </label>
              <label>
                End Date:
                <input type = "date" name = "expEndDate" onChange = {(e)=>handleChange(e, index)}></input>
              </label>
              <label>
                Main Responsibilites:
                <textarea rows = "4" cols = "50" name = "description" onChange = {(e)=>handleChange(e, index)}></textarea>
              </label>
              <button id = "delete" onClick = {() => handleDeleteExperience(index)}>Delete</button> 
            </div>
          )
        })}
        <button id = "add"onClick = {handleAddExperience}>Add</button>
        
      </div>
    )
  }
export default PracticalExperienceSection;