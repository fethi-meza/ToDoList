import React from "react";
import { HStack, VStack, Text, IconButton ,StackDivider, Spacer } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";


function ToDoList({todos ,DeletToDo}){   


  return (
    <VStack divider={<StackDivider borderColor='gray.100' />} border="2px" p="4" borderRadius="lg" w="100%" maxW={{base:'110vw', sm:'80vw', lg:'50vw'}} alignItems='stretch'> 
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer/>
          <IconButton icon={<FaTrash />} isround="true" onClick={()=>DeletToDo(todo.id)}></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default ToDoList;
