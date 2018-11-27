$(document).ready(( ) => {
    
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
                },
                500:function(){
                    console.log("Server error");

                }
            }
        })
       


        
    });

    
})