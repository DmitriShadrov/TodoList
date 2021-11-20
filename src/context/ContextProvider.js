import React from "react";
import { AppContext } from "./context";


export default class extends React.Component{
    state ={
        token:null,
        contacts: []
    }

    componentDidMount(){
        const token = localStorage.getItem('TOKEN');
        if(token){
            this.setState({token:token, contacts:[]});
        }
    }

    findByIdContacts = (id) => this.state.contacts.find(c => c.id === id);

    updateContacts = (contacts) => this.setState({...this.state,contacts});

    updateToken = (token) => {
        localStorage.setItem('TOKEN',token);
        this.setState({token,contacts:[]});
    }

    logout = () => {
        localStorage.removeItem('TOKEN');
        this.setState({token:null,contacts:[]});
    }
    
    render(){
        return (
            <AppContext.Provider value={{
                contacts: this.state.contacts,
                token: this.state.token,
                findByIdContacts: this.findByIdContacts,
                updateContacts: this.updateContacts,
                updateToken: this.updateToken,
                logout: this.logout
            }}>
                {this.props.children}
            </AppContext.Provider>
            );        
        }
}
