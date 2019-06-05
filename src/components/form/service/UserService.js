export default class UserService {
    myHdrs = new Headers({
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ5NWE4M2Y4NjM3MjlhMWY3YzIxZWY4NjMxMzFmZTEwZjI0ZTczOTMyOWYyMzkyZWU3ZmFhZmY0MDI1ODY2MDU0YTdjMGRiMDMwMWI5ZDgyIn0.eyJhdWQiOiIyIiwianRpIjoiNDk1YTgzZjg2MzcyOWExZjdjMjFlZjg2MzEzMWZlMTBmMjRlNzM5MzI5ZjIzOTJlZTdmYWFmZjQwMjU4NjYwNTRhN2MwZGIwMzAxYjlkODIiLCJpYXQiOjE1NTk3NjQzMDAsIm5iZiI6MTU1OTc2NDMwMCwiZXhwIjoxNTkxMzg2NzAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rNYK_nz5Nqk8ijc0EpbDU85iNmVyosuDbJs2sjkj5VlutVyMNlPaX3mUfozGdDCVAhCHTXSvM2Av4nIDBAeGAGvwPe-BntbgeZRfkn4S3BR4DxybCcSPZq8XyJwk87XLY3bC182urUmJofpT9s47WxvJMBOz-SAQeIQD55RINkyoNxD_SGmfx3hsG5gvJAh-0h5zIrCHV1V230rN8RoidKY5TiS-3TG9gStDmibii1M8FhQ_Dkwz_-OFvYjjUNN8SNaJqxg0HPqXfzm6NTVtZOXsZrL8iZJx155Wl1BfPG2pdPJMQdviGGvGNFSUwvhHbcP7hW_wUhiFDw9YZDn7LfkD3TIr4nJT0JEOiFCDfnjgf8dGs5S_dB6d6s2IxzOxBn0Gj_W8jLq90FiSbJgpCa3eDeM-1j9V73s0pK2878w3zTxgAodvNoZu7Oo17TRhxFvryuvYWDkNHHVivdhvrGFIL4M4FNIZdbbmFCu3Z-vl1xlXgDRYElwQr2_AKkJNy2LHyK3xPA8AM6OgSifPyoMG33nzI_noHHaJfHPGOUJ3mjMHiY722Ucwq_MKbIPev87drsNTUiQ54soTo7L9cROIZA_N4HpUyR_YUPW-1uNdCpZgsnjZOtQcyAPrQwxzC7DEY3xECgZ0J8xERY2X9Ssg-aM8_PGn253xfVh9p4A',
        'Content-Type': 'application/json',
    });

    
    
    async all(page = 1) {
        return fetch ('http://dev.api.gsci.techx.eng.br/api/user', {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ5NWE4M2Y4NjM3MjlhMWY3YzIxZWY4NjMxMzFmZTEwZjI0ZTczOTMyOWYyMzkyZWU3ZmFhZmY0MDI1ODY2MDU0YTdjMGRiMDMwMWI5ZDgyIn0.eyJhdWQiOiIyIiwianRpIjoiNDk1YTgzZjg2MzcyOWExZjdjMjFlZjg2MzEzMWZlMTBmMjRlNzM5MzI5ZjIzOTJlZTdmYWFmZjQwMjU4NjYwNTRhN2MwZGIwMzAxYjlkODIiLCJpYXQiOjE1NTk3NjQzMDAsIm5iZiI6MTU1OTc2NDMwMCwiZXhwIjoxNTkxMzg2NzAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rNYK_nz5Nqk8ijc0EpbDU85iNmVyosuDbJs2sjkj5VlutVyMNlPaX3mUfozGdDCVAhCHTXSvM2Av4nIDBAeGAGvwPe-BntbgeZRfkn4S3BR4DxybCcSPZq8XyJwk87XLY3bC182urUmJofpT9s47WxvJMBOz-SAQeIQD55RINkyoNxD_SGmfx3hsG5gvJAh-0h5zIrCHV1V230rN8RoidKY5TiS-3TG9gStDmibii1M8FhQ_Dkwz_-OFvYjjUNN8SNaJqxg0HPqXfzm6NTVtZOXsZrL8iZJx155Wl1BfPG2pdPJMQdviGGvGNFSUwvhHbcP7hW_wUhiFDw9YZDn7LfkD3TIr4nJT0JEOiFCDfnjgf8dGs5S_dB6d6s2IxzOxBn0Gj_W8jLq90FiSbJgpCa3eDeM-1j9V73s0pK2878w3zTxgAodvNoZu7Oo17TRhxFvryuvYWDkNHHVivdhvrGFIL4M4FNIZdbbmFCu3Z-vl1xlXgDRYElwQr2_AKkJNy2LHyK3xPA8AM6OgSifPyoMG33nzI_noHHaJfHPGOUJ3mjMHiY722Ucwq_MKbIPev87drsNTUiQ54soTo7L9cROIZA_N4HpUyR_YUPW-1uNdCpZgsnjZOtQcyAPrQwxzC7DEY3xECgZ0J8xERY2X9Ssg-aM8_PGn253xfVh9p4A',
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

    get(id) {

    }

    save(user) {
        return fetch ('http://dev.api.gsci.techx.eng.br/api/user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: new Headers({
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ5NWE4M2Y4NjM3MjlhMWY3YzIxZWY4NjMxMzFmZTEwZjI0ZTczOTMyOWYyMzkyZWU3ZmFhZmY0MDI1ODY2MDU0YTdjMGRiMDMwMWI5ZDgyIn0.eyJhdWQiOiIyIiwianRpIjoiNDk1YTgzZjg2MzcyOWExZjdjMjFlZjg2MzEzMWZlMTBmMjRlNzM5MzI5ZjIzOTJlZTdmYWFmZjQwMjU4NjYwNTRhN2MwZGIwMzAxYjlkODIiLCJpYXQiOjE1NTk3NjQzMDAsIm5iZiI6MTU1OTc2NDMwMCwiZXhwIjoxNTkxMzg2NzAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rNYK_nz5Nqk8ijc0EpbDU85iNmVyosuDbJs2sjkj5VlutVyMNlPaX3mUfozGdDCVAhCHTXSvM2Av4nIDBAeGAGvwPe-BntbgeZRfkn4S3BR4DxybCcSPZq8XyJwk87XLY3bC182urUmJofpT9s47WxvJMBOz-SAQeIQD55RINkyoNxD_SGmfx3hsG5gvJAh-0h5zIrCHV1V230rN8RoidKY5TiS-3TG9gStDmibii1M8FhQ_Dkwz_-OFvYjjUNN8SNaJqxg0HPqXfzm6NTVtZOXsZrL8iZJx155Wl1BfPG2pdPJMQdviGGvGNFSUwvhHbcP7hW_wUhiFDw9YZDn7LfkD3TIr4nJT0JEOiFCDfnjgf8dGs5S_dB6d6s2IxzOxBn0Gj_W8jLq90FiSbJgpCa3eDeM-1j9V73s0pK2878w3zTxgAodvNoZu7Oo17TRhxFvryuvYWDkNHHVivdhvrGFIL4M4FNIZdbbmFCu3Z-vl1xlXgDRYElwQr2_AKkJNy2LHyK3xPA8AM6OgSifPyoMG33nzI_noHHaJfHPGOUJ3mjMHiY722Ucwq_MKbIPev87drsNTUiQ54soTo7L9cROIZA_N4HpUyR_YUPW-1uNdCpZgsnjZOtQcyAPrQwxzC7DEY3xECgZ0J8xERY2X9Ssg-aM8_PGn253xfVh9p4A',
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
            credentials: 'same-origin',
        })
        .then(user => user.json())
        .catch(err => console.log(err));
    }

    async update(id) {
        return fetch ('http://dev.api.gsci.techx.eng.br/api/user/'+id, {
            method: 'DELETE',            
            headers: new Headers({
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ5NWE4M2Y4NjM3MjlhMWY3YzIxZWY4NjMxMzFmZTEwZjI0ZTczOTMyOWYyMzkyZWU3ZmFhZmY0MDI1ODY2MDU0YTdjMGRiMDMwMWI5ZDgyIn0.eyJhdWQiOiIyIiwianRpIjoiNDk1YTgzZjg2MzcyOWExZjdjMjFlZjg2MzEzMWZlMTBmMjRlNzM5MzI5ZjIzOTJlZTdmYWFmZjQwMjU4NjYwNTRhN2MwZGIwMzAxYjlkODIiLCJpYXQiOjE1NTk3NjQzMDAsIm5iZiI6MTU1OTc2NDMwMCwiZXhwIjoxNTkxMzg2NzAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rNYK_nz5Nqk8ijc0EpbDU85iNmVyosuDbJs2sjkj5VlutVyMNlPaX3mUfozGdDCVAhCHTXSvM2Av4nIDBAeGAGvwPe-BntbgeZRfkn4S3BR4DxybCcSPZq8XyJwk87XLY3bC182urUmJofpT9s47WxvJMBOz-SAQeIQD55RINkyoNxD_SGmfx3hsG5gvJAh-0h5zIrCHV1V230rN8RoidKY5TiS-3TG9gStDmibii1M8FhQ_Dkwz_-OFvYjjUNN8SNaJqxg0HPqXfzm6NTVtZOXsZrL8iZJx155Wl1BfPG2pdPJMQdviGGvGNFSUwvhHbcP7hW_wUhiFDw9YZDn7LfkD3TIr4nJT0JEOiFCDfnjgf8dGs5S_dB6d6s2IxzOxBn0Gj_W8jLq90FiSbJgpCa3eDeM-1j9V73s0pK2878w3zTxgAodvNoZu7Oo17TRhxFvryuvYWDkNHHVivdhvrGFIL4M4FNIZdbbmFCu3Z-vl1xlXgDRYElwQr2_AKkJNy2LHyK3xPA8AM6OgSifPyoMG33nzI_noHHaJfHPGOUJ3mjMHiY722Ucwq_MKbIPev87drsNTUiQ54soTo7L9cROIZA_N4HpUyR_YUPW-1uNdCpZgsnjZOtQcyAPrQwxzC7DEY3xECgZ0J8xERY2X9Ssg-aM8_PGn253xfVh9p4A',
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
            credentials: 'same-origin',
        })
        .then(user => user.json())
        .catch(err => console.log(err));
    }

    delete(id) {
        return fetch ('http://dev.api.gsci.techx.eng.br/api/user/'+id, {
            method: 'DELETE',            
            headers: new Headers({
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ5NWE4M2Y4NjM3MjlhMWY3YzIxZWY4NjMxMzFmZTEwZjI0ZTczOTMyOWYyMzkyZWU3ZmFhZmY0MDI1ODY2MDU0YTdjMGRiMDMwMWI5ZDgyIn0.eyJhdWQiOiIyIiwianRpIjoiNDk1YTgzZjg2MzcyOWExZjdjMjFlZjg2MzEzMWZlMTBmMjRlNzM5MzI5ZjIzOTJlZTdmYWFmZjQwMjU4NjYwNTRhN2MwZGIwMzAxYjlkODIiLCJpYXQiOjE1NTk3NjQzMDAsIm5iZiI6MTU1OTc2NDMwMCwiZXhwIjoxNTkxMzg2NzAwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.rNYK_nz5Nqk8ijc0EpbDU85iNmVyosuDbJs2sjkj5VlutVyMNlPaX3mUfozGdDCVAhCHTXSvM2Av4nIDBAeGAGvwPe-BntbgeZRfkn4S3BR4DxybCcSPZq8XyJwk87XLY3bC182urUmJofpT9s47WxvJMBOz-SAQeIQD55RINkyoNxD_SGmfx3hsG5gvJAh-0h5zIrCHV1V230rN8RoidKY5TiS-3TG9gStDmibii1M8FhQ_Dkwz_-OFvYjjUNN8SNaJqxg0HPqXfzm6NTVtZOXsZrL8iZJx155Wl1BfPG2pdPJMQdviGGvGNFSUwvhHbcP7hW_wUhiFDw9YZDn7LfkD3TIr4nJT0JEOiFCDfnjgf8dGs5S_dB6d6s2IxzOxBn0Gj_W8jLq90FiSbJgpCa3eDeM-1j9V73s0pK2878w3zTxgAodvNoZu7Oo17TRhxFvryuvYWDkNHHVivdhvrGFIL4M4FNIZdbbmFCu3Z-vl1xlXgDRYElwQr2_AKkJNy2LHyK3xPA8AM6OgSifPyoMG33nzI_noHHaJfHPGOUJ3mjMHiY722Ucwq_MKbIPev87drsNTUiQ54soTo7L9cROIZA_N4HpUyR_YUPW-1uNdCpZgsnjZOtQcyAPrQwxzC7DEY3xECgZ0J8xERY2X9Ssg-aM8_PGn253xfVh9p4A',
                'Content-Type': 'application/json',
            }),
            mode: 'cors',
            credentials: 'same-origin',
        })
        .then(user => user.json())
        .catch(err => console.log(err));
    }
}

