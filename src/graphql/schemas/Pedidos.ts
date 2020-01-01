import 'reflect-metadata';

import { Field, ObjectType, Float } from 'type-graphql'


@ObjectType()
export default class Pedidos {
    @Field()
    public producto: string

    @Field(type => Float)
    public precio: number
}
