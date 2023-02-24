import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'King burger',
    description: 'veg and non-veg burger ',
    price: 56.89,
  },
  {
    id: 'm2',
    name: 'Pizza',
    description: 'Best mixed with traditional cream',
    price: 35.98,
  },
  {
    id: 'm3',
    name: 'Chow noodles',
    description: 'Chinese taste',
    price: 35.12,
  },
  {
    id: 'm4',
    name: 'German curry',
    description:'Sweet mixed taste',
    price: 20.99,
  },
];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  
    return (
      <section className={classes.meals}>
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  };
  
  export default AvailableMeals;