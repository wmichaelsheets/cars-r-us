// Set up the transient state data structure and provide initial values
const transientState = {
    "paintColorId": 0, 
    "interiorId": 0, 
    "technologyId": 0,
    "wheelsId": 0
}

// Functions to modify each property of transient state
export const setPaint = (chosenPaint) => {
    transientState.paintColorId = chosenPaint
    console.log(transientState)
}

export const setInterior = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTech = (chosenTech) => {
    transientState.technologyId = chosenTech
    console.log(transientState)
}

export const setWheels = (chosenWheels) => {
    transientState.wheelsId = chosenWheels
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

const customEvent = new CustomEvent("newOrderCreated")
document.dispatchEvent(customEvent)
}
