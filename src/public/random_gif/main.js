$(document).ready(() => {
    console.log('document is ready');
    
    $("#btn").on("click", () => {

        var query = $(".input").val();
        console.log(query);

        $.ajax({
            type: "GET",
            url: `http://localhost:8080/api/randgif/gif/${encodeURIComponent(query)}`,
            dataType: "json",
            success: (data) => {
                console.log(data);
                $('.gifImg').attr('src', data.url);
                
            },
            statusCode: {
                404: function () {
                    alert("page not found");
                },
                500: function () {
                    alert("server error");
                },
            }
        });
    });

    setupListeners()
})

function setupListeners() {
    $('#input').on('keydown', e => {
        if (e.keyCode == 13){
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
    $('#btn').click();
}