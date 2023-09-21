import Navbar from "./Navbar";
import Home from "./Home";
import Trending from "./Trending";
import Create from "./Create";
import Contact from "./Contact";
import BlogDetails from "./BlogDetails";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Notfound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path="/trending">
              <Trending />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>


          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
