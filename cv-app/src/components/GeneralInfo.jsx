
function GeneralInformation({name, email, phoneNumber}){
    return (
    <div className = "General-Information">
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{phoneNumber}</h2>
    </div>
    )
}
export default GeneralInformation;