$(document).ready(() => {
    console.log("start");
    $(".btn").on("click", function(){
        console.log("click start");
        var ser = document.getElementById("input").value;
        //kallar på api för att fp två stringar
        $.ajax({
            method:"GET",
            dataType: "json",
            url: getBackendUrl("memebuilder/text/random", "seek=" + ser),
            crossDomain: true,
            statusCode: {
                200: function(data){
                    console.log(data.footer);
                    console.log(data.header);
                    //skriver ut header och footer
                    document.getElementById("gt1").innerHTML = data.header;
                    document.getElementById("gt2").innerHTML = data.footer;
                },
                500:function(){
                    console.log("Server error");
                    alert("we cant find any text about " + ser);

                }
            }
        })
        //kallar api för gif addrassen
        $.ajax({
            method:"GET",
            dataType: "json",
            url: getBackendUrl("randgif/gif/" + ser),
            crossDomain: true,
            statusCode: {
                200: function(data){
                    console.log(data.url);
                    document.getElementById("gifMeme").src = data.url;
                },
                500:function(){
                    console.log("Server error");
                    alert("we cant find any gif about " + ser);
                }
            }
        })


        
    });

    
})