$(document).ready(function(){
    console.log("Hey it loads!");


    $.ajax({
        type: "GET",
        url: "/user",
        success: function(data){
            console.log(data.firstName);
            $("#welcome").text("Welcome, " +  data.username);
            $("#mainText").append("</br>"+data.firstName + "</br>");
            $("#mainText").append(data.lastName + "</br>");
            $("#mainText").append(data.email + "</br>");

        }
    });
});