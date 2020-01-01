import 'reflect-metadata';

import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { projects, tasks, IProjectData } from '../data';
import Project from '../schemas/Project';

@Resolver(of => Project)
class ProjectResolver {

    @Query(returns => [Project])
    public fetchProjects(): IProjectData[] {
        return projects
    }

    @Query(returns => Project, { nullable: true })
    public projectByName(@Arg('name') name: string): IProjectData | undefined {
        return projects.find((project) => project.name === name);
    }

    @FieldResolver()
    public tasks(@Root() projectData: IProjectData) {
        return tasks.filter(task => {
            return task.project_id === projectData.id;
        });
    }
}

export default ProjectResolver
