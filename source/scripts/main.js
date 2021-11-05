import { fetchParty } from "./dataAccess.js"
import { ButtonsTheClown } from "./buttons-the-clown.js"



const mainContainer = document.querySelector('#container')
mainContainer.addEventListener('stateChanged',
customEvent => {
    render()
    }
)

const render = () => {
    fetchParty().then(
        ()=> {
            mainContainer.innerHTML = ButtonsTheClown()
        }
    )
}

render()