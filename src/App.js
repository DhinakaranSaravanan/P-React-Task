import { Route, Routes } from "react-router-dom";
import Header from "./navbar/Header";
import Home from "./Home";
import About from "./About";
import Footer from "./navbar/Footer";
import PageNotFound from "./PageNotFound";
import List from "./List";
import Layout from "./Layout";
import TodoList from "./TodoList";


function App() {
  return (
    <>      
      <Header /> 
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />

          <Route path="/list" element={<List />}>
            <Route index element={<TodoList/>} />
          </Route> 
          
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>  
      <Footer /> 
    </>
  );
}

export default App;
