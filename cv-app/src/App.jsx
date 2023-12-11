import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Education from './components/Education'
import GeneralInformation from './components/GeneralInfo'
import PracticalExperience from './components/PracticalExperience'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GeneralInformation name ="test"  email = "test2" phoneNumber = "1234"/>
    <Education schoolName="hoho" title = "Med school" startDate = "nil" endDate = "nil"/>
    <PracticalExperience companyName = "dummy" positionTitle= "slave" startDate="nil" endDate = "nil" description= "testing"/>
    </>
  )
}

export default App
