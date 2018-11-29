$(document).ready(() => {
    $(".btn").on("click", function(){
        var ser = document.getElementById("input").value;
        //kallar på api för att fp två stringar
        $.ajax({
            method:"GET",
            dataType: "json",
            url: "http://localhost:8080/api/memebuilder/text/random?seek=" + ser,
            crossDomain: true,
            statusCode: {
                200: function(data, jqXHR){
                    console.log(data.footer);
                    console.log(data.header);
                    //skriver ut header och footer
                    document.getElementById("gt1").innerHTML = data.header;
                    document.getElementById("gt2").innerHTML = data.footer;
                },
                500:function(){
                    console.log("Server error");

                }
            }
        })
        //kallar api för gif addrassen
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