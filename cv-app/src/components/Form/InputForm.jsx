import EducationSection from "./EducationSection";
import GeneralInformationSection from "./GeneralInformationSection";
import PracticalExperienceSection from "./PracticalExperienceSection";
const InputForm = () =>{
    return (
    <div  className = "input-form">
    <GeneralInformationSection/> 
    <EducationSection/>
    <PracticalExperienceSection/>
    </div>
    )
}
export default InputForm;