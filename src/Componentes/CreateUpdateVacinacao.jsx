import React, { Component } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import VacinacaoServices from '../Servicos/VacinacaoServices';

class CreateUpdateVacinacao extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id_vacinacao: this.props.match.params.id,
            nome_animal: "",
            data_nasc_animal: "",
            nome_vacina: "",
            tipo_vacina: "",
            qtd_doses: "",
            data_vacinacao: "",
            // data_proxima_vacinacao: "",
        }

        this.changeNome_animalHandler = this.changeNome_animalHandler.bind(this);
        this.changeData_nasc_animalHandler = this.changeData_nasc_animalHandler.bind(this);
        this.changeNome_vacinaHandler = this.changeNome_vacinaHandler.bind(this);
        this.changeTipo_vacinaHandler = this.changeTipo_vacinaHandler.bind(this);
        this.changeQtd_dosesHandler = this.changeQtd_dosesHandler.bind(this);
        this.changeData_vacinacaoHandler = this.changeData_vacinacaoHandler.bind(this);
        // this.changeData_proxima_vacinacaoHandler = this.changeData_proxima_vacinacaoHandler.bind(this); //não mostra na tabela
        this.salvarVacinacao = this.salvarVacinacao.bind(this);

    }

    componentDidMount() {
        if (this.state.id_vacinacao === "_add") {
            console.log(this.state.id_vacinacao);
            return false
        } else {
            //console.log(this.state.id_vacinacao);
            return VacinacaoServices.getVacinacaoById(this.state.id_vacinacao).then(
                (res) => {
                    let vacinacao = res.data;
                    this.setState(
                        {
                            nome_animal: vacinacao.nome_animal,
                            data_nasc_animal: vacinacao.data_nasc_animal,
                            nome_vacina: vacinacao.nome_vacina,
                            tipo_vacina: vacinacao.tipo_vacina,
                            qtd_doses: vacinacao.qtd_doses,
                            data_vacinacao: vacinacao.data_vacinacao,
                            // data_proxima_vacinacao: vacinacao.data_proxima_vacinacao
                        }
                    )
                }
            )
        }
    }

    changeNome_animalHandler(event) {
        this.setState({ nome_animal: event.target.value })
    }

    changeData_nasc_animalHandler(event) {
        this.setState({ data_nasc_animal: event.target.value })
    }

    changeNome_vacinaHandler(event) {
        this.setState({ nome_vacina: event.target.value })
    }

    changeTipo_vacinaHandler(event){
        this.setState({ tipo_vacina: event.target.value })
    }

    changeQtd_dosesHandler(event){
        this.setState({ qtd_doses: event.target.value })
    }

    changeData_vacinacaoHandler(event){
        this.setState({ data_vacinacao: event.target.value })
    }

    // changeData_proxima_vacinacaoHandler(event){
    //     this.setState({ data_proxima_vacinacao: event.target.value })
    // }

    cancelar() {
        this.props.history.push("/vacinacoes");
    }
        
    salvarVacinacao() {
        let vacinacao = {
            nome_animal: this.state.nome_animal,
            data_nasc_animal: this.state.data_nasc_animal,
            nome_vacina: this.state.nome_vacina,
            tipo_vacina: this.state.tipo_vacina,
            qtd_doses: this.state.qtd_doses,
            data_vacinacao: this.state.data_vacinacao,
            // data_proxima_vacinacao: this.state.data_proxima_vacinacao
        }

        if (this.state.id_vacinacao === "_add") {
            VacinacaoServices.createVacinacao(vacinacao).then(
                (res) => {
                    alert(res.data);
                    //console.log(vacinacao.target.value);
                    //console.log(this.state.id_vacinacao);
                }
            )
        } else {
            vacinacao.id_vacinacao = this.state.id_vacinacao;
            VacinacaoServices.editVacinacao(vacinacao).then(
                (res) => {
                    console.log(res.data);
                    //console.log(this.state.id_vacinacao);
                }
            )
        }

        this.props.history.push("/vacinacoes");

    }

    render() {
        return (
            <Container>
                <Form>
                    <Row className="justify-center-md-center">
                        <h3>Cadastro de usuário</h3>
                    </Row>
                    <Form.Group controlId="formNome_animal">
                        <Form.Text className="text-muted">
                            Nome do pet
                        </Form.Text>
                        <Form.Control type="text" placeholder="Digite o nome do pet" value={this.state.nome_animal} onChange={this.changeNome_animalHandler} />
                    </Form.Group>
                    <Form.Group controlId="formData_nasc_animal">
                        <Form.Text className="text-muted">
                            Data de nascimento do pet
                        </Form.Text>
                        <Form.Control type="text" placeholder="dia/mês/ano" value={this.state.data_nasc_animal} onChange={this.changeData_nasc_animalHandler} />
                    </Form.Group>
                    <Form.Group controlId="formNome_vacina">
                        <Form.Text className="text-muted">
                            Vacina
                        </Form.Text>
                        <Form.Control type="text" placeholder="Nome da vacina" value={this.state.nome_vacina} onChange={this.changeNome_vacinaHandler} />
                    </Form.Group>
                    <Form.Group controlId="formTipo_vacina">
                        <Form.Text className="text-muted">
                            Informações da vacina
                        </Form.Text>
                        <Form.Control type="text" placeholder="Informações da vacina" value={this.state.tipo_vacina} onChange={this.changeTipo_vacinaHandler} />
                    </Form.Group>
                    <Form.Group controlId="formQtd_doses">
                        <Form.Text className="text-muted">
                            Quantidade de doses
                        </Form.Text>
                        <Form.Control type="text" placeholder="Quantidade de doses tomadas" value={this.state.qtd_doses} onChange={this.changeQtd_dosesHandler} />
                    </Form.Group>
                    <Form.Group controlId="formData_vacinacao">
                        <Form.Text className="text-muted">
                            Data vacinação
                        </Form.Text>
                        <Form.Control type="text" placeholder="dia/mês/ano" value={this.state.data_vacinacao} onChange={this.changeData_vacinacaoHandler} />
                    </Form.Group>
                    {/* <Form.Group controlId="formData_proxima_vacinacao">
                        <Form.Text className="text-muted">
                            Data próxima vacinação
                        </Form.Text>
                        <Form.Control type="text" placeholder="dia/mês/ano" value={this.state.data_proxima_vacinacao} onChange={this.changeData_proxima_vacinacaoHandler} />
                    </Form.Group> */}
                    <Row className="float-right">
                        <Button variant="success" className="btnSubmit" onClick={this.salvarVacinacao}>Salvar</Button>
                        <Button variant="warning" onClick={this.cancelar.bind(this)}>Cancelar</Button>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default CreateUpdateVacinacao;