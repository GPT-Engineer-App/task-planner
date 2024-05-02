import { useState } from "react";
import { Box, Button, Input, List, ListItem, Text, VStack, IconButton, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const toast = useToast();

  const handleAddTodo = () => {
    if (input.trim() === "") {
      toast({
        title: "Cannot add empty todo",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <VStack p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Todo App
      </Text>
      <Box>
        <Input placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} mr={2} />
        <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme="blue" aria-label="Add todo" />
      </Box>
      <List spacing={3} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
            <Text>{todo}</Text>
            <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
