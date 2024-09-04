import { setWheels } from "./TransientState.js"


const handleWheelChange = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        setWheels(parseInt(changeEvent.target.value))
    }
}


export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheel = await response.json()

    document.addEventListener("change", handleWheelChange)

       let wheelOptionsHTML = "<select id='wheel'>"
    const optionStringArray = wheel.map(
        (wheel) => {
            return  `<option value='${wheel.id}'>${wheel.type}</option>`
        }
    )

    wheelOptionsHTML +=  optionStringArray.join("")
    wheelOptionsHTML += "</select>"

    return wheelOptionsHTML
    

 }