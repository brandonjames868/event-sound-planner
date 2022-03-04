import React from 'react'

const Usercarditem = ({ user }) => {
    return (
        <div className="col-sm-3">
            <div class="card text-white bg-dark mb-3 tr-dj-card">
                <div class="card-header">{user.id}</div>
                <div class="card-body">
                    <h5 class="card-title">Name</h5>
                    <p class="card-text">Rating</p>
                    <div className="btn btn-primary profile-btn rounded">View Profile</div>
                </div>
            </div>
        </div>
    )
}

export default Usercarditem;