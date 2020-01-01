import 'reflect-metadata';


import { Field, Int, ObjectType } from 'type-graphql';
import Project from './Project';

@ObjectType()
export default class Task {
    @Field((type) => Int)
    public id: number;

    @Field()
    public title: string;

    @Field((type) => Project)
    public project: Project;

    @Field()
    public completed: boolean;
}