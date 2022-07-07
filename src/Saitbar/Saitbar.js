import React from 'react';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ListIcon from '@mui/icons-material/List';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom';


const Saitbar = () => {
    return (
        <div className='saitbar'>
            <NavLink to={'/'}><button className='logo'><img src="./img/Group 69.png" alt="" /><img src="./img/Group 128.png" alt="" className='logopasition'/></button></NavLink>
            <ul>
                <NavLink activeclassname='active' to={'/'}> <li><AutoAwesomeMotionIcon /> Overview</li></NavLink>
                <NavLink activeclassname='active' to={'/worker'}><li><ListIcon /> Worker</li></NavLink>
                <NavLink activeclassname='active' to={'/cards'}><li><CreditCardIcon /> Cards</li></NavLink>
                <NavLink activeclassname='active' to={'/invoices'}> <li><InsertDriveFileIcon /> Invoices</li></NavLink>
                <NavLink activeclassname='active' to={'/goals'}><li><BookmarkBorderIcon /> Goals</li></NavLink>
                <NavLink activeclassname='active' to={'/settings'}> <li className='settingicon'><SettingsIcon /> Settings</li></NavLink>
            </ul>
            <NavLink to={'/'}><button className='woiti'><img src="./img/Group 158.png" alt="" />Give your money <br />
                awesome space in cloud</button></NavLink>
        </div>
    );
};

export default Saitbar;