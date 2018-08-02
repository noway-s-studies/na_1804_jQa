console.log("Elkezdtük");
console.log("Kiolvasott: " + $("body h1").text());
$(document).ready(function(){
    console.log("Betöltődött az oldal");
    let $welcome = $("body h1").text();
    console.log("Változóba kiolvasott: " + $welcome);
    $("body h1").text("Üdv!");
})
jQuery(function(){
    console.log("jQuery, így is lehet");
})

