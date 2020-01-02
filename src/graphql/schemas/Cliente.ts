
import 'reflect-metadata';

import { Field, Int, ObjectType, registerEnumType, ID } from 'type-graphql'
import Emails from './Emails';
import Pedidos from './Pedidos';
import { IEmails, IPedidos } from '../data';
import { ClienteTipo } from './../enums/ClienteTipo';


registerEnumType(ClienteTipo, {
    name: 'ClienteTipo',
    description: 'Tipo establecido para el cliente',
});



@ObjectType()
export default class Cliente {
    @Field((type) => ID, { nullable: true })
    public id?: string;

    @Field()
    public nombre: string

    @Field()
    public apellido: string

    @Field()
    public empresa: string

    @Field(type => [Emails])
    public email: IEmails[]

    @Field(type => [Pedidos])
    public pedidos: IPedidos[]

    @Field(type => ClienteTipo)
    public tipo: ClienteTipo

}
