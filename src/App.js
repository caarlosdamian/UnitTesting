import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";
function App() {
  const [showdiv] = useState(true);
  return (
    <div className="App">
      <Input showdiv={showdiv} />
      <Button />
    </div>
  );
}

export default App;
