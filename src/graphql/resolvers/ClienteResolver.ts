import { Logger } from '@overnightjs/logger';


import 'reflect-metadata';

import { Arg, Query, Resolver, Mutation, Float } from 'type-graphql';



import Cliente from '../schemas/Cliente';

import ClienteArg, { UpdateCliente } from '../args/ClienteArg';
import ClienteModel, { IClienteModel } from './../../models/Cliente'

@Resolver(of => Cliente)
class ClienteResolver {

    @Query(returns => [Cliente])
    public fetchClientes(@Arg('limit', { nullable: true }) limit: number) {
        return ClienteModel.find().limit(limit)
    }

    @Query(returns => Cliente, { nullable: true })
    public async getClienteById(@Arg('id') id: string) {
        return await ClienteModel.findById(id)
    }

    @Mutation(of => Cliente)
    public async clienteInput(@Arg('cliente') cliente: ClienteArg) {
        const newCliente = new ClienteModel({ ...cliente })
        await newCliente.save()
        return newCliente
    }

    @Mutation(of => Cliente)
    public async updateCliente(@Arg('cliente') cliente: UpdateCliente) {
        const _id = cliente.id

        if (!_id) { throw Error('id is mandatory'); }

        delete cliente.id

        return await ClienteModel.findOneAndUpdate(
            { _id }, { ...cliente }, { new: true },
        )
    }

    @Mutation(returns => Float, { nullable: true })
    public async deleteCliente(@Arg('id') _id: string) {
        const result = await ClienteModel.deleteOne({ _id })

        return result.ok
    }
}

export default ClienteResolver
