import React from 'react';
import UserList from './UserList';
import { users } from './users';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';

const App = () => {
    return (
        <div className='header tc'>
            <div className='flex dib m-2'>
                <img className='w4 h2 ' alt='logo' src='https://www.accenture.com/t20180820T080700Z__w__/gb-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.PNG?'/>
                <h1>knowledge for all</h1>
            </div>
            <Navbar />
            <p className='d-flex justify-content-start pa4 fs-2 fw-bold'>Posts</p>
            <UserList users={users}/>
        </div>
        
    );
}

export default App;