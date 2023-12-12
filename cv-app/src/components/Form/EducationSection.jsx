const EducationSection = () =>{
    return (
        <div className = "education">
            <label for = "school">School Name: </label>
            <input type = "text" name = "school"></input>
            <label for = "degree">Degree Name:</label>
            <input type = "text" name = "degree"></input>
            <label for = "startDate">Start date:</label>
            <input type = "date" name = "startDate"></input>
            <label for = "endDate">End Date:</label>
            <input type = "date" name = "endDate"></input>
      </div>
    )
};
export default EducationSection;