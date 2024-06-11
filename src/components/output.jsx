/* eslint-disable react/prop-types */
import { Box, Button, Text, useToast } from "@chakra-ui/react";
import { executeCode } from "../api";
import { useState } from "react";

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occured",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box w="50%">
      <Text mb={2} fontSize="lg"></Text>
      <Button
        variant="outline"
        colorScheme="green"
        mb={4}
        onClick={runCode}
        isLoading={isLoading}
      >
        Run code
      </Button>
      <Box
        height="75vh"
        p={2}
        border="1px solid"
        borderRadius={4}
        borderColor="#333"
      >
        {output ? output : 'Click "Run code" to see the output here'}
      </Box>
    </Box>
  );
};

export default Output;
