import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFounds from './NotFounds';

function App() {
  // const title = 'Welcome to my first app';
  // const likes = 50;
  // const person = { name: 'Ezekiel', age: 19}; 
  // const link = "http://ucl.great-site.net";

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
        <Route path="/blogs/:id"> 
          <BlogDetails />
        </Route>
        <Route path="*">  
          <NotFounds />
        </Route>
      </Switch>
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p> */}

        {/* <p>{ person }</p> */}

        {/* <p>{ 10 }</p>
        <p>{ "Hello ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p> */}
        {/* <a href= { link }>Ultimate clash league</a> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
