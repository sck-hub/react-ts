import { useState } from "react";

const DrinkList = () => {
    const [drinks, setDrinks] = 
        useState<string[]>(["사이다", "녹차", "주스"]);
    return (
        <div>
            <h2>음료 리스트</h2>
            <ul>
                {drinks.map( (drink, index) => (
                    <li key={index}>{drink}</li>

                ))}
            </ul>
        </div>
    )
}
export default DrinkList;