import React from "react";
import { HStack, VStack, Text, IconButton ,StackDivider, Spacer } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
const ToDoList = () => {
  const todos = [
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
  return (
    <VStack divider={<StackDivider borderColor='gray.100' />} border="2px" p="4" borderRadius="lg" w="100%" maxW={{base:'110vw', sm:'80vw', lg:'50vw'}} alignItems='stretch'> 
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body} </Text>
          <Spacer/>
          <IconButton icon={<FaTrash />} isround="true"></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

export default ToDoList;
