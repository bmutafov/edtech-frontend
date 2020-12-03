const config = {
  baseURI: 'http://localhost:1337', // The main URI to the API to which the app makes requests to (exlude trailing /)
  localStorageAuthTokenKey: 'auth-token', // The key for the localstorage entry for the JWT token
  localStorageUserInfoKey: 'user-info', // The key for the localstorage entry for the user info object
};

export default config;
