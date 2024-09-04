import { setPaint } from "./TransientState.js"


const handlePaintChange = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        setPaint(parseInt(changeEvent.target.value))
    }
}


export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paint")
    const paint = await response.json()

    document.addEventListener("change", handlePaintChange)

   

    let paintOptionsHTML = "<select id='paint'>"
    paintOptionsHTML += "<option value=''>Select a paint color</option>"
    const optionStringArray = paint.map(
        (paint) => {
            return `<option value='${paint.id}'> ${paint.hue}</option>`
        }
    )

        paintOptionsHTML +=  optionStringArray.join("")
        paintOptionsHTML += "</select>"

    return paintOptionsHTML
    

 }