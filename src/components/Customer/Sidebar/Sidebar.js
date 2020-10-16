import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { HiOutlineChatAlt } from 'react-icons/hi';
import { GrList } from 'react-icons/gr';

const Sidebar = () => {
    return (
        <div>
            <NavLink activeClassName="bg-light" className="dropdown-item" to="/order"><FiShoppingCart /> Order</NavLink>
            <NavLink activeClassName="bg-light" className="dropdown-item" to="/service"><GrList /> Service list</NavLink>
            <NavLink activeClassName="bg-light" className="dropdown-item" to="/review"><HiOutlineChatAlt /> Review</NavLink>
        </div>
    );
};

export default Sidebar;