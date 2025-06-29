### Axios and Requests to the Server

- Whenever you make a request to the server, it will respond with an error code if the task is unsuccessful.
- So, if you receive a OK status code, then the task was successful
- Also the api.js will have withCredentials= true for authentication. If not, make sure it is set like that so that whenever we make a request to the server, the authentication token will automatically be put in the cookies
