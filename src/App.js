import "./App.css";
import Content from "./Component/Content";
import GlobalProvider from "./Component/GlobalProvider";

function App() {
  return (
    <>
      <div className="main">
        <GlobalProvider>
          <Content />
        </GlobalProvider>
      </div>
    </>
  );
}

export default App;
