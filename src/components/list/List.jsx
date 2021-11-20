import React from "react";
import {withRouter } from "react-router";
import Api from "../../api";
import withContext from "../../context/withContext";



class List extends React.Component{
    state={
        loading:true
    }

    componentDidMount(){
        Api.getAllContacts(this.props.context.token)
        .then(({ contacts }) => {
            this.props.context.updateContacts(contacts);
            this.setState({...this.state, loading:false});
        })
        .catch((error) => {
            console.log(error);
            this.setState({...this.state, loading:false});
        });
    }

    render(){
        return (
            <>
                <ul class="list">
                    {this.props.context.contacts.map((v,i) => {
                        return (
                            <li key={i} 
                                className={v.id === parseInt(this.props.match.params.id) ? "list-item item-active" : 'list-item'}
                                onClick={() => this.props.history.push(`/contacts/${v.id}`)}
                            >
                                <h2 className="title">{`${v.name} ${v.lastName}`}</h2>
                                <h3 className="sub-title">{v.phone}</h3>
                            </li>
                        );
                    })}
                </ul>
                
            </>
        )
    }
}

export default withContext(withRouter(List));

