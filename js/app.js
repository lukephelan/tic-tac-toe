// When you click the square, add the text "X".

$('.square').click(function(){
    $(this).append('<h3>X</h3>');
    console.log("CLICKED");
});
