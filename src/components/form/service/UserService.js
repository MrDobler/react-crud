export default class UserService {
    authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ2MTQxNWRlMzlhZWJjMjBkNGQxMjk3ZmE4ZjA3ZjE2MWVlMzZhOWYyZGIxYTQ4ZjU5MmZlYTg3ZjM4ZDIwZmE2YWNhNDFmMTAwMmU3NWM0In0.eyJhdWQiOiIyIiwianRpIjoiZDYxNDE1ZGUzOWFlYmMyMGQ0ZDEyOTdmYThmMDdmMTYxZWUzNmE5ZjJkYjFhNDhmNTkyZmVhODdmMzhkMjBmYTZhY2E0MWYxMDAyZTc1YzQiLCJpYXQiOjE1NTk4MjQzMzcsIm5iZiI6MTU1OTgyNDMzNywiZXhwIjoxNTkxNDQ2NzM3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GzTXBrdX1iMDkKQjy0ipuzF8Z6P6FyXbi_PkX92h95nu-PYNv_rKJU2vkwKwnu0_Ziovvq38D0nsW3jw92zPFJNLp6ZwbwxH9HP03oxcMQTOMLTqiHKMV1KIf-s_9JhbZ9ahUYeVRVKhmRUK7WEd_c5hPmDCu5Xq-JH-YjvE4WJBhw1e9imb1yFoz4aLKPjpr6pqcnbOPj40xWzQr5eYZBcrlMwePtx7fCRaul_Nf1heuDEjsZRYxFdmuzMBYzF9Kra2bkEldMlPjooFAMnduHc_CfcW40GeMnbyDMDyPP2pV6Wfv9OuqBI_sH3KeR0a4NOkFJ69nr7wt41xH9Zot29NmamWP46haE-LcsEozGEm5Gzw5UE3O5zgbTMysRzg8u9XbvFxXHDq4XYetLj_yLH1tG0kyPzgNdNRr7KdcgmWbiV7W7MM6s12Fms8mwcgGaYIMlJD-6bqFMZa2T05Ntl36VVwS3nnTi0kLjkMkF8YM2a0VE5e2d5ZWMoSfOcphGXHdEEkf2ppEsOAOTLgUxLZsOKEEWfJVdGj0wM_YVGVd_El0DJ_CUMw2REJR7yT1splE6XLKvbdzEKMjO6IkIKfrrIbjO_LGmrVEOniZjDZ04VWxthdjN_xforTymDqe9xp8YyT5LQydXv-tEALBepARROUVp8JeThldXuvu1s';

    async all(page = 1) {
        return fetch ('http://dev.api.gsci.techx.eng.br/api/user', {
            method: 'GET',
            headers: new Headers({
                'Authorization': this.authorization,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
            credentials: 'same-origin',
        })
        .then(user => user.json())
        .catch(err => console.log(err));

        // return fetch('https://5cf6d7b146583900149cbcc6.mockapi.io/react-api/user/user?page='+page+'&limit=10')
        // .then((user) => user.json())
        // .catch((err) => console.log(err));
    }

    async save(user) {
        return fetch ('http://dev.api.gsci.techx.eng.br/api/user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: new Headers({
                'Authorization': this.authorization,
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
            credentials: 'same-origin',
        })
        .then(user => user.json())
        .catch(err => console.log(err));
    }

    async update(id, user) {
        return fetch ('http://dev.api.gsci.techx.eng.br/api/user/'+id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: new Headers({
                'Authorization': this.authorization,
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
            credentials: 'same-origin',
        })
        .then(user => user.json())
        .catch(err => console.log(err));
    }

    async delete(id) {
        return fetch ('http://dev.api.gsci.techx.eng.br/api/user/'+id, {
            method: 'DELETE',            
            headers: new Headers({
                'Authorization': this.authorization,
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
            credentials: 'same-origin',
        })
        .then(user => user.json())
        .catch(err => console.log(err));
    }
}

