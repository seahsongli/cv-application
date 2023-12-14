function Education({schoolName, degree, startDate, endDate}){
    return (
        <div className = "Education">
            <h2>Education</h2>
            <div>
            <h3 className = "school-name">{schoolName}</h3>
            <div className = "title-date">
                <p>{degree}</p>
                <p>{startDate} to {endDate}</p>
            </div>
            </div>
        </div>
    )
}
export default Education;