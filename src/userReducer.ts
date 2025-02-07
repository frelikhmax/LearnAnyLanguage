import { Language } from "./data/InitialWords";

const initialState = {
    nativeLanguage: Language.english,
};

const userReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'SET_NATIVE_LANGUAGE':
            return {
                ...state,
                nativeLanguage: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;