function Education({schoolName, degree, startDate, endDate}){
    return (
        <div className = "Education">
            <h2>{schoolName}</h2>
            <div className = "title-date">
                <h2>{degree}</h2>
                <h2>{startDate} - {endDate}</h2>
            </div>
        </div>
    )
}
export default Education;