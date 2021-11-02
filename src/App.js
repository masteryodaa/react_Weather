import { useEffect, useState } from "react";
import Weather from "./Components/Weather";
import NavBar from "./Components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from "./Components/Welcome";
import LoadingBar from 'react-top-loading-bar'
import Footer from "./Components/Footer";

function App() {

  
  const [value, setValue] = useState(localStorage.getItem("city") ? localStorage.getItem("city") : "");

  const [progress, setProgress] = useState(0);

  const setProgressState = (value) => {
    setProgress(value);
  }


  const onChange = (e) => {
    setValue(e.target.value);
  }

  const clickHandler = (e) => {
    localStorage.setItem('city', value);
  };



  return (
    <Router>

      <div className="App">

      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />

        <NavBar clickHandler={clickHandler} onChange={onChange} value={value} />

        <Switch>

          <Route exact path={'/'}>
            <Welcome />
          </Route>

          <Route exact path={`/${value}`}>
            <Weather city={value} progress={setProgressState}/>
          </Route>

        </Switch>


      <Footer />

      </div>

    </Router>
  );
}

export default App;
