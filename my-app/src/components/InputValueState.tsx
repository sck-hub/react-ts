import { useState } from "react";

const InputValueState = () => {
    const [text, setText] = useState<string>("");
    // 이벤트 타입 -> 상태 관리 : React.ChangeEvent<HTMLInputElement>
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    return (
        <div>
            <h2>이름 입력</h2>
            <input
                type="text"
                onChange={handleInputChange}
            />
            <p>입력된 글자: {text}</p>
        </div>
    )
}
export default InputValueState;