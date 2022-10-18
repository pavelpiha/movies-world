import { useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header";

function App() {
  const [searchEntry, setSearchEntry] = useState("");
  const handleSubmit = (searchInput) => {
    setSearchEntry(searchInput);
  };

  return (
    <div className="">
      <Header handleSubmit={handleSubmit} />
      <div className="mainBlock">{searchEntry}</div>
    </div>
  );
}

export default App;
