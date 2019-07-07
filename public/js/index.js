
/* Add event listener to the button of the hamburger menu, also it changes the hamburger lines for 
an x when it is open*/
document.querySelector("#hamburger-icon").addEventListener("click", function(){
    document.querySelector(".menu").classList.toggle("mobile-menu");
    let iconMenu = document.querySelector("#hamburger-icon i").innerText;
    
    if (iconMenu == 'menu'){
        
        document.querySelector("#hamburger-icon i").innerText = 'close';

    } else if (iconMenu == 'close'){
        document.querySelector("#hamburger-icon i").innerText = 'menu';
    }
});

$(".contact-form").submit(function(e){
    var form = $(this);
    e.preventDefault();
    $.ajax({
        data: form.serialize(),
        method: "POST",
        url: "/form"
    }).then(()=>{
        alert("Mensaje enviado con exito");
        form[0].reset();
    }).catch(() => {
        alert("No se pudo enviar el mensaje. Vuelva a intentarlo.");
    });


});

