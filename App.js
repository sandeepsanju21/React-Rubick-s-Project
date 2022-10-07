import { useEffect } from 'react';
import axios from "axios";
useEffect(() => {
    axios.get("http://localhost:5000/get-todo")
        .then((res) => setTodo(res.data))
        .catch((err) => console.log(err));
    }) 

app.get("/get-todo", gettodo);  