import { getParties } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")

export const PartyRequests = () => {
    const Partyrequests = getParties()
    const convertRequestsToListElement = (each) => {
        return `<li>
                    This party is for ${each.childsName} and
                    ${each.childrenAttending} children are attending. 
                   The length of party is ${each.lengthOfParty}hrs, 
                    and its held at ${each.address}
                    <select class="clowns" id="clowns">
    <option value="">Choose</option>
    ${clowns.map(
            clown => {
                return `<option value="${xxx.id}--${xxx.id}">${xxx.name}</option>`
                    }
                )
            .join("")}
                    </select>

            < button class="request__delete" id = "request--${each.id}" > Deny</button >
                </li > `
    }
    let html = `
    < ul >
    ${
        Partyrequests.map(convertRequestsToListElement).join("")
}
        </ul >
    `

    return html
}

mainContainer.addEventListener("click",
 click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
