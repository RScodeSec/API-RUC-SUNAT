class Ruc{ 
    async getRUC(numberRUC) {
        /* this data obtain of this website: apisperu.com*/
        const url = 'https://dniruc.apisperu.com/api/v1/ruc/';
        const token = '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InV0ZXN0cm9nZXJAZ21haWwuY29tIn0.aJVxQlEPO_slVythAtXtGTP68QHWYhss8ueeZLaBw8Q';
        let data = {
            ruc : numberRUC,
            token : this.token
        }       
        
        let consultData = url + data.ruc +token;       

        const responseRUC = await fetch(consultData)
        
        const dataRUC = await responseRUC.json();
        return  dataRUC
        
                
    }

    fillFields(data){
        document.getElementById("mioo").value = data.ruc;
        document.getElementById("razon").value = data.razonSocial;
        document.getElementById("direccionn").value = data.direccion;
        document.getElementById("estado").value = data.estado;
    }
    clearFields(){
        document.getElementById("mioo").value ="";
        document.getElementById("razon").value = "";
        document.getElementById("direccionn").value ="";
        document.getElementById("estado").value ="";
    }

    mostrarAlerta(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        div.appendChild(document.createTextNode(mensaje));
        const divRuc = document.getElementById('ingreso-ruc');
        divRuc.after(div);

        setTimeout(() => {
            const alert = document.querySelector('.alert');
            if(alert){
                alert.remove();
            }
        }, 2000);
    }
    
    
}


