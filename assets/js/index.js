$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
});
function validar() {
    console.log('Se envio el formulario');
    miformulario.reset();
    return false
}