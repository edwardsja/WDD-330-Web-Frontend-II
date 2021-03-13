function getJSON(url) {
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
        return response.json();
        }
    })
    .catch(error => {
        console.log(error);
    })
}

const getLocation = options => {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
};

export {getJSON, getLocation};