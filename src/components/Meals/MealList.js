import Card from "../UI/Card";
import MealItem from "./MealItem";
import "./MealList.css";

const MENU_MEALS = [
  {
    id: "m1",
    name: 'Ролл "Наоми"',
    description:
      "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
    price: 11.99,
    amount: 1,
  },
  {
    id: "m2",
    name: "Спайс в лососе",
    description: "Рис, лосось, соус спайс",
    price: 3.99,
    amount: 1,
  },
  {
    id: "m3",
    name: "Суши с угрем",
    description: "Угорь копченый, соус унаги, кунжут",
    price: 4.99,
    amount: 1,
  },
  {
    id: "m4",
    name: 'Салат "Поке с лососем"',
    description:
      "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
    price: 7.99,
    amount: 1,
  },
];

const MealsList = (props) => {
  return (
    <section className="meals">
      <Card>
        <ul>
          {MENU_MEALS.map((meal) => {
            return (
              <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                price={meal.price}
                description={meal.description}
                amount={meal.amount}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default MealsList;
