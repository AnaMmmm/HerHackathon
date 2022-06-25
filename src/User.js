import React from 'react';

const User = ({name, email, department, id, image}) => {
    return (
        <div className='flex tc bg-purple o-80 dib br3 pa1 ma4 grow bw2 shadow-5'>
            <img className='rounded' alt ='employeePhoto' src={image} />
            <div className='pa3 mt2'>
                <h2>{name}</h2>
                <p>{email}</p>
                <p>{department}</p>
            </div>
            <div className='mx-auto mt5 mb-5 mt-4 border border-dark border-bottom-0 border-top-0 border-right-0'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet cursus neque. Curabitur ultricies nunc in dui lacinia eleifend sed eu lacus. Pellentesque hendrerit hendrerit nisi at pharetra. Integer consectetur elit sed finibus auctor. Donec metus magna, blandit non ipsum sed, posuere egestas velit. Nunc rhoncus lorem nec enim dapibus consectetur. Donec dolor augue, venenatis eu neque vitae, imperdiet mollis sem. Praesent ac augue eu mi iaculis lacinia. Nulla rhoncus ex eget tortor dictum dapibus.</p>
                <a href='#' className='black'>Click for the file</a>
            </div>
        </div>
    );
}

export default User;