import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Contacts = () => {
    return (
        <div>
            <h1>Contacts Page</h1>
            <nav>
                <ul>
                    <li><Link to='contact1'>Contact 1</Link></li>
                    <li><Link to='contact2'>Contact 2</Link></li>
                </ul>
                <Outlet />
            </nav>
        </div>
    )
}

export default Contacts