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
    id: string
    nombre: string
    apellido: string
    empresa: string
    email: IEmails[]
    pedidos: IPedidos[]
    tipo: ClienteTipo
}

