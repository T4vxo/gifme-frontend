$(document).ready(() => {
    $(".btn").on("click", function(){
        var ser = document.getElementById("input").value;
        $.ajax({
            method:"GET",
            dataType: "json",
            url: "http://localhost:8080/api/memebuilder/text/random?seek=" + ser,
            crossDomain: true,
            statusCode: {
                200: function(data, jqXHR){
                    console.log(data.footer);
                    console.log(data.header);
                    document.getElementById("gt1").innerHTML = data.header;
                    document.getElementById("gt2").innerHTML = data.footer;
                },
                500:function(){
                    console.log("Server error");

                }
            }
        })
        $.ajax({
            method:"GET",
            dataType: "json",
            url: "http://localhost:8080/api/radgif/gif/" + ser,
            crossDomain: true,
            statusCode: {
                200: function(data, jqXHR){
                    console.log(data.url);
                    document.getElementById("gifMeme").src = data.url;
                },
                500:function(){
                    console.log("Server error");
                }
            }
        })


        
    });

    
})