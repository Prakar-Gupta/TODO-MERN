import { useState, ChangeEvent } from "react";
import { createTask } from "../Axios/axios";
function InputTask() {
    const [value, setValue] = useState('')
    const submit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key == 'Enter') {
            createTask(value, false)
            window.alert('submitted')
            setValue('')
        }
    }
    const setvalue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    }
    return (
        <div className="column TaskInputView">
            <div className="Container">
                <div className="Heading">
                    Board View
                </div>
                <div className="SearchDiv">
                    <div className="Input">
                        <input
                            value={value}
                            placeholder="Enter new task"
                            onChange={setvalue}
                            onKeyDown={submit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputTask;