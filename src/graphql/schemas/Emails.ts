
import 'reflect-metadata';

import { Field, Int, ObjectType } from 'type-graphql'


@ObjectType()
export default class Emails {
    @Field()
    public mail: string
}
