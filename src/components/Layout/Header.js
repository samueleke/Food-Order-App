import React, { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                {/* onClick function is not the built in one */}
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='meals'/>
            </div>
        </Fragment>
    )
}

export default Header;