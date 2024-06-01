import "./App.css";
import { Box } from "./components/Box/Box";

function App() {
  return (
    <>
      <div className="flex  gap-4">
        <Box contenido="1" clase="basis-1/4 sm:basis-1/3" />
        <Box contenido="2" clase="basis-1/3 sm:basis-1/3 " />
        <Box contenido="3" clase="basis-1/2 sm:basis-1/3" />
      </div>
    </>
  );
}

export default App;
