$("img").hide();
$("h4").hide();


var pers = null;
var met = null;

$(".shyBut").click(function(){
    pers = "shy";
});

$(".funBut").click(function(){
    pers = "fun";
});

$(".metBut").click(function(){
    met = 1;
});

$(".noBut").click(function(){
    met = 0;
});


$("button").click(function(){
    // $(document).scrollTop($(document).height());
if(pers === "shy" && met === 1){
    $(".answers").hide();
    $(".wall").show();
} else if(pers === "shy" && met === 0){
    $(".answers").hide();
    $(".boo").show();
} else if(pers === "fun" && met === 1){
    $(".answers").hide();
    $(".bend").show();
} else if(pers === "fun" && met === 0){
    $(".answers").hide();
    $(".chow").show();
}
});