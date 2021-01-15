//import axios from 'axios'

import {
    DATA_FORM,GET_ERRORS
} from './types'




export const sendDataToTemplate = (formData,history,link) => dispatch =>{
 
    console.log("reached to storeage all get",formData)

        dispatch({
            type:DATA_FORM,
              payload :formData
        })
        history.push(link)

   
}



