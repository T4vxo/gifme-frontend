/**
 * Update the auth link's callback uri.
 */
function initAuthCallbackUri() {
  let loc = document.location;
  let link = $('#authorize-github');
  let callbackUrl = `${loc.origin}${loc.pathname}`;
  link.attr('href', `${link.attr('href')}&redirect_uri=${encodeURIComponent(callbackUrl)}`);
}

/**
 * Checks for an existing authorization code in the URL.
 * @returns {string|null} The code which was found or null if no code was found.
 */
function checkAuthCode() {
  let queryMatch = document.location.search.match(/code=([^&]*)/);
  if (!queryMatch || queryMatch.length < 2) {
    return null;
  }

  return queryMatch[1];
}

/**
 * Fetches user data.
 * @param {string} clientCode Auth code returned from GitHub.
 * @param {(authToken: string) => void} cb Callback, if fetch succeeded.
 * @param {(error: any) => void} errorCb Callback, if fetch failed or user was unauthoized.
 */
function authWithGitHub(clientCode, cb, errorCb) {
  $.ajax(getBackendUrl('/auth/github', `client_code=${clientCode}`), {
    method: 'GET',
    statusCode: {
      200: data => {
        console.log("DATA: ", data);
        let { token } = JSON.parse(data);
        cb(token);
      }
    }
  })
}

/**
 * Authorizes with a token passed from the server.
 * @param {string} token Auth token returned from the server.
 */
function continueWithToken(token){
  Cookies.set('auth_token', token);
  document.location = "../random_gif";
}


function initAuthFlow() {
  console.log("initAuthFlow")
  let code = checkAuthCode();
  console.log("[initAuthFlow] code: " + code)
  if (code == null) {
    //  No code present, setup auth link
    //initAuthCallbackUri();
    return;
  }

  authWithGitHub(code, token => { continueWithToken(token) }, () => {});
}

/**
 * Requests a auth token using basic auth.
 * @param {string} username 
 * @param {string} password 
 * @param {(token: string) => void} cb 
 * @param {(error: any) => void} errorCb 
 */
function authWithBasicAuth(username, password, cb, errorCb) {
  $.ajax(getBackendUrl('/auth'), {
    method: 'GET',
    headers: {
      "Authorization": `Basic ${btoa(`${username}:${password}`)}`
    },
    statusCode: {
      200: data => {
        console.log("DATA: ", data);
        let { token } = JSON.parse(data);
        cb(token);
      }
    }
  })
}

window.onload = () => {
  initAuthFlow();

  $('#sign-in-form').on('submit', e => {
    e.preventDefault();
    authWithBasicAuth(
      $('#input-username').val(),
      $('#input-password').val(),
      continueWithToken
    );
  })
};