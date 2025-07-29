const prompt = require('prompt-sync')();
const Sistema = require('./Sistema.js');
const meuHotel = new Sistema();
const Funcionario = require('./Funcionario.js');
const Quartos = require('./Quartos.js');

meuHotel.funcionarios.push(new Funcionario(meuHotel.proximoIdFuncionario++, 'admin', '000.000.000-00', 'admin@hotel.com', '123'));
meuHotel.quartos.push(new Quartos(2, 150, 5, 'Padrão', 'Quarto com duas camas de solteiro e vista para a cidade.'));
meuHotel.quartos.push(new Quartos(1, 250, 3, 'Luxo', 'Quarto com uma cama de casal, banheira e varanda.'));
meuHotel.quartos.push(new Quartos(4, 350, 2, 'Familia', 'Dois quartos conjugados, ideal para famílias.'));

