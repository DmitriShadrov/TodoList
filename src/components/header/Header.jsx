import React from "react";
import {NavLink } from "react-router-dom";
import withContext from "../../context/withContext";
import { Switch, withRouter } from "react-router";



const Header = (props) => {
    return( <div className='nav'>
        <h2>Phone Book</h2>
        <ul>
            {!props.context.token ? (
            <>
                <li>
                    <NavLink className='navLink' to='/auth' >Auth</NavLink> 
                </li>
            </>):(<>  
                <li>
                    <NavLink className='navLink' to='/contacts'>Contacts</NavLink>
                </li>
                <li>
                    <NavLink className='navLink' to='/add'>Add Contact</NavLink> 
                </li>
                <li>
                    <NavLink className='navLink' to='/' onClick={
                        (e) => {
                            e.preventDefault();
                            props.context.logout();
                            props.history.push('/auth');
                    }}>Logout</NavLink>           
                </li> 
            </> 
            )}
        </ul>  
    </div>
    )
}

export default withContext(withRouter(Header));