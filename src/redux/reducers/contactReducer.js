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
        default:
            return state;
    }
};

export default contactReducer;