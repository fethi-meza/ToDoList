import React from 'react'
import { HStack,Input ,Button } from "@chakra-ui/react";


const AddToDo = (e) => {
  
  function handleSubmit(params) {
    
  }
  
  
  return (
   <form onSubmit={handleSubmit}>

<HStack mt="8">

  <Input variant={"filled"} placeholder='add to new app' />
  <Button  bgColor={"teal.200"} border={"1px"}  borderRadius={"8px"} variant="solid" px={'8'} type="submit">
    Add to new 
  </Button>

  </HStack>


   </form>
  )
}

export default AddToDo