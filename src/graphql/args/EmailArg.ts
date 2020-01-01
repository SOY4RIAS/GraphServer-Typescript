import 'reflect-metadata';

import { InputType, Field } from 'type-graphql';


@InputType()
export default class EmailArg {
    @Field()
    public mail: string
}