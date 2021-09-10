import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_MEMBER, FAIL_MESSAGE } from "../actions";


export const initialState = {
    smurfs:[{
        name:'Poppa Smurf',
        position: 'Village Leader',
        nickname:'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }],
    isLoading:false,
    error:'',
    failMessage:''
}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case(FETCH_START):
           return({
               ...state,
               smurfs:[],
               isLoading: true,
               error:'',
               failMessage:''
           });
        case(FETCH_SUCCESS):
           return({
               ...state,
               smurfs: [action.payload],
               isLoading: false,
               error:'',
               failMessage:''
           })
        case(FETCH_FAIL):
           return({
               ...state,
               smurfs: [],
               isLoading: false,
               error: action.payload,
               failMessage: ''
           })
        case(ADD_MEMBER): {
          const newSmurf = {
          name: action.payload.name,
          position: action.payload.position,
          nickname: action.payload.nickname,
          description:action.payload.description,
          id: Date.now() + Math.random()
        }
           return({
               ...state,
               smurfs: [...state.smurfs, newSmurf],
               isLoading: false,
               error:'',
               failMessage:''
           })
        }
        case(FAIL_MESSAGE):
        return({
            ...state,
               smurfs: [],
               isLoading: false,
               error: '',
               failMessage: action.payload
        })
        default:
            return state;
    }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.