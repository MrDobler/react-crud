import React from 'react';
import UserService from '../form/service/UserService.js';
import { FaSearch } from 'react-icons/fa';
import Loader from '../loader/Loader.js';
import Form from '../../components/form/Form';
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import Pagination from '../pagination/Pagination.js';

export default class List extends React.Component {
    users = [];
    userService = new UserService();

    constructor(props) {
        super(props);
        
        this.state = {
            users: [],
            loading: true,
            getUsers: this.getUsers,
            pagination: [],
            meta: [],
            profileCombo: [],
            editUser: null,
        };

        this.reloadComponent = this.reloadComponent.bind(this);
    }
    
    componentDidMount() {
        this.getUsers();
    }

    handlePageClick = (event, value) => {
        this.setState({
            getUsers: this.getUsers(value)
        });
    }

    reloadComponent() {
        this.setState({
            loading: true,
            update: this.getUsers(),
        });
    }
    
    getUsers() {
        this.userService.all()
            .then(res => {
                this.setState({ 
                    loading: false,
                    users: res.data,
                    pagination: res.links,
                    meta: res.meta 
                });
            })
            .catch(err => console.log(err));
    }

    deleteUser = (event, user_id) => {
        this.userService.delete(user_id)
            .then(() => {
                this.reloadComponent();
            })
            .catch(err => {alert('Erro'); console.log(err)})
    }

    setEditUser = (event, user) => {
        this.setState({ editUser: user });
        
        document.getElementById('user-form').scrollIntoView({ behavior: 'smooth' });
    }

    render() {
    
        return (

            <div className="container">
                <div className="card" style={{ marginTop: 25 }}>
                    <h1>Usuários</h1>
                    
                {this.state.loading ? ( <div className="card-body"> <Loader/> </div> ) : (
                    <div className="card-body">
                        <div className="col-md-6 offset-md-3">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Buscar usuário" aria-label="Buscar usuário" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button"><FaSearch/></button>
                                </div>
                            </div>
                        </div>


                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th scolpe="col">#</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Perfil</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    this.state.users.map((user) => (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.profile.name}</td>
                                            <td>{user.active ? "Ativo" : "Inativo"}</td>
                                            <td>
                                                <button className="btn btn-default" onClick={(evt) => this.setEditUser(evt, user)}><FaRegEdit/></button>
                                                <button className="btn btn-default" onClick={(evt) => this.deleteUser(evt, user.id)}><FaRegTrashAlt/></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        
                    </div>
                )}

                </div>
                <Form  user={this.state.editUser} reloadList={this.reloadComponent} ></Form>
            </div>
        );
    }
}