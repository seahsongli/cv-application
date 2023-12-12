const GeneralInformationSection = ()  =>{
    return (
    <div className = "general-information">
        <label for = "fullName">Full Name: </label>
        <input type = "text" name = "fullName"></input>
        <label for = "email">Email:</label>
        <input type = "text" name = "email"></input>
        <label for = "phoneNumber">Phone Number:</label>
        <input type = "text" name = "phoneNumber"></input>
    </div>
    )
}
export default GeneralInformationSection;