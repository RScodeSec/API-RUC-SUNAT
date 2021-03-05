
const ruc = new Ruc();

const btnBuscar = document.getElementById('btnBuscar')


btnBuscar.addEventListener('click', function(){
    const ingresoRUC =  document.getElementById('ruc');
        ruc.getRUC(ingresoRUC.value)
            .then(response => {
                //ruc.mostrarRUC(response.listaRUC);
                ruc.fillFields(response);
                                
                ingresoRUC.value = '';
            })
            .catch(function(error){
                ruc.mostrarAlerta('No se encontró RUC', 'alert alert-danger');
                ingresoRUC.value = '';
            })        
    
});
