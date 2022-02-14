import { useState } from 'react'
import Counter from './counter/counter';

function Form() {
    const [fname, setFname] = useState(" ");
    const [age, setAge] = useState();
    const [users, setUsers] = useState([]);
    const updateValue = e => {
        console.log(e);
        setFname(e.target.value);
    }
    return (
        <div>
            <input placeholder='name' onChange={updateValue} value={fname} ></input>
            <input placeholder='age' onChange={updateValue} value={age} ></input>
            <button onClick={submit}>Save</button>
            <Counter>0</Counter>
        </div>

    );

    function submit() {
        const config = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                fname: fname,
                age: age
            })
        }
        const promise = fetch("http://localhost:3001/users", config);
        const promise1 = promise.then((response) => {
            console.log(response);
            return response.json();//convert the response body into json object
        });
        promise1.then(user => {
            console.log(user);
            setUsers([...users, user]);
        });

        console.log("button works")
    }
}

export default Form