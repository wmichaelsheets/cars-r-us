import { setInterior } from "./TransientState.js"


const handleInteriorChange = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        setInterior(parseInt(changeEvent.target.value))
    }
}


export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interior")
    const interior = await response.json()

    document.addEventListener("change", handleInteriorChange)

    

    let interiorOptionsHTML = "<select id='interior'>"
    interiorOptionsHTML += "<option value=''>Select an interior option</option>"
    const optionStringArray = interior.map(
        (interior) => {
            return `<option value='${interior.id}'>${interior.fabric}</option>`
        }
    )

        interiorOptionsHTML +=  optionStringArray.join("")
        interiorOptionsHTML += "</select>"

    return interiorOptionsHTML
    

 }