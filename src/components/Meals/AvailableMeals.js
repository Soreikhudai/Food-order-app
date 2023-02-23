import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
    {
        id: 'e1',
        name: 'Fried Noodles',
        description: 'fried with special engine oil tp give a yummy test',
        price: '23.56'
    },
    {
        id: 'e2',
        name: 'chicken masala',
        description: 'fried chicken special with spicy masala',
        price: '15.89'
    },
    {
        id: 'e3',
        name: 'Burger king',
        description: 'burger with veg and non-veg',
        price: '35.35'
    },
    {
        id: 'e4',
        name: 'Pizza',
        description: 'hot pizza of veg and non-veg',
        price: '20.00'
    },

]
const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) =>
        <MealItem
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )
    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>

    </section>
}
export default AvailableMeals;