import { IPedidos } from './../data';
import { Field, InputType, Int } from 'type-graphql';

import { IEmails } from '../data';

import Cliente from '../schemas/Cliente';
import EmailArg from './EmailArg';
import PedidoArg from './PedidoArg';
import { ClienteTipo } from '../enums/ClienteTipo';


@InputType({ description: 'new Cliente' })
export default class ClienteArg implements Partial<Cliente> {
    @Field({ nullable: true })
    public id?: number
    @Field()
    public nombre: string

    @Field()
    public apellido: string

    @Field()
    public empresa: string

    @Field(type => [EmailArg])
    public email: IEmails[]

    @Field(type => [PedidoArg])
    public pedidos: IPedidos[]

    @Field(type => ClienteTipo)
    public tipo: ClienteTipo

}
