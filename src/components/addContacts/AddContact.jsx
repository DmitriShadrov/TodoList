import React from "react";



class AddContact extends React.Component {
    state ={
        contacts: [],
        loading: false
    }

    addContacts = ({address,description,email,id,lastName,name,phone}) =>{
        this.setState({contacts:[...this.state.contacts,{address,description,email,id,lastName,name,phone}]},{loading:true});
        console.log(this.state.contacts);
    }

    render(){
    return <div className='contact-view add-contact'>
            <div className="alert alert-success">
                Contact was added!
            </div>
            <div className="alert alert-danger">
                All fields should be fill!
            </div>
            <form onSubmit={e => {
                e.preventDefault();
                this.addContacts({
                    address: e.target.address.value,
                    description: e.target.description.value,
                    email: e.target.email.value,
                    id: e.target.id.value,
                    lastName: e.target.lastName.value,
                    name: e.target.name.value,
                    phone: e.target.phone.value,
                });
                e.target.address.value = '';
                e.target.description.value = '';
                e.target.email.value = '';
                e.target.id.value = '';
                e.target.lastName.value = '';
                e.target.name.value = '';
                e.target.phone.value = '';
            }}>
                <input className="form-control invalid" type="text" name="name" placeholder="Type name"/>
                <input className="form-control" type="text" name="lastName" placeholder="Type lastname"/>
                <input className="form-control" type="text" name="phone" placeholder="Type phone"/>
                <input className="form-control" type="text" name="email" placeholder="Type email"/>
                <input className="form-control" type="text" name="address" placeholder="Type address"/>
                <textarea className="form-control" type="text" name="description" placeholder="Type description"></textarea>
                <div className="buttons"><button className="btn btn-success" onClick={this.addContacts}>Add</button></div>
            </form>
    </div>
}
}

export default AddContact;