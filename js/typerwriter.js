let content = "Bin there dump that";
var ele = '<span>' + content.split(' ').join('</span><br><span>') + '</span>';


$(ele).hide().appendTo('.tagline').each(function (i) {
    
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});
/*$(ele).hide().appendTo(".tagline").each(function(i){
    $(this).delay(100 * i).css({

    }).animate({

    }, 100);
});*/