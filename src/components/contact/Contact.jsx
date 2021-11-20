import React from 'react';
import Del from '../img/delete.png';
import Build from '../img/buildings.png';
import Edit from '../img/edit.png';
import Multi from '../img/multimedia.png';
import Tech from '../img/technology.png';



export default ({ contact }) => {
   
    return (<div className='contact-view'>
            <div className='header'>   
                <h2>{`${contact.name} ${contact.lastName}`}</h2>
                <button className='img-btn'  ><img src={Del} alt=''/></button>
                <button className='img-btn'  ><img src={Edit} alt=''/></button>
            </div>    
                <div className='contact-view-row'><img src={Tech} alt=""/><h3>{contact.phone}</h3></div>
                <div className='contact-view-row'><img src={Multi} alt=""/><h3>{contact.email}</h3></div>
                <div className='contact-view-row'><img src={Build} alt=""/><h3>{contact.address}</h3></div>
                <p>{contact.description}</p>       
            </div>
    );
};


