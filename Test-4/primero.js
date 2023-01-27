class Camion {
    conductor = {};
    pasajeros = 0;
    
    constructor(conductor = {}) {
        this.conductor = conductor
    }

    public getDatoConductor() {
        console.log(`Nombre conductor: ${this.conductor?.nombre} - Licencia - ${this.conductor?.licencia}`)
    }
  
  public subir(numPasajeros = 0){
    let tempAumento = parseInt(numPasajeros);
    if ( !isNaN(tempAumento) ) {
      this.pasajeros += tempAumento;
      console.log(`se aumento los pasajeros a ${this.pasajeros}`);
    } else {
      console.log(`no se aumentaron los pasajeros`);
    }
  }
  
  public bajar(numPasajeros = 0) {
    let tempDec = parseInt(numPasajeros);
     if ( !isNaN(tempDec) && tempDec <= this.pasajeros ) {
       this.pasajeros -= tempDec;
        console.log(`se decrementarob los pasajeros a ${this.pasajeros}`);
     } else {
     	 console.log(`no se decrementaron los pasajeros`);
    	}
  }
}

class Conductor {
    nombre = "";
    licencia = "";
    
    constructor(nombre = "", licencia = ""){
        this.nombre = nombre;
        this.licencia = licencia;
    }
}

const conductor1 = new Conductor("Jordy Test", "123213213123123");

const camion1 = new Camion(conductor1);
camion1.getDatoConductor();
camion1.subir(1);
camion1.subir(10);
camion1.bajar(20);
camion1.bajar(5);