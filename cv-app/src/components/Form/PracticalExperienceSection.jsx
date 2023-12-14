import { useState } from "react";
const PracticalExperienceSection = ({onChange}) =>{
    const [experiences , setExperiences] = useState([]);
    const handleAddExperience = () => {
      setExperiences([...experiences, {}]) // Add an empty experience to the list
    }
    const handleDeleteExperience = (index) => {
      setExperiences((prevExperiences) => {
        const newExperiences = [...prevExperiences];
        newExperiences.splice(index, 1); // Remove the experience at the specified index
        return newExperiences;
      });
  
      onChange(newExperiences);
    };
    const handleChange = (e, index) =>{
      const {name, value} = e.target;
      // If you change "company" at index 1, only that index gets changed.
      setExperiences((pastExperiences)=>{
        const newExperiences = [...pastExperiences];
        newExperiences[index] = {...newExperiences[index], [name] : value};
        return newExperiences
      })
      onChange(newExperiences);
      
    }
    return (
      <div>
        {experiences.map((experience, index) =>{
          return (
            <div className = "experience" key = {index}>
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
          <button onClick = {(index) => handleDeleteExperience(index)}>Delete</button>
        </div>
          )
        })}
        <button onClick = {handleAddExperience}>Add</button>
        
      </div>
    )
}
export default PracticalExperienceSection;