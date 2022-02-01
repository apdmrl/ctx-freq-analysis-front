import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/cfa";
import ContextList from './ContextList';
import ContentList from './ContentList';
import AddContext from './AddContext';
import AddContent from './AddContent';
import Analyze from './Analyze';
import Navbar from './layout/Navbar';

function App() {
  const [contexts, setContexts] = useState([]);
  const [contents, setContents] = useState([]);

  const [analysis, setAnalysis] = useState("");

  const retrieveContexts = async () => {
    const response = await api.get(`/getAllContexts`);
    return response.data;
  };

  const retrieveContents = async () => {
    const response = await api.get(`/getAllContents`);
    return response.data;
  };

  const analyzeHandler = (analysis) => {
    api.post("/analyze", analysis).then((res) => {
      setAnalysis(res.data);
    });
  };

  const addContextHandler = (ctx) => {
    api.post("/addContext", ctx).then((res) => {
      setContexts([...contexts, res.data]);
    });
  };

  const addContentHandler = (ctn) => {
    let formData = new FormData();
    formData.append("name", ctn.name);
    formData.append("lang", ctn.lang);
    formData.append("file", ctn.file);
    formData.append("contextName", ctn.contextName);

    api.post("/addContent", formData, {
      headers: {
        "Content-Type": "multipart/form-data;",
        "Accept": "application/json",
        "type": "formData"
      },
    }).then((res) => {
      setContents([...contents, res.data]);
    });
  };

  useEffect(() => {
    const getAllContexts = async () => {
      const allContexts = await retrieveContexts();
      if (allContexts) {
        setContexts(allContexts);
      }
    };

    const getAllContents = async () => {
      const allContents = await retrieveContents();
      if (allContents) {
        setContents(allContents);
      }
    };

    getAllContexts();
    getAllContents();
  }, []);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="container mx-auto">
          <Switch>
            <Route
              path="/contexts"
              exact
              render={(props) => (
                <ContextList
                  {...props}
                  contexts={contexts}
                />
              )} />
            <Route
              path="/contents"
              exact
              render={(props) => (
                <ContentList
                  {...props}
                  contents={contents}
                />
              )} />
            <Route
              path="/addContext"
              render={(props) => (
                <AddContext {...props}
                  addContextHandler={addContextHandler}
                  contexts={contexts} />
              )}
            />
            <Route
              path="/addContent"
              render={(props) => (
                <AddContent {...props}
                  addContentHandler={addContentHandler}
                  contexts={contexts} />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <Analyze {...props}
                  analysis={analysis}
                  analyzeHandler={analyzeHandler}/>
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
