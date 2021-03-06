
const ruc = new Ruc();
$("#btnBuscar").on('click', function(){
    const ingresoRUC =  $("#ruc").val();
       
   
        var data = ruc.getRUC(ingresoRUC)       
        
            .then(response => {  
                if(data['success'] ==undefined){
                    swal("Nooo ..!", "RUC incorrecto!", "error");
                    
                }
                else{
                ruc.fillFields(response);                             
                ingresoRUC.value = '';
                }
                    
                           
                                
            })
            .catch(function(error){
                ruc.mostrarAlerta('No se encontró RUC', 'alert alert-danger');
                ingresoRUC.value = '';
                ruc.clearFields();
            })           
    
    
});
