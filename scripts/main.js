// import {  } from './Interiors.js'
// import {  } from './Paints.js'
import { TechOptions } from './Technologies.js'
import { WheelOptions } from './Wheels.js'
// import { SaveSubmission } from './OrderButton.js'
// import { Orders } from './PlacedOrders.js'

const container = document.querySelector("#container")

const render = async () => {
    // const metalOptionsHTML = await MetalOptions()
     const wheelOptionsHTML = await WheelOptions()
     const techOptionsHTML = await TechOptions()
    // const buttonHTML = await SaveSubmission()
    // const orderHTML = await Orders()

    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                <div class="style-options">${wheelOptionsHTML}</div>     
            </section>

            <section class="choices__technology options">
                <h2>Technologies</h2>
                <div class="style-options">${techOptionsHTML}</div>     
            </section>
            
        </article>

       
    `

    container.innerHTML = composedHTML
}

document.addEventListener("newOrderCreated", render) 
//     => {
//     console.log("State of data has changed. Regenerating HTML. . .")
//     render()
// })

render()