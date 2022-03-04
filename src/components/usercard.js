import React from 'react';
import Usercarditem from './usercarditem';

const usercard = ({ users }) => {
    return (<div className="row">
        {users.map((user) => (
            <Usercarditem user={user} />
        ))}
    </div>)
}

export default usercard;