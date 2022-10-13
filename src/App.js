import "./App.css";
import Content from "./Component/Content";
import GlobalProvider from "./Component/GlobalProvider";

function App() {
  return (
    <>
      <h1 className="heading">ToDo List</h1>
      <div className="main">
        <GlobalProvider>
          <Content />
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;
