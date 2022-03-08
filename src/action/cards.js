import axios from "axios"
import {  FETCH_SHUFFLE_CARD, SHUFFLE_CARD} from "../constants"
  
 

export const  fetchCards=(shop)=> async (dispatch) =>{
  
     
    await   axios.get(SHUFFLE_CARD)
    .then(async(res)=>{
        await dispatch({
            type:'ADD_NEW_CARD',
            payload:res.data
        })
          
    await   axios.get(FETCH_SHUFFLE_CARD+res.data.deck_id+'/draw/?count=4')
    .then(async(res)=>{
        await dispatch({
            type:'ADD_CARDS',
            payload:res.data.cards
        })
        
         
    })
    .catch((err)=>{
        
        console.log(err)
    })
         
    })
    .catch((err)=>{
        
        console.log(err)
    })

}

export const  shuffleCards=(card_id)=> async (dispatch) =>{
   
    await   axios.get(FETCH_SHUFFLE_CARD+card_id+'/draw/?count=4')
    .then(async(res)=>{
        await dispatch({
            type:'ADD_CARDS',
            payload:res.data.cards
        })  
    })
    .catch((err)=>{
        
        console.log(err)
    }) 
}
 