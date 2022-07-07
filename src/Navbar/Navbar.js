import React from 'react';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonPinIcon from '@mui/icons-material/PersonPin';



const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navleft">
                <h1>Weekly sumup</h1>
                <p>Get summary of your weekly online transactions here.</p>
            </div>
            <div className="navright">
                <MarkunreadIcon/>
                <NotificationsIcon/>
                <div className="profil">
                      <PersonPinIcon/>
                      <span>Andrew <p>Admin account</p></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;