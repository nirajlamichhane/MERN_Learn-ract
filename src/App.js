
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Todos from "./Components/Todos";

function App() {
  let todos = [
    {
      sn: 1,
      title: "hello",
      desc: "hello"
    },
    {
      sn: 2,
      title: "hello",
      desc: "hello"
    },
    {
      sn: 3,
      title: "hello",
      desc: "hello"
    }
  ]
  return (
    <div className="App">
      <Header title="My ToDO" searchBar={false}/>
      <Todos todos ={todos} />
      <Footer />
    </div>
  );
}

export default App;
