import 'reflect-metadata';

import { Arg, FieldResolver, Query, Resolver, Root, Mutation, Args } from 'type-graphql';
import assert from 'assert'
import { projects, clientes, IClienteData } from '../data';
import Cliente from '../schemas/Cliente';
import { Logger } from '@overnightjs/logger';
import ClienteArg from '../args/ClienteArg';

@Resolver(of => Cliente)
class ClienteResolver {

    @Query(returns => [Cliente])
    public fetchClientes(): IClienteData[] {
        return clientes
    }

    @Query(returns => Cliente)
    public getClienteById(@Arg('id') id: number): IClienteData | undefined {
        return clientes.find(cliente => cliente.id === id)
    }

    @Mutation(of => Cliente)
    public clienteInput(@Arg('cliente') cliente: ClienteArg) {
        const ids = clientes.map(c => c.id)
        const maxId = Math.max(...ids)
        Logger.Info({ maxId, msg: 'max id' })
        const newCliente: IClienteData = { id: maxId + 1, ...cliente }
        clientes.push(newCliente)
        return newCliente
    }
}

export default ClienteResolver
