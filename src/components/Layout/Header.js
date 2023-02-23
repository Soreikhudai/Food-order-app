import { Fragment } from 'react'
import mealImage from '../../assets/meal.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h2> Daisy Meals </h2>
               <HeaderCartButton/>
            </header>
            <div className={classes ['main-image']}>
                <img src={mealImage} alt="your favourite order"/>
            </div>
        </Fragment>
    )
}
export default Header;