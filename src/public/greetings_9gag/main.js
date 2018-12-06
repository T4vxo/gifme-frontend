/**
 * Fetches a random gag.
 * @param {(gag: { text: string[], imageUrl: string })} cb
 */
function fetchGag(cb) {
  $.ajax(getBackendUrl('/9gag/post/random'), {
    statusCode: {
      200: data => {
        let { displayedText, imageUrl } = JSON.parse(data);
        cb({
          text: displayedText,
          imageUrl
        })
      }
    }
  })
}

/**
 * Inits the flow; fetches a gag and sets assigns element attributes.
 */
function init() {
  fetchGag(gag => {
    $('#gt1').text(gag.text[0]);
    $('#gt2').text(gag.text[1]);
  });
}

window.onload = init;