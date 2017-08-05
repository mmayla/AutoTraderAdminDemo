import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';
import rp from 'request-promise';

export default (type, params) => {
    // called when the user attempts to log in
    if (type === AUTH_LOGIN) {
      const { username, password } = params;
      const options = {
        method: 'PUT',
        uri: `${process.env.REACT_APP_SERVER_URL}/login`,
        body: {
          email: username,
          password,
        },
        json: true,
      };

      return rp(options).then((json) => {
        const { username, admin } = json;
        localStorage.setItem('username', username);
        localStorage.setItem('admin', admin);
      }).catch((err) => {
        throw new Error('username or password does not exist');
      });
      return Promise.resolve();
    }

    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        localStorage.removeItem('admin');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
          localStorage.removeItem('username');
          localStorage.removeItem('admin');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    }
    return Promise.reject('Unknown method');
};
