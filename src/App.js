import { Heading } from "@chakra-ui/react";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import { VStack, IconButton } from "@chakra-ui/react";
import { FaSun , FaMoon } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <VStack p={4}>
        <IconButton icon={<FaSun />} isRound='true' size="lg" alignSelf="flex-end" />
        <Heading mb="8" fontWeight="extrabold" size="2xl" bgGradient="linear(to-r ,red.600 ,green.500 , blue.500)" bgClip="text">ToDoApp</Heading>
        <ToDoList />
        <AddToDo />
      </VStack>
    </div>
  );
}

export default App;
