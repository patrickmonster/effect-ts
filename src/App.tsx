import "@/assets/css/app.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <>message: {count}</>;
}

export default App;
