const PracticalExperienceSection = () =>{
    return (
        <div className = "experience">
        <label for = "school" name = "company"> Company: </label>
        <input type = "text" name = "company"></input>
        <label for = "position">Position Title:</label>
        <input type = "text" name = "position"></input>
        <label for = "startDate">Start date:</label>
        <input type = "date" name = "startDate"></input>
        <label for = "endDate">End Date:</label>
        <input type = "date" name = "endDate"></input>
        <label for = "description">Main Responsibilites:</label>
        <textarea name = "description" rows = "4" cols = "50"></textarea>
        <button>Add</button>
      </div>
    )
}
export default PracticalExperienceSection;