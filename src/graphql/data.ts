import { ClienteTipo } from './enums/ClienteTipo';

// src/data.ts

export interface IProjectData {
    id: number;
    name: string;
}

export interface ITaskData {
    id: number;
    title: string;
    completed: boolean;
    project_id: number;
}

export interface IEmails {
    mail: string
}

export interface IPedidos {
    producto: string
    precio: number
}

export interface IClienteData {
    id: number
    nombre: string
    apellido: string
    empresa: string
    email: IEmails[]
    pedidos: IPedidos[]
    tipo: ClienteTipo
}

export const projects: IProjectData[] = [
    { id: 1, name: 'Learn React Native' },
    { id: 2, name: 'Workout' },
];

export const tasks: ITaskData[] = [
    { id: 1, title: 'Install Node', completed: true, project_id: 1 },
    {
        id: 2,
        title: 'Install React Native CLI:', completed: false, project_id: 1,
    },
    { id: 3, title: 'Install Xcode', completed: false, project_id: 1 },
    { id: 4, title: 'Morning Jog', completed: true, project_id: 2 },
    { id: 5, title: 'Visit the gym', completed: false, project_id: 2 },
]

export const clientes: IClienteData[] = [
    {
        id: 1,
        nombre: 'santiago',
        apellido: 'arias',
        email: [{ mail: 'sanx349@gmail.com' }, { mail: 'santi9@gmail.com' }],
        empresa: 'solrac_DEv',
        pedidos: [
            {
                producto: 'toast',
                precio: 1220,
            },
        ],
        tipo: ClienteTipo.NORMAL,
    },
    {
        id: 2,
        nombre: 'Carlos',
        apellido: 'Pineda',
        email: [{ mail: 'ariasdevweb@gmail.com' }],
        empresa: 'wildLion',
        pedidos: [
            {
                producto: 'tik',
                precio: 10000,
            },
        ],
        tipo: ClienteTipo.PREMIUM,
    },
]
