import React from 'react';
import { Link } from 'react-router-dom';

// import sidebar constant
import {
    UserTab
} from '../utils/sidebarConstant';

export default function AdminMenu(props) {

    const { currentUrl } = props;

    const admin = [
        ...UserTab,
    ];

    return (
        <>
            <div id="AdminMenu">
                <div className="list-group panel rounded-0">
                <a href="#admin" className={`list-group-item ubuntu-medium ${ admin.includes(currentUrl) ? 'active' : ''}`} data-toggle="collapse" data-parent="#AdminMenu">Admin</a>
                    <div  className={`collapse ${ admin.includes(currentUrl) ? 'show' : ''}`} id="admin">
                        <Link to="/user" className={`list-group-item ${ UserTab.includes(currentUrl) ? 'active' : ''}`}>User</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
