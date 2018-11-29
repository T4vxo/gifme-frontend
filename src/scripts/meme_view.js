/**
 * Updates an existing meme view.
 * @param {string} topText Top text to use.
 * @param {string} bottomText Bottom text to use.
 * @param {string} imageUrl URL of image to use.
 */
function setMemeView(topText, bottomText, gifUrl) {
    document.getElementById("gt1").innerHTML = topText;
    document.getElementById("gt2").innerHTML = bottomText;
    document.getElementById("gifMeme").src = gifUrl;
}