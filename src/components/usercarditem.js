import React from 'react'

const Usercarditem = ({ user }) => {
    return (
        <div className="col-sm-3">
            <div class="card text-white bg-dark mb-3 tr-dj-card">
                <div class="card-header">{user.alias}</div>
                <div class="card-body">
                    <h5 class="card-title">Dark card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

export default Usercarditem;