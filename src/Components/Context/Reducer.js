export let data={
    a : 'a',
    b: 'b',
    authUser : null
}

export function Reducer(state, action) {
    switch (action.type) {
        case "AUTH_USER": {
            return {
                ...state,
                authUser: action.payload
            }
        }

        
        default:
            return state;

    }
}