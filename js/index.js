var $bwimg = $('.workigBW');
var $win = $ (window);

$win.on('scroll', function() {
 // console.log($win.scrollTop());
 var top = $win.scrollTop() /7;
 
 $bwimg.css('transform','translate(' + top +   'px )');
    if ($win.scrollTop()>424) {
        console.log('424');
    }


});


