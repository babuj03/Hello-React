import React from 'react'


const search = (props) => {

    const OnKeyEnterHandler =(e)=>{
       props.onkeyEnter(e.target.value)
    }
    
   return (
        <div style={{
            textAlign:'center',
            padding: '40px', 
          
            alignItems: 'center'}}>
            <label>Search By First Name</label>
            <input type='text'  onChange={OnKeyEnterHandler} placeholder='Search.....'></input>
            
        </div>
    )
}

export default search
