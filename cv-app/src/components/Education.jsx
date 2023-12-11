function Education({schoolName, title, startDate, endDate}){
    return (
        <div className = "Education">
            <h2>{schoolName}</h2>
            <div className = "title-date">
                <h2>{title}</h2>
                <h2>{startDate} - {endDate}</h2>
            </div>
        </div>
    )
}
export default Education;