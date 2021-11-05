import {sendPartyRequest} from './dataAccess.js'




const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userChildsName = document.querySelector("input[name='childsName']").value
        const userChildren = document.querySelector("input[name='childrenAttending']").value
        const userAddress = document.querySelector("input[name='partyAddress']").value
        const userLength = document.querySelector("input[name='partyLength']").value
        const userDate = document.querySelector("input[name='partyDate']").value

        // Make an object out of the user input
        const dataToSendToAPI =  {
            childsName: userChildsName,
            childrenAttending: userChildren,
            address: userAddress,
            lengthOfParty: userLength,
            date: userDate
          }

        // Send the data to the API for permanent storage
        sendPartyRequest(dataToSendToAPI)
    }
})

export const PartyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="childsName">Party Childs Name</label>
            <input type="text" name="childsName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childrenAttending">Number of Childern Attending</label>
            <input type="number" name="childrenAttending" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyLength">Length of Party in Hours</label>
            <input type="number" name="partyLength" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyDate">Date of Party</label>
            <input type="date" name="partyDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}
