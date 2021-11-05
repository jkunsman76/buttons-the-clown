


const API = "http://localhost:8088"

const mainContainer = document.querySelector('#container')


// write a fetch method for party and store the external state in the application state
export const fetchParty = () => {
    return fetch(`${API}/party`)
    .then(response => response.json())
    .then(
        (pendingParties) => {
            applicationState.party = pendingParties
        }
        )
    }
    
    
    export const sendPartyRequest = (userPartyRequest) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userPartyRequest)
        }
        
        
        return fetch(`${API}/party`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
    }
    
    export const deleteRequest = (id) => {
        return fetch(`${API}/party/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
            )
        }
        
        const applicationState = {
            party: []
        }
        
        export const getParties = () => {
            return applicationState.party.map(parties => ({ ...parties }))
        }