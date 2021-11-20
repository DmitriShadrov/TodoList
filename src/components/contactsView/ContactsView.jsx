import React from "react";
import { Route, withRouter } from "react-router";
import List from "../list/List";
import withContext from "../../context/withContext";
import Contact from "../contact/Contact";

class ContactsView extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.context);
        return <div className='contacts'>
                    <div className='list'>
                        <List/>
                    </div>
                    <div className='list'>
                    <Contact contact={this.props.context.findByIdContacts(parseInt(this.props.match.params.id))}/>
                    </div>
            </div>
    }        
}

export default withContext(withRouter(ContactsView));


