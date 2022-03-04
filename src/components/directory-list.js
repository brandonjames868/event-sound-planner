import React from 'react';

const DirectoryList = () => {
    const users = [
        { id: 1, firstName: 'Brandon', lastName: 'James', email: 'king_james@test.com', alias: 'King James', image:'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png' },
        { id: 2, firstName: 'Trivelle', lastName: 'Blake', email: 'project_b@test.com', alias: 'Project B', image:'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png' },
        { id: 3, firstName: 'Emmanuel', lastName: 'Sammy', email: 'jus_sammy@test.com', alias: 'Jus Sammy', image:'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png' },
        { id: 4, firstName: 'Marcus', lastName: 'Williams', email: 'marcus@test.com', alias: 'Marcus Williams', image:'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png'},
        { id: 5, firstName: 'Kieron', lastName: 'Ryan', email: 'selecta_k@test.com', alias: 'Selecta K', image:'https://www.pngkey.com/png/full/349-3499617_person-placeholder-person-placeholder.png' }
    ];

    function view(dj){
        window.localStorage.setItem('user', JSON.stringify(dj))
        window.location.href='/dj/' + dj.id
    }

    return (
        <div className="container">
            <h3 className="p-3 text-center">DJ Directory List</h3>
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
        </div>
    );
}

export default DirectoryList;