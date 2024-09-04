import { setStyle } from "./TransientState.js"


const handleStyleChange = (changeEvent) => {
    if (changeEvent.target.name === "style") {
        setStyle(parseInt(changeEvent.target.value))
    }
}


export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const style = await response.json()

    document.addEventListener("change", handleStyleChange)

    // let styleOptionsHTML = "<ul>"
    // for (const styles of style) {
    //     styleOptionsHTML += `<input type='radio' name='style' value='${styles.id}' /> ${styles.style}`

    //     styleOptionsHTML +=  "</ul>"
    // }


    let styleOptionsHTML = ""
    const divStringArray = style.map(
        (style) => {
            return `<div>
                <input type='radio' name='style' value='${style.id}' /> ${style.style}
            </div>`
        }
    )

        styleOptionsHTML +=  divStringArray.join("")
    
    return styleOptionsHTML
    

 }