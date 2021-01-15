import {DATA_FORM
} from '../actions/types'

const initialState = {
    formData:null
}
    

export default function(state = initialState,action){
    switch(action.type){

    
            case DATA_FORM:
                return {
                    ...state,
                    formData:action.payload
                }


        default :
        return state
    }
}