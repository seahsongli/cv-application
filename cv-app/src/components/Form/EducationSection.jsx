const EducationSection = ({onChange}) =>{
    return (
        <div className = "education">
            <label>
                School Name: 
                <input type = "text" name = "schoolName"onChange = {(e)=>onChange(e)}></input>
            </label>
            <label>
                Degree Name:
                <input type = "text" name = "degree" onChange = {(e)=>onChange(e)}></input>
            </label>
            <label>
                Start date:
                <input type = "date" name = "startDate" onChange = {(e)=>onChange(e)}></input>
            </label>
            <label>
                End Date:
                <input type = "date" name = "endDate" onChange = {(e)=>onChange(e)}></input>
            </label>
      </div>
    )
};
export default EducationSection;