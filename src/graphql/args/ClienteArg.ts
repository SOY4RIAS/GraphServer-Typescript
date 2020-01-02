import { IPedidos } from './../data';
import { Field, InputType, Int, ID } from 'type-graphql';

import { IEmails } from '../data';

import Cliente from '../schemas/Cliente';
import EmailArg from './EmailArg';
import PedidoArg from './PedidoArg';
import { ClienteTipo } from '../enums/ClienteTipo';


@InputType({ description: 'update Cliente' })
export class UpdateCliente implements Partial<Cliente> {
    @Field(type => ID)
    public id: string

    @Field({ nullable: true })
    public nombre: string

    @Field({ nullable: true })
    public apellido: string

    @Field({ nullable: true })
    public empresa: string

    @Field(type => [EmailArg], { nullable: true })
    public email: IEmails[]

    @Field(type => [PedidoArg], { nullable: true })
    public pedidos: IPedidos[]

    @Field(type => ClienteTipo, { nullable: true })
    public tipo: ClienteTipo

}


@InputType({ description: 'new Cliente' })
export default class ClienteArg implements Partial<Cliente> {
    @Field(type => ID, { nullable: true })
    public id?: string
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
