import React, { Component } from 'react';
import './styles.less';

const TableTr = (props)=> {
    return (
    
        <tr>
            <td>{props.Id}</td>
            <td>{props.user}</td>
            <td>{props.pass}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.name}</td>
            <td>{props.sur}</td>
            <td>{props.gender}</td>
            <td>{props.rel}</td>
            <td>{props.prog}</td>
            <td>{props.work}</td>
        </tr>
        
    )
}

export default TableTr;