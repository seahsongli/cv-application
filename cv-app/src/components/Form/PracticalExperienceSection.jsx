const PracticalExperienceSection = ({onChange}) =>{
    return (
        <div className = "experience">
        <label> 
          Company: 
          <input type = "text" name ="company" onChange = {(e)=>onChange(e)}></input>
        </label>
        <label>
          Position Title:
          <input type = "text" name = "position" onChange = {(e)=>onChange(e)}></input>
        </label>
        <label>
          Start date:
          <input type = "date" name = "expStartDate" onChange = {(e)=>onChange(e)}></input>
        </label>
        <label>
          End Date:
          <input type = "date" name = "expEndDate" onChange = {(e)=>onChange(e)}></input>
        </label>
        <label>
          Main Responsibilites:
          <textarea rows = "4" cols = "50" name = "description" onChange = {(e)=>onChange(e)}></textarea>
        </label>
        <button>Add</button>
      </div>
    )
}
export default PracticalExperienceSection;