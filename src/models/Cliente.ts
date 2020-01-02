import mongoose, { Document, Schema } from 'mongoose';
import { IEmails, IPedidos } from './../graphql/data';
import { ClienteTipo } from './../graphql/enums/ClienteTipo';

export interface IClienteModel extends Document {
    nombre: string
    apellido: string
    empresa: string
    email: IEmails[]
    pedidos: IPedidos[]
    tipo: ClienteTipo
}

// tslint:disable-next-line: variable-name
const ClienteSchema = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    empresa: { type: String, required: true },
    email: [{
        mail: { type: String, required: true },
    }],
    pedidos: [{
        producto: { type: String, required: true },
        precio: { type: Number, required: true },
    }],
    tipo: {
        type: String,
        enum: [ClienteTipo.NORMAL, ClienteTipo.PREMIUM],
        required: true,
    },
})

// tslint:disable-next-line: variable-name
const ClienteModel = mongoose.model<IClienteModel>('Cliente', ClienteSchema)

export default ClienteModel
