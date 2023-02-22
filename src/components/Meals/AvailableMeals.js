const DUMMY_MEALS=[
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
const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map(meal=> <li>name={meal.name}</li>)
    return <section>
        <ul>
            {mealsList}
        </ul>
    </section>
}
export default AvailableMeals;