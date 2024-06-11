import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#of0a19" color="gray.500" px={6} py={8}>
      <CodeEditor></CodeEditor>
    </Box>
  );
}

export default App;
