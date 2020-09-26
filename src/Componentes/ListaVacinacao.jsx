import React, { Component } from 'react';
import { Container, Row, Button, Table } from 'react-bootstrap';
import VacinacaoServices from '../Servicos/VacinacaoServices';

class ListaVacinacao extends Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = {
            vacinacao: []
        }

        this.voltar = this.voltar.bind(this);
        this.novaVacinacao = this.novaVacinacao.bind(this);
        this.editar = this.editar.bind(this);
        this.excluir = this.excluir.bind(this);
    }

    //methods

    componentDidMount(){
        this.getVacinacao();
    }

    getVacinacao(){
        VacinacaoServices.getVacinacao().then(
            (res) => this.setState(
                {vacinacao:res.data}
            )
        )
    }

    voltar(){
        this.props.history.push("/");
    }

    novaVacinacao(){
        this.props.history.push("/vacinacao/_add");
    }

    editar(id){
        this.props.history.push("/vacinacao/"+id);
    }

    excluir(id){
        VacinacaoServices.deleteVacinacao(id).then(
            res => {
                alert(res.data);
                this.getVacinacao();
            }
        )
    }

    render() {
        return (
            <Container>
                <Row>
                    <h2>Carteira de Vacinação</h2>
                </Row>
                <Row>
                    <Button variant="link" onClick={this.voltar} >voltar</Button>
                </Row>
                <Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    Nome animal
                                </th>
                                <th>
                                    Data nascimento animal
                                </th>
                                <th>
                                    Nome vacina
                                </th>
                                <th>
                                    Tipo vacina
                                </th>
                                <th>
                                    Quantidade de doses
                                </th>
                                <th>
                                    Data vacinação
                                </th>
                                {/* <th>
                                    Data próxima vacinação
                                </th> */}
                                <th>
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.vacinacao.map(
                                    vacinacao => (
                                        <tr key={vacinacao.id_vacinacao}>
                                            <td>
                                                {vacinacao.nome_animal}
                                            </td>
                                            <td>
                                                {vacinacao.data_nasc_animal}
                                            </td>
                                            <td>
                                                {vacinacao.nome_vacina}
                                            </td>
                                            <td>
                                                {vacinacao.tipo_vacina}
                                            </td>
                                            <td>
                                                {vacinacao.qtd_doses}
                                            </td>
                                            <td>
                                                {vacinacao.data_vacinacao}
                                            </td>
                                            {/* <td>
                                                {vacinacao.data_proxima_vacinacao}
                                            </td> */}
                                            <td>
                                                <Button variant="primary" onClick={() => this.editar(vacinacao.id_vacinacao)} >Editar</Button>
                                                <Button variant="danger" onClick={() => this.excluir(vacinacao.id_vacinacao)} >Excluir</Button>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row className="float-right">                    
                    <Button variant="success" onClick={this.novaVacinacao} >Adicionar vacinação</Button>                    
                </Row>
                <Row className="float-left">
                    <Button variant="link" onClick={this.voltar} >voltar</Button>
                </Row>
            </Container>
        );
    }
}

export default ListaVacinacao;