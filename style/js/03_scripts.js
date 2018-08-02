$(function(){
    // elemek összegyűjtése
    let $progressBar = $('.progress-bar');
    let $input = $('input[type="number"]');

    $input.change(function(){
        //kérjük le a százalékot
        let percent = $input.val();
        //állítsuk be a progressbart
        $progressBar.text(percent+'%');
        $progressBar.css('width', percent+'%');
        $progressBar.attr('aria-valuenow', percent);

    })



})