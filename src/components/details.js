import React from 'react';

const Details = () => {
    const user = window.localStorage.getItem('user') !== null || window.localStorage.getItem('user') !== 'null' ? JSON.parse(window.localStorage.getItem('user')) : null

    return (
        <>
            {user !== null ?
                <div className="container">
                    <div className="card">
                        <h3 className="p-3 text-center">{user.firstName} {user.lastName}</h3>
                        <h4 className="p-3 text-center">{user.alias}</h4>
                        <img className="mx-auto my-auto" src={user.image} alt={user.alias}></img>
                        <div class="d-grid mx-auto">
                            <button type="button" className="btn btn-info mt-5 mb-5">Book Now</button>
                        </div>
                    </div>
                </div>
                :
                <div className="container">
                    <h4 className="p-3 text-center">Oops.. we're unable to fetch DJ details at this time.</h4>
                </div>
            }
        </>
    );
}

export default Details;