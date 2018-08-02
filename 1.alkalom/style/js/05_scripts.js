$(function(){
    // elemek összegyűjtése
    let $button = $('button.btn-primary');
    let $email = $('input[type="email"]');
    let $password = $('input[type="password"]');
    let $allertSucces = $('div.alert-success');
    let $allertDanger = $('div.alert-danger');
    
    // email és jelszó megadása
    const email = 'user@domain.hu';
    const password = '123456';

    // click esemény reagálás
    $button.click(function(event){
        // alapértelmezett esemény reagálás megakasztása
        event.preventDefault();
        console.log('kattintás');

        // eldönteni, hogy bejelentkezett-e
        if($email.val()===email && $password.val()===password){
            $allertDanger.hide();
            $allertSucces.show();
        }else{
            $allertSucces.hide();
            $allertDanger.show();
        }
    });

});