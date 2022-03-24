
export const UserService = {
    register,
    login
}
function register(values) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ data: values })
    };
    return fetch("http://localhost:3600/signup", requestOptions)
        .then((json) => json.json())
        .then(data => {
            //   setLoader(false)
            console.log('registerData--->',data)
            //   toast(data.message)
            return data;
        })
}

function login(values) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ data: values })
    };
    return fetch("http://localhost:3600/login", requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        })


}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
                //    window.location.reload();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log(data)
        return data;
    });
}