import './App.css';
import React,{ useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import api from "../api/cfa";
import ContextList from './ContextList';
import Header from './Header';
import AddContext from './AddContext';

function App() {
  const [contexts, setContexts] = useState([]);

  //RetrieveContexts
  const retrieveContexts = async () => {
    
    const response = await api.get(`/getAllContexts`);
    return response.data;
  };

  const addContextHandler = async (ctx) => {
    const response = await api.post("/addContext", ctx);
    setContexts([...contexts, response.data]);
  };

  useEffect(() => {
    const getAllContexts = async () => {
      const allContexts = await retrieveContexts();
      if(allContexts) setContexts(allContexts);
    };

    getAllContexts();
  },[]);

  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Switch>
          <Route 
            path="/getAllContexts"
            exact
            render={(props) => (
              <ContextList
                {...props}
                contexts={contexts}
              />
            )}/>
            <Route
              path="/addContext"
              render={(props) => (
                <AddContext {...props} addContextHandler={addContextHandler}/>
              )}
              />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
