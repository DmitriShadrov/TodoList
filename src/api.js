const BASE_URL = 'https://contacts-telran.herokuapp.com';

export default class Api{
    static registaration(email,password){
        const requestBody = JSON.stringify({email,password});
        return request(`${BASE_URL}/api/registaration`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=utf-8'
            },
            body:requestBody
        });
    }
    static login(email,password){
        const requestBody = JSON.stringify({email,password});
        return request(`${BASE_URL}/api/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=utf-8'   
            },
            body:requestBody
        })
    }
    static delAllContacts(token){
        return request(`${BASE_URL}/api/clear`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                'Authorization': token
            }
        });
    }
    static getAllContacts(token){
        return request(`${BASE_URL}/api/contact`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': token
            }
        });
    }
    static addNewContact(token,contact){
        const requestBody = JSON.stringify(contact);
        return request(`${BASE_URL}/api/contact`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                'Authorization': token
            },
            body:requestBody
        });
    }
    static updateContact(token,contact){
        const requestBody = JSON.stringify(contact);
        return request(`${BASE_URL}/api/contact`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                'Authorization': token
            },
            body:requestBody
        });
    }
    static delContact(token,id){
        return request(`${BASE_URL}/api/contact/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json; charset=utf-8',
                'Authorization': token
            }
        });
    }
}

function request(url,options){
    return new Promise((resolve,reject) => {
        fetch(url,options)
        .then(parseJson)
        .then(result => {
            if(result.ok){
                return resolve(result.json);
            }
            return reject(result.json);
        }).catch(error => {
            reject({message:error.message});
        });
    });
        
}
function parseJson(response){
    return new Promise(resolve => {
        response.json()
        .then(json => resolve({
            status:response.status,
            ok: response.ok,
            json
        }));
    });
};