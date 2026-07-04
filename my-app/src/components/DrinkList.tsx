import { useState } from "react";

const DrinkList = () => {
    const [drinks, setDrinks] = 
        useState<string[]>(["사이다", "녹차", "주스"]);
    // 음료 추가 함수
    const addDrink = () => {
        const newDrink = prompt("추가할 음료를 입력하세요: ");
        if(newDrink) {
            // 기존 배열에 새 음료를 추가
            setDrinks([...drinks, newDrink]);
        }
    }
    return (
        <div className="drinklist">
            <h2>음료 리스트</h2>
            <ul>
                {drinks.map( (drink, index) => (
                    <li key={index}>{drink}</li>

                ))}
            </ul>
            <button onClick={addDrink}>음료 추가</button>
        </div>
    )
}
export default DrinkList;