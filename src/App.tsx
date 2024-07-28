import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}

      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

// let items = ["Dallas", "New York", "Philadelphia", "Paris", "Tokyo"];

// const handleSelectItem = (item: string) => {
//   console.log(item);
// }
// <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
export default App;
