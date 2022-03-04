import React from 'react';

const DirectoryList = () => {
    const users = [
        { id: 1, firstName: 'Brandon', lastName: 'James', email: 'king_james@test.com', alias: 'King James', image: 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png', phone: "+18681234567" },
        { id: 2, firstName: 'Trivelle', lastName: 'Blake', email: 'project_b@test.com', alias: 'Project B', image: 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png', phone: "+18681234567" },
        { id: 3, firstName: 'Emmanuel', lastName: 'Sammy', email: 'jus_sammy@test.com', alias: 'Jus Sammy', image: 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png', phone: "+18681234567" },
        { id: 4, firstName: 'Marcus', lastName: 'Williams', email: 'marcus@test.com', alias: 'Marcus Williams', image: 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png', phone: "+18681234567" },
        { id: 5, firstName: 'Kieron', lastName: 'Ryan', email: 'selecta_k@test.com', alias: 'Selecta K', image: 'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png', phone: "+18681234567" }
    ];

    function view(dj) {
        window.localStorage.setItem('user', JSON.stringify(dj))
        window.location.href = '/dj/' + dj.id
    }

    return (
        <div className="container">
            <h3 className="p-3 text-center my-5">DJ/Host Directory</h3>

            <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search" />
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Alias</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td><a href="#" onClick={() => view(user)}>{user.alias}</a></td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="container my-5">
                <h2 className="mt-5 pb-4 text-center">Render Profiles List *Doing</h2>
                <div className="profile-list">
                    {users && users.map(user =>
                        <div className="col-sm-3">
                            <div id="user-card" key={user.id} className="card mx-3 my-4 rounded shadow">
                                <div className="card-body">
                                    <div className="float-left">
                                        <img className="img-fluid" src={user.image} alt={user.alias}></img>
                                    </div>
                                    <div className="float-right mt-3 mr-5">
                                        <p>{user.firstName} {user.lastName}</p>
                                        <p>{user.alias}</p>
                                        <p>{user.email}</p>
                                        <p>{user.phone}</p>
                                    </div>
                                </div>
                                <div className="mx-auto my-1"><button className="btn btn-info mb-2" onClick={() => view(user)}>View</button></div>
                            </div>
                        </div>
                    )}</div>
            </div>


        </div>
    );
}

export default DirectoryList;