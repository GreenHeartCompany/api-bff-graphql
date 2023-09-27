import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { AutenticacaoInput } from "../dtos/inputs/Usuario/autenticacao-input";
import { AutenticacaoResponse } from "../dtos/models/Usuario/autenticacao-response-model";
import { autenticarUsuario } from "../services/usuario-service";

@Resolver()
export class UsuarioResolver {
    @Mutation(() => AutenticacaoResponse)
    async Autenticar(@Arg("data", { validate: false }) data: AutenticacaoInput) {
        const result = await autenticarUsuario(data)
        return result;
    }
}