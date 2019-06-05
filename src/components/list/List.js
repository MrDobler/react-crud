import React from 'react';
import FormService from '../form/service/FormService.js';
import { FaSearch } from 'react-icons/fa';
import { IoIosMale, IoIosFemale } from 'react-icons/io';
import Loader from '../loader/Loader.js';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default class List extends React.Component {
    users = [];
    formService = new FormService();
    state = {
        users: [],
        loading: true
    }


    
    upperFirstLetter(name) {
        return name.split(' ').map((slice) =>  slice.charAt(0).toUpperCase() + slice.slice(1) + " " );
    }
    
    componentDidMount() {
        this.getUsers();
    }

    handlePageClick = (event, value, callback) => {
        callback(value);
    }
    
    getUsers(page) {
         this.formService.all(page)
                    .then(res => {
                       this.setState({ loading: false, users: res });
                       console.log(this.state.users);
                    })
                   .catch(err => console.log(err));
    }

    getSymbolByGender(gender) {
        return (gender === 'male') ? <IoIosMale/> : <IoIosFemale/>
    }

    render() {
        

        return (
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
                                <th scope="col">Sobrenome</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Telefone</th>                            
                                <th scope="col">Cidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                this.state.users.map((user) => (
                                    <tr key={user.id}>
                                        <td><img style={{ borderRadius: 50, width: 30}} src={user.picture} /></td>
                                        <td>{user.name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>                                    
                                        <td>{user.city}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div>
                        <nav style={{ display: 'flex', justifyContent: 'center'}} className="" aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <button className="page-link" ><FaArrowLeft/></button>
                                </li>
                                <li className="page-item active"><button className="page-link"  onClick={(evt) => this.handlePageClick(evt, 1, this.getUsers)}>1</button></li>
                                <li className="page-item">
                                    <button className="page-link" onClick={(evt) => this.handlePageClick(evt, 2, this.getUsers)}>2 <span className="sr-only">(current)</span></button>
                                </li>
                                <li className="page-item"><button className="page-link" onClick={(evt) => this.handlePageClick(evt, 3, this.getUsers)}>3</button></li>
                                <li className="page-item">
                                    <button className="page-link"><FaArrowRight/></button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
             )}
            </div>
        );
    }
}