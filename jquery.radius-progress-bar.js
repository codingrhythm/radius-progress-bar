function format_label(value, unit){
    value = value.toFixed(1);
    value = value.replace('.0','');

    return value + ' ' + unit;
}

$.fn.renderProgress = function(progress)
{
    progress ++;
    progress = Math.floor(progress);
    
    if(progress<25){
        var angle = -90 + (progress/100)*360;
        $(this).find(".animate-0-25-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=25 && progress<50){
        var angle = -90 + ((progress-25)/100)*360;
        $(this).find(".animate-0-25-b").css("transform","rotate(0deg)");
        $(this).find(".animate-25-50-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=50 && progress<75){
        var angle = -90 + ((progress-50)/100)*360;
        $(this).find(".animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
        $(this).find(".animate-50-75-b").css("transform","rotate("+angle+"deg)");
    }
    else if(progress>=75 && progress<=100){
        var angle = -90 + ((progress-75)/100)*360;
        $(this).find(".animate-50-75-b, .animate-25-50-b, .animate-0-25-b").css("transform","rotate(0deg)");
        $(this).find(".animate-75-100-b").css("transform","rotate("+angle+"deg)");
    }
    if(progress==100){

    }

    $(this).attr('data-current-progress', progress);
    if ($(this).attr('data-value')){
        var value = parseFloat($(this).attr('data-value'));
        var current_value = value * (progress/100);
        $(this).find('small').html(format_label(current_value, $(this).attr('data-unit')));
    }
    
    $(this).raduisProgressBar();
}

$.fn.raduisProgressBar = function(){

    $(this).attr('working','yes');
    if ($(this).attr('initiliazed') != 'yes'){
        var bg = $('<div class="loader-bg"></div>');
        $(this).append(bg);

        for (var i=0; i<100; i+=25){
            bg.append('<div class="spiner-holder-1 animate-'+i+'-'+(i+25)+'-a"><div class="spiner-holder-2 animate-'+i+'-'+(i+25)+'-b"><div class="loader-spiner"></div></div></div>')
        }

        $(this).attr('initiliazed', 'yes');
    }

    var progress = parseInt($(this).attr('data-progress'));
    var current_progress = parseInt($(this).attr('data-current-progress'));
    var duration = 10;

    if (current_progress >= progress){
        $(this).attr('completed','yes');
        $(this).attr('working','no');
        return;
    }

    
    $(this).attr('data-current-progress', current_progress);

    var self = $(this);

    setTimeout(function(){self.renderProgress(current_progress)}, duration);

}


$(function(){
    $('.radius-progress[data-auto-play=yes]').each(function(){
        $(this).raduisProgressBar();
    });
})