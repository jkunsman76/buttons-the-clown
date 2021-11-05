import { PartyForm } from "./partyForm.js"
import { PartyRequests } from "./partyRequest.js"

export const ButtonsTheClown = () => {
    return `
        <h1>Buttons the Dancing Clown</h1>
        <section class="partyForm">
            ${PartyForm()}
        </section>

        <section class="pendingParties">
            <h2>Party Requests</h2>
            ${PartyRequests()}
        </section>
    `
}