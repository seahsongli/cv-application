
function GeneralInformation({name, email, phoneNumber}){
    return (
    <div className = "personal-information">
        <h1>{name}</h1>
        <div className = "email-phone">
            <h2>{email}</h2>
            <h2>{phoneNumber}</h2>
        </div>
    </div>
    )
}
export default GeneralInformation;