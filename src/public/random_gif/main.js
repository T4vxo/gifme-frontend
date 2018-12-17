
$(document).ready(init)

/**
 *  called when document has been loaded
 */
function init() {
    console.log('document is ready');

    $("#btn").on("click", searchButton());

    setupListeners()

}

/**
 * performs GET request from backend
 */
function search(query = $(".input").val()) {


    $.ajax({
        type: "GET",
        url: getBackendUrl(`/randgif/gif/${encodeURIComponent(query)}`),
        dataType: "json",
        success: onSearchSuccess,
        statusCode: {
            404: function () {
                alert("page not found");
            },
            500: function () {
                alert("server error");
            },
        }
    });
}

/**
 * Fetches gif on a successfull search
 * @param {*} data 
 */
function onSearchSuccess(data) {
    console.log(data);
    $('.gifImg').attr('src', data.url);
}

/**
 * Keyboard listener
 * Calls 'triggerSearch' by pressing 'Enter/Return'
 */
function setupListeners() {
    $('#input').on('keydown', e => {
        if (e.keyCode == 13) {
            //  Enter pressed
            triggerSearch()
            e.preventDefault();
        }
    });
}

/**
 * Triggers a GIF search.
 */
function triggerSearch() {
    searchButton();
}