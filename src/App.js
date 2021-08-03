import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddNewBookPage from "./pages/AddNewBook";
import AllBooksPage from "./pages/AllBooks";
import FavoriteBookPage from "./pages/FavoriteBook";


function App() {
  return (
    <div>
      <Layout>
      <Switch>
        <Route path='/' exact>
          <AllBooksPage/>
        </Route>

        <Route path='/add-book'>
          <AddNewBookPage/>
        </Route>
        
        <Route path='/favorites'>
          <FavoriteBookPage/>
        </Route>
      </Switch>
     </Layout>
    </div>
  );
}

export default App;
