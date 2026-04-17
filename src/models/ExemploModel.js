import prisma from '../lib/services/prismaClient.js';

export default class ExemploModel {
    constructor({ id = null, nome} = {}) {
    constructor({ id = null, nome, foto = null, documento = null } = {}) {
        this.id = id;
        this.nome = nome;
        this.foto = foto;           
        this.documento = documento;
    }

    async criar() {
        return prisma.exemplo.create({
            data: {
                nome: this.nome,
                foto: this.foto,
                documento: this.documento
            },
        });
    }

    async atualizar() {
        return prisma.exemplo.update({
            where: { id: this.id },
            data: { nome: this.nome },
            data: { nome: this.nome, foto: this.foto, documento: this.documento },
        });
    }
