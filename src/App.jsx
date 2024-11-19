import "./App.css";
import AddText from "./components/AddText";
import Customization from "./components/Customization";
import EditorCanvas from "./components/EditorCanvas";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <EditorCanvas />
      <Customization />
      <AddText />
    </>
  );
}

export default App;
