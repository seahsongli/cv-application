const GeneralInformationSection = ({onChange})  =>{
    return (
    <div className = "general-information" id = "form">
        <h1>Personal Information</h1>
        <label>
            Full Name: 
            <input type = "text" name = "name" onChange = {(e)=> onChange(e)}></input>
        </label>
        <label>
            Email:
            <input type = "text" name = "email"onChange = {(e)=> onChange(e)}></input>
        </label>
        <label>
            Phone Number:
            <input type = "text" name = "phoneNumber" onChange = {(e)=> onChange(e)}></input>
        </label>
    </div>
    )
}
export default GeneralInformationSection;