import { getDefaultNormalizer } from "@testing-library/dom"

const initialState =[
    {
        id:0,
        name: "Dave Camb",
        number: 1234563452,
        email: "123@gmail.com",
    },
    {
        id:1,
        name: "Eric Lam",
        number: 7824563452,
        email: "456@gmail.com",
    },
    {
        id:2,
        name: "David Norman",
        number: 1234566492,
        email: "789@gmail.com",
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
        state = [...state, action.payload];
     return state;
     case "UPDATE_CONTACT":
         const updateState = state.map(contact=> contact.id === action.payload.id ? action.payload : contact);
         state = updateState;
         return state;
    case "DELETE_CONTACT":
        const filterContact = state.filter(
            (contact) => contact.id !== action.payload && contact
        );
        state = filterContact;
        default:
            return state;
    }
};

export default contactReducer;