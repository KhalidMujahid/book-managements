import Layout from "./components/Layout";
import Home from "./pages/Home";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import { Routes,Route } from "react-router";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<AddBook />}/>
        <Route path="/edit/:id" element={<EditBook />}/>
        <Route path="*" element={<p>Page not found!</p>}/>
      </Routes>
    </Layout>
  )
}

export default App