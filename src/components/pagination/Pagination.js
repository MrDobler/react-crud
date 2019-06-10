import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default class Pagination extends React.Component {
    
    constructor(props) {
        super(props);
    }

    
    render() {
        console.log(this.props);
        return (
            <div>
                <nav style={{ display: 'flex', justifyContent: 'center'}} className="" aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <button className="page-link"><FaArrowLeft/></button>
                        </li>
                        <li className="page-item active"><button className="page-link" href="#">1</button></li>
                        <li className="page-item">
                            <button className="page-link">2 <span className="sr-only">(current)</span></button>
                        </li>
                        <li className="page-item"><button className="page-link" href="#">3</button></li>
                        <li className="page-item">
                            <button className="page-link"><FaArrowRight/></button>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}