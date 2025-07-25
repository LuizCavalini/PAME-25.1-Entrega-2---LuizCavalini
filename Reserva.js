class Reserva{
    constructor(id, idCliente, status, dataEntrada, dataSaida){
        this.id = id; 
        this.idCliente = idCliente; 
        this.status = status; 
        this.dataEntrada = dataEntrada; 
        this.dataSaida = dataSaida; 
    }
}
module.exports = Reserva;