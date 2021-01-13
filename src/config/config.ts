const config = {
  baseURI: {
    dev: 'https://www.edtechfinder.nl', // The main URI to the API to which the app makes requests to (exlude trailing /)
    production: 'https://www.edtechfinder.nl/',
  },
  localStorageAuthTokenKey: 'auth-token', // The key for the localstorage entry for the JWT token
  localStorageUserInfoKey: 'user-info', // The key for the localstorage entry for the user info object
  afterLoginRedirectTime: 2000, //The amout of ms after successfull login, after which the user is redirected to the homepage
  cmsTextsEndpoint: '/cms-texts', // The endpoint to which request for the texts is made on page load
};

export default config;
