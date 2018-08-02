$(function(){
    // html elemek összegyűjtése
    let $button = $("a#random-color");
    console.log($button);

    $button.click(
        function(){
            // szín kikeverése
            const max = 255;
            let red = Math.round(Math.random()*max);
            let green = Math.round(Math.random()*max);
            let blue = Math.round(Math.random()*max);
            console.log('red: '+red+' green: '+green+' blue: '+blue)
            $button.css('background-color','rgb('+red+','+green+','+blue+')');

            // font szín beállítása
            let avg = (red + green + blue)/3;
            if(avg/255<0.5){
                $button.css('color','white');
            } else {
                $button.css('color','black');
            }

        }
    )


    // background-color: rgb(255,0,0);
})