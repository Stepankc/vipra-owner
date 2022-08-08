import './styles.Page404'
import React from 'react';
import { Link } from 'react-router-dom';


const Page404 = () => {
    return (
        <div className='Page404'>
                <h1>Страница не найдена!</h1>
                <p>Но Вы всегда можете вернуться <Link to='main'>домой</Link>  :)</p>
        </div>
    );
};

export default Page404;