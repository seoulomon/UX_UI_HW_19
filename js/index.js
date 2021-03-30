var $bwimg = $('.workigBW');
var $win = $ (window);
var $colorimg = $('.workImgCOLOR');

$win.on('scroll', function() {
//  console.log($win.scrollTop());
 var top = $win.scrollTop() /7;
 
//  $bwimg.css({'transform':'translateY(' + top + 'px)'});
 
 $bwimg.css('transform','translate(' + top +   'px )');
    if ($win.scrollTop() >= 954) {
        // console.log('954');
        $('.workigBW').css('display', 'none');
        
    }
$colorimg.css('display','absolute');
    if ($win.scrollTop() < 954) {
        // console.log('954');
        $('.workImgCOLOR').hide();}
        
    else {($win.scrollTop() >= 954) 
        // console.log('954');
        $('.workImgCOLOR').show();
        $('#work1').css('background-image','none');
        $('#work1').css('background-color','turquoise','padding-top','10px');
        
        
    }    


});


