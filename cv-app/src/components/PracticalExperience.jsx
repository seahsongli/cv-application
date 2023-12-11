function PracticalExperience({companyName, positionTitle, startDate, endDate, description}){
    return (
        <div className = "PracticalExperience">
            <h2>{companyName}</h2>
            <h2>{positionTitle}</h2>
            <h2>{startDate} - {endDate}</h2>
            <h2>{description}</h2>
        </div>
    )
}
export default PracticalExperience;