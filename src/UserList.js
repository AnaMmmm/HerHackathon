import React from 'react';
import User from './User.js';

const UserList = ({ users }) => {
    return(    
        <div>
            {users.map((user, i) => {
                return (
                <User 
                    key={user.id} 
                    id={user.id} 
                    name={user.name} 
                    email={user.email} 
                    department={user.department}
                    image={user.image}
                    />
                );
            })
        }
    </div>
);}

export default UserList;