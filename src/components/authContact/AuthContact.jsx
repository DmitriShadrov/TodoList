import React from "react";
import Api from "../../api";
import withContext from "../../context/withContext";

class AuthContact extends React.Component{

    state = {
        email:'',
        password:'',
        loading: false,
        error:null
    }

    login = () => {
        this.setState({loading: true});
         Api.login(this.state.email, this.state.password)
         .then(({token}) => {
             this.props.context.updateToken(token);
             this.props.history.push('/contactsView');
         }).catch(({message}) => {
             this.setState({...this.state,error:message, loading:false});
         });
        
    }
    registartion = () => {
        this.setState({loading: true});
        Api.registaration(this.state.email, this.state.password)
        .then(({token}) => {
            this.props.context.updateToken(token);
            this.props.history.push('/contactsView');
        }).catch(({message}) => {
            this.setState({...this.state,error:message, loading:false});
        });
    }


    render(){
        return (<div className='auth'>
                <h2>Authentication</h2>
                {this.state.error ? <div className="alert alert-danger">Login or registration failure</div> : null} 
                

                {!this.state.loading && <form>

                    <input type="email" className="form-control" placeholder="Type email" value={this.state.email}
                        onChange={e => this.setState({...this.state, email: e.target.value})}
                    />
                    <input type="password" className="form-control" placeholder="Type password" value={this.state.password}
                        onChange={e => this.setState({...this.state, password: e.target.value})}
                    />

                    <div className="auth-controls"/>
                    <button className="btn btn-success" onClick={ e => {
                        e.preventDefault();
                        this.login();
                    }}>login</button>

                    <button className="btn btn-primary" onClick={e => {
                        e.preventDefault();
                        this.registartion();
                    }}>registration</button>

                </form>}
                {this.state.loading && <div className="progress"><div className="loader"></div>
            </div>}
        </div>
        )
    }
}

export default withContext(AuthContact);