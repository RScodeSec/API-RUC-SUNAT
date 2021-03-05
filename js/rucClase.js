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

    rellenar(mioo){
        document.getElementById("mioo").value = mioo.ruc;
        document.getElementById("razon").value = mioo.razonSocial;
        document.getElementById("direccionn").value = mioo.direccion;
        document.getElementById("estado").value = mioo.estado;

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


