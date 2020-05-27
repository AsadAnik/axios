This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installing AXIOS...
    ### `npm i axios`

### Adding/Importing & Uses...
## Performing a POST request
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

## Performing multiple concurrent requests,
    function getUserAccount() {
        return axios.get('/user/12345');
    }
 
    function getUserPermissions() {
        return axios.get('/user/12345/permissions');
    }
 
    axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
    }));

## Requests can be made by passing the relevant config to axios.
    // Send a POST request
    axios({
        method: 'post',
        url: '/user/12345',
        data: {
            firstName: 'Fred',
            lastName: 'Flintstone'
        }
    });
    
    // GET request for remote image
    axios({
        method: 'get',
        url: 'http://bit.ly/2mTM3nY',
        responseType: 'stream'
    })
    .then(function (response) {
        response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
    
## Default GET,
    // Send a GET request (default method)
    axios('/user/12345');

## axios includes TypeScript definitions,
    import axios from 'axios';
    axios.get('/user?ID=12345');
