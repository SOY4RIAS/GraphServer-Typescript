import 'reflect-metadata';

import { Field, Int, ObjectType } from 'type-graphql'
import Task from './Task';


@ObjectType()
export default class Project {
    @Field((type) => Int)
    public id: number;

    @Field()
    public name: string;

    @Field((type) => [Task])
    public tasks: Task[];
}
