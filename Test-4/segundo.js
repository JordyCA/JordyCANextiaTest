const clientList = [
    {
        idCliente: 1,
        nombre: "cliente 1",
        email: "andor@gmail.com",
        telefono: "12312312312",
        total: 10,
        estado: 0// 1 pagado, 0 pendiente  
    },
    {
        idCliente: 2,
        nombre: "cliente 2",
        email: "temp@some.com",
        telefono: "9812301283123",
        total: 40.40,
        estado: 0// 1 pagado, 0 pendiente  
    }
    , {
        idCliente: 3,
        nombre: "cliente 3",
        email: "some@gmail.com",
        telefono: 1,
        total: 50.40,
        estado: 0// 1 pagado, 0 pendiente  
    }
];

class Factura {
    idCliente = 0;
    total = 0;
    estado = 0;

    constructor({ idCliente = 0, total = 0, estado = 0 }) {
        this.idCliente = idCliente;
        this.total = total;
        this.estado = estado;
    }

    public cobrar() {
        let data = {
            estado: 0,
            isPagado: 0,
        }

        if (!this.estado) {
            this.estado = 1;
            data.estado = 1;
            data.isPagado = 1;
            console.log('Se pago la factura');
        } else {
            console.log('Ya esta pagado esta factura');
        }

        return data;
    }

    public imprimir() {
        let pago = this.estado ? 'pago' : ' no pago';
        console.log(`El cliente ${this.idCliente} ${pago} su factura con un total de ${this.total} `);
    }
}

for (let index = 0; index < clientList.length; index++) {
    const { idCliente, nombre, email, telefono, total, estado } = clientList[index];
    let factura = new Factura({ idCliente, total, estado });
    factura.imprimir();
    let pago = factura.cobrar();
    if (pago?.isPagado) {
        clientList[index].estado = 1;
    }
    factura.imprimir();
}

console.log(clientList);