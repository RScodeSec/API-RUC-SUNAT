
const ruc = new Ruc();

const btnBuscar = document.getElementById('btnBuscar')


btnBuscar.addEventListener('click', function(){
    const ingresoRUC =  document.getElementById('ruc');
    expresion = /\d\d\d\d\d\d\d\d\d\d\d/;
    
    if(expresion.test(ingresoRUC.value)){

        ruc.getRUC(ingresoRUC.value)
            .then(response => {
                //ruc.mostrarRUC(response.listaRUC);
                ruc.rellenar(response);
                                
                ingresoRUC.value = '';
            })
                       
            .catch(function(error){
                ruc.mostrarAlerta('No se encontró RUC', 'alert alert-danger');
                ingresoRUC.value = '';
            })
    }
    else {
        ruc.mostrarAlerta('Ingrese correctamente los 11 dígitos del RUC', 'alert alert-danger');
        ingresoRUC.value = '';
    }
    
});
