import React from "react";

export default class Form extends React.Component {
    state = {
        name: "",
        email: "",
        profile: "",
        password: "",
        c_parssword: "",
        status: false,
    };


    handleChange = (evt, fieldName) => {
        this.setState({
            [fieldName]: evt.target.value
        });
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
           
                <div className="row" style={{ padding: 15 }}>
                    <div className="col">
                        <h3 style={{textAlign: "left"}}>Cadastro</h3>

                        <form>

                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">Nome</span>
                                        </div>
                                        <input className="form-control" id="name" value={this.state.name} onChange={(event) => this.handleChange(event, "name")} />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">E-mail</span>
                                        </div>
                                        <input className="form-control" id="email" itemType="email" value={this.state.email} onChange={(event) => this.handleChange(event, "email")} />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">Senha</span>
                                        </div>
                                        <input className="form-control" id="passsword" value={this.state.password} onChange={(event) => this.handleChange(event, "password")} />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">Confirmar Senha</span>
                                        </div>
                                        <input className="form-control" id="c_passsword" value={this.state.c_parssword} onChange={(event) => this.handleChange(event, "c_password")} />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                        <select className="form-control" value={this.state.profile} id="profile" onChange={(event) => this.handleChange(event, "profile")}>
                                            <option hidden>Perfil</option>
                                            <option value="USER">Usuário</option>
                                            <option value="MANAGER">Gestor</option>
                                            <option value="TIM">TIM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-md-1">
                                    <label>Status:</label>
                                </div>
                                <div className="col-md-2 mb-3">
                                    <div className="form-group">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="status" id="status_active" value="1" onChange={(event) => this.handleChange(event, "status")} />
                                            <label className="form-check-label" htmlFor="status_active">Ativo</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="status" id="status_inactive" value="0" onChange={(event) => this.handleChange(event, "status")} />
                                            <label className="form-check-label" htmlFor="status_false">Inativo</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                            <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>Enviar</button>
                    </div>
                </div>
        );
    }
}