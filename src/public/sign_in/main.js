/**
 * Updates the authorize link with a redirect URI.
 */
function initAuthorizeLink(){
  let link = $('#authorize-github');
  let redirectUri = document.location.origin;
  link.attr('src', `${link.attr('src')}&redirect_uri=${redirectUri}`);
}

/**
 * Checks for an existing authorization code in the URL.
 * @returns {string|null} The code which was found or null if no code was found.
 */
function checkAuthCode() {

}

/**
 * Fetches user data.
 * @param {string} clientAuthCode Auth code returned from GitHub.
 * @param {(data: any) => void} cb Callback, if fetch succeeded.
 * @param {(error: any) => void} errorCb Callback, if fetch failed or user was unauthoized.
 */
function fetchUser(clientAuthCode, cb, errorCb) {
  
}


function initAuthFlow() {
  let code = checkAuthCode();
  if (code == null) {
    //  No code present, setup auth link
    initAuthorizeLink();
    return;
  }

  fetchUser();


}