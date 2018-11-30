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
 * @param {(data: any) => void} cb Callback, if fetch succeeded.
 * @param {(error: any) => void} errorCb Callback, if fetch failed or user was unauthoized.
 */
function fetchUser(clientCode, cb, errorCb) {
  $.ajax(getBackendUrl('/auth', `client_code=${clientCode}`), {
    method: 'GET',
    success: d => {
      debugger;
    }
  })
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

  fetchUser(code, () => {}, () => {});
}

window.onload = initAuthFlow;