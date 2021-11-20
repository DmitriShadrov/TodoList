import { Route } from "react-router";
import withContext from "../../context/withContext";

function Row(){
    return<div className='contact'>
            <ul class="list">
                <li class="list-item item-active">
                    <h2 class="title">John Doe</h2>
                    <h3 class="sub-title">0555555555</h3>
                </li>
                <li class="list-item">
                    <h2 class="title">Jack Sparrow</h2>
                    <h3 class="sub-title">057777777</h3>
                </li>
                <li class="list-item">
                    <h2 class="title">Tony Stark</h2>
                    <h3 class="sub-title">0123456789</h3>
                </li>
            </ul>
            

        {/* <ul className='list'>
         {context.contacts.map((c,i) => {
               return <li className='title'  key={i} onClick={() => {
                   history.push(`/contacts/${i}`)
               }}>{c.name}<br/>{c.phone}</li>
            })}           
        </ul>
        <Route path='/contacts/:index' component={Contacts}/> */}
    </div>
}

export default  withContext(Row);