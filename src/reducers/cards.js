

const initialState={ 
 card:{},
 cards:[]
};
 
   const cards=  (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_NEW_CARD':
            return{
                ...state, 
                card:action.payload
            }
            case 'ADD_CARDS':
                return{
                    ...state, 
                    cards:action.payload
                }
                
                                         
                                     
        default: 
        return  state;
 
}
   }
export default cards;