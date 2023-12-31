import EducationSection from "./EducationSection";
import GeneralInformationSection from "./GeneralInformationSection";
import PracticalExperienceSection from "./PracticalExperienceSection";
const InputForm = ({onChange, expChange, experiences}) =>{
  const handleChange = (e) => {
    const {name,value} = e.target;
    onChange((prevData) => {
      return ({
        ...prevData,
        [name] : value
      })
    })
  }
    return (
    <div className = "input-form">
      <GeneralInformationSection onChange = {handleChange}/> 
      <EducationSection onChange = {handleChange} />
      <PracticalExperienceSection onChange = {expChange} experiences={experiences}/>
    </div>
    )
}
export default InputForm;