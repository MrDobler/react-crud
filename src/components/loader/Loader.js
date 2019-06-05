import React from 'react';
import loader from "./loader.gif";

export default class Loader extends React.Component {
    render() {
        return (
            <div>
                <img src={loader} alt={"Loader"}/>
            </div>
        );
    }
}