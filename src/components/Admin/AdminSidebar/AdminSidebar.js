import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineUserAdd } from 'react-icons/ai';
import { RiShoppingBasketLine } from 'react-icons/ri';


const AdminSidebar = () => {
    return (
        <div>
            <div>
                <NavLink activeClassName="bg-light" className="dropdown-item" to="/all-service"><RiShoppingBasketLine /> Service List</NavLink>
                <NavLink activeClassName="bg-light" className="dropdown-item" to="/add-service"><AiOutlinePlus /> Add Service</NavLink>
                <NavLink activeClassName="bg-light" className="dropdown-item" to="/add-admin"><AiOutlineUserAdd /> Make Admin</NavLink>
            </div>
        </div>
    );
};

export default AdminSidebar;