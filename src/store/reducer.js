

const initialState = {
    users:[],
    user :{}
}



const reducer = (state=initialState, action) =>{
    console.log('^^^^^^^^^^^^^^^^^^^^^',action);

    switch(action.type)
    {

        case 'FETCH_USERS' :
            return Object.assign({},  {
                 users: action.value,
              })
        case 'ACTIVE_USER' :
            return Object.assign({}, {
                user: action.value,
             })
        default :
           return state;

    }
    
    
}

export default reducer;