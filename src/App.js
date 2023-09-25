
import React, { useState  } from 'react';
import { Heading } from "@chakra-ui/react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { VStack, IconButton } from "@chakra-ui/react";
import { FaSun  } from "react-icons/fa";

import "./App.css";

const initialTodos = [
  {
    id: "1",
    body: "good job",
  },
  {
    id: "2",
    body: "wow job",
  },
  {
    id: "3",
    body: "fddf job",
  },
];
  // const [todos , setTodos] = useState(initialTodos);




function DeletToDo(id) {

  const [todos , setTodos] = useState(initialTodos);

  const newTodo = todos.filter(todo =>{

    return todo.id !== id 
  });
  setTodos(newTodo)
}


function App() {
  return (
    <div className="App">
      <VStack p={4}>
        <IconButton icon={<FaSun />} isRound='true' size="lg" alignSelf="flex-end" />
        <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r ,red.600 ,green.500 , blue.500)" bgClip="text">ToDoApp</Heading>
        <ToDoList todos={initialTodos}  DeletToDo={DeletToDo}/>
        <AddToDo />
      </VStack>
    </div>
  );
}

export default App;
