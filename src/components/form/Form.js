import React, { Component } from "react";
import UserService from "./service/UserService.js";
import ProfileService from '../form/service/ProfileService.js';

export default class Form extends Component {
    profileService = new ProfileService();
    userService = new UserService();

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            profile: "",
            password: "",
            c_password: "",
            active: false,
            profileCombo: [],
        };

    }
    
    componentDidMount() {
        this.getProfiles();
    }
    
    getProfiles() {
        this.profileService.get()
            .then(response => {
                this.setState({
                    profileCombo: response.data
                });
            })
            .catch(err => console.log(err));
    }

    handleChange = (evt, fieldName) => {
        this.setState({
            [fieldName]: evt.target.value
        });
    };

    handleSubmit = () => {
        this.props.user ? alert('edit'): alert('create');
        // this.props.user ? this.editUser(): this.saveUser();
    };

    saveUser() {

        let user = {
            name: this.state.name,
            email: this.state.email,
            profile: this.state.profile,
            password: this.state.password,
            c_password: this.state.c_password,
            active: this.state.active
        };

        this.userService.save(user)
            .then(() => {
                this.props.reloadList();
            })
            .catch(err => alert("Error"));
       
    }

    editUser() {
        this.userService.update(this.props.user.id);
    }


    render() {
        
        return (
            <div className="container">
                <div id="user-form" className="row" style={{ padding: 15 }}>
                    <div className="col">
                        <h3 style={{textAlign: "left"}}>Cadastro</h3>

                        <form>

                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupPrepend">Nome</span>
                                        </div>
                                        <input className="form-control" id="name" value={this.props.user ? this.props.user.name : this.state.name} onChange={(event) => this.handleChange(event, "name")} required />
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
                                        <input className="form-control" id="email" itemType="email" value={this.props.user ? this.props.user.email : this.state.email} onChange={(event) => this.handleChange(event, "email")} required />
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
                                        <input className="form-control" id="passsword" value={this.state.password} onChange={(event) => this.handleChange(event, "password")} required />
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
                                        <input className="form-control" id="c_passsword" value={this.state.c_password} onChange={(event) => this.handleChange(event, "c_password")} required />
                                        <div className="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <div className="form-group">
                                            <select className="form-control" value={this.props.user ? this.props.user.profile.id : this.state.profile} id="profile" onChange={(event) => this.handleChange(event, "profile")} required>
                                                <option hidden>Perfil</option>
                                                {
                                                    this.state.profileCombo.map(({id, name}) => <option key={id} value={id}>{name}</option>)
                                                }
                                            </select>
                                    </div>
                                </div>

                                <div className="col-md-1">
                                    <label>Status:</label>
                                </div>
                                <div className="col-md-2 mb-3">
                                    <div className="form-group">
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="active" id="active" value="1" onChange={(event) => this.handleChange(event, "active")} required checked={(this.props.user && this.props.user.active) ? true : false} />
                                            <label className="form-check-label" htmlFor="active">Ativo</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="active" id="inactive" value="0" onChange={(event) => this.handleChange(event, "active")} required checked={(this.props.user && !this.props.user.active) ? true : false} />
                                            <label className="form-check-label" htmlFor="inactive">Inativo</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>                    
                        {/* <button className="btn btn-danger" onClick={this.editUser.bind(this)} >Carregar Usuário</button><br/><br/> */}
                        <button className="btn btn-primary btn-block" onClick={() => this.handleSubmit(this.props.reloadList)}>Enviar</button>
                    </div>
                </div>
            </div>
        );
    }
}
