let imageIndex = 1;
let play = false;
let interval;
function ShowPicture(){    
    $(".slide").css('display','none');
    $(`.slide:nth-child(${imageIndex})`).css('display','block');
}
function Play(){
    if(!play){
        $("#play").attr('src', 'icon/pause.png');
        play = true;
        $('#control img:not(:nth-child(3))').css('opacity','0.3');
        interval = setInterval(ChangingImage,5000);
    }else{
        $("#play").attr('src', 'icon/play.png');
        play = false;
        clearInterval(interval);
        $('#control img').css('opacity','1');
    }

}
function ChangingImage(n = 1){
    if (n == -2)
        imageIndex = 1;
    else if (n == 2)
        imageIndex = $(".slide").length;
    else {
        imageIndex + n <= 0 ? imageIndex =$(".slide").length : (imageIndex + n >$(".slide").length ? imageIndex = 1 : imageIndex+=n);  
    }
    ShowPicture();
}
function Increase (){ 
    $(".slide img").css('width','100vw');
    $(".slide img").css('height','100vh');
    $("#sizes").css('background-image','url(icon/minimize.png)');

    $("#sizes").css('top','5px');
    $("#sizes").css('left','5px');

    $("#imagewindow").css('margin','0');
    $("#imagewindow").css('padding','0');
    $("#control").css('top','90%');
    $("#control").css('background-color','white');
    $("#window").css('margin','0');
}
function Reduce(){
    $(".slide img").css('width','650px');
    $(".slide img").css('height','450px');
    $("#sizes").css('background-image','url(icon/resize.png)');
    $("#sizes").css('top','3%');
    $("#sizes").css('left','28%');
    $("#window").css('margin','auto');
    $("#imagewindow").css('margin-left','10%');
    $("#imagewindow").css('padding','20px');
    $("#control").css('top','60%');
    $("#control").css('background-color','transparent');
} 
ShowPicture();
$("#rewind").click(function(){
    if(!play)
        ChangingImage(-1);
});
$("#start").click(function(){
    if(!play)
        ChangingImage(-2);
});
$("#fast_forward").click(function(){
    if(!play)
        ChangingImage(1);
});
$("#end").click(function(){
    if(!play)
        ChangingImage(2);
})
$("#sizes").click(function(){
    let temp = $("#sizes").css('background-image').slice(5, -2).split('/');
    if( temp[temp.length - 1] == "resize.png"){
        Increase();
    }else{
        Reduce();
    }
})
