$(function(){
    
    $("#solda,#profilResmi").hover(function(){
        $("#linkler").css({
            "box-shadow":"30px 0px 100px black",
            "transition":".5s"
        });
    },function(){
        $("#linkler").css({
            "box-shadow":"0px 0px 50px #fff",
            "transition":".5s"
        });
    });
    
    
});