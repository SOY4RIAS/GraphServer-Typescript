import 'reflect-metadata';

import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { projects, tasks, ITaskData } from '../data';
import Task from '../schemas/Task';

@Resolver(of => Task)
export default class {
    @Query(returns => [Task])
    public fetchTasks(): ITaskData[] {
        return tasks;
    }

    @Query(returns => Task, { nullable: true })
    public getTask(@Arg('id') id: number): ITaskData | undefined {
        return tasks.find(task => task.id === id);
    }

    @Mutation(returns => Task)
    public markAsCompleted(@Arg('taskId') taskId: number): ITaskData {
        const task = tasks.find((_task) => _task.id === taskId);
        if (!task) {
            throw new Error(`Couldn't find the task with id ${taskId}`);
        }
        if (task.completed === true) {
            throw new Error(`Task with id ${taskId} is already completed`);
        }
        task.completed = true;
        return task;
    }

    @FieldResolver()
    public project(@Root() taskData: ITaskData) {
        return projects.find(project => {
            return project.id === taskData.project_id;
        });
    }
}
