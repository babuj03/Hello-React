
import React, { useState } from 'react';
import Search from './Search'

const Users = (props) => {

    const { users } = props;
    let filteredUsers = Object.assign({}, users);

   
    const [stateUsers, setStateUsers] = useState(Object.values(filteredUsers))

    function renderTableHeader() {
        if (users.length > 0) {
            let header = Object.keys(users[0])
            header = header.splice(0, 7)
            header.push("Details")
            return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }
    }

    function renderTableData() {
         console.log(JSON.stringify(stateUsers),"-----------stateUsers-----------------")
        if (Object.values(stateUsers).length > 0) {
            return Object.values(stateUsers).map((user, index) => {
                const { id, first_name, middle_name, last_name, dob, active, createdBy } = user //destructuring
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{first_name}</td>
                        <td>{middle_name}</td>
                        <td>{last_name}</td>
                        <td>{dob}</td>
                        <td>{active ? 'Active' : 'inActive'}</td>
                        <td>{createdBy}</td>
                        <td><button onClick={() => { props.setUser(user) }}>Details</button></td>
                    </tr>
                )
            })
        }
    }

    function filterUsersByFirstName(firstName) {

        if(firstName.length == 0){
         setStateUsers(stateUsers => filteredUsers);
        } else {
        
            console.log(stateUsers, "----333333333-----" + firstName)
            let filterByName = Object.values(filteredUsers).filter(user => {
                console.log(firstName + "......", user)
                if (user && user.first_name.toLowerCase().includes(firstName.toLowerCase()))
                    return user;
            })
            console.log(filterByName, "----4444444-----" + firstName)
            if (Object.values(filterByName).length > 0 || firstName.length >0) {
                setStateUsers(stateUsers => Object.assign({}, filterByName));
            }
     }
       


    }


    const keyEnterHandler=() =>setStateUsers(stateUsers => filteredUsers);
return (
   
    <div>
        <Search onkeyEnter={filterUsersByFirstName}  setState={keyEnterHandler}></Search>
        <h1 id='title'>List of Users</h1>
        <table id='users'>
            <tbody>
              
                {renderTableHeader()}
                {renderTableData()}
            </tbody>
        </table>
    </div>
)
}


export default Users