import axios from 'axios';
//axios chamadas assincronas e conexão com o bd
const urlbase = "http://localhost:8080/vacinacao"; //mais simples usar uma url base

class VacinacaoServices{
    getVacinacao(){
        //mostrar todos os registros
        return axios.get(urlbase+"/all");
    }

    createVacinacao(vacinacao){
        //criar objeto
        return axios.post(urlbase+"/add_vacinacao",vacinacao);
    }

    getVacinacaoById(id){
        //encontrar objeto pelo id selecionado
        return axios.get(urlbase+"/locate_vacinacao/"+id);
    }

    editVacinacao(vacinacao){
        //atualizar objeto
        return axios.put(urlbase+"/update_vacinacao/"+vacinacao.id_vacinacao,vacinacao);
    }

    deleteVacinacao(id){
        //excluir objeto
        return axios.delete(urlbase+"/delete_vacinacao/"+id);
    }
}

export default new VacinacaoServices();