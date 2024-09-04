import { setTech } from "./TransientState.js"


const handleTechChange = (changeEvent) => {
    if (changeEvent.target.id === "tech") {
        setTech(parseInt(changeEvent.target.value))
    }
}


export const TechOptions = async () => {
    const response = await fetch("http://localhost:8088/technology")
    const tech = await response.json()

    document.addEventListener("change", handleTechChange)

    
    let techOptionsHTML = "<select id='tech'>"
    techOptionsHTML += "<option value=''>Select a technology option</option>"
    const optionStringArray = tech.map(
        (tech) => {
            return  `<option value='${tech.id}'>${tech.package}</option>`
        }
    )

    techOptionsHTML += optionStringArray.join("")
    techOptionsHTML += "</select>"
    
    return techOptionsHTML
    

 }