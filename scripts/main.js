import {  } from './Interiors.js'
import {  } from './Paints.js'
import {  } from './Technologies.js'
import {  } from './Wheels.js'
// import { SaveSubmission } from './OrderButton.js'
// import { Orders } from './PlacedOrders.js'

const container = document.querySelector("#container")

const render = async () => {
    // const metalOptionsHTML = await MetalOptions()
    // const styleOptionsHTML = await StyleOptions()
    // const sizeOptionsHTML = await SizeOptions()
    // const buttonHTML = await SaveSubmission()
    // const orderHTML = await Orders()

    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Paint</h2>
               //  <div class="metal-options">${metalOptionsHTML}</div> 
            </section>

            <section class="choices__sizes options">
                <h2>Interior</h2>
              //  <div class="size-options">${sizeOptionsHTML}</div> 
            </section>

            <section class="choices__styles options">
                <h2>Wheels</h2>
             //   <div class="style-options">${styleOptionsHTML}</div>     
            </section>

            <section class="choices__styles options">
                <h2>Technologies</h2>
             //   <div class="style-options">${styleOptionsHTML}</div>     
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${orderHTML}
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