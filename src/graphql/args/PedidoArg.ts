import 'reflect-metadata';

import { InputType, Field, Float } from 'type-graphql';


@InputType()
export default class PedidoArg {
    @Field()
    public producto: string

    @Field(type => Float)
    public precio: number
}
