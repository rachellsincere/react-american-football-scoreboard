//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react"; //imported useState hook
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0); //setup state with inital value '0' for both teams' scores.
  const [awayScore, setAwayScore] = useState(0);
  //const [quarter, setQuarter] = useState(1); //stretch: establishing quarter state


  // setting up score callbacks using "set(Team)Score" to use with click handlers
  const homeTouchdown = e => {
    setHomeScore(homeScore + 7);
  };
  const homeFieldGoal = e => {
    setHomeScore(homeScore + 3);
  };

  const awayTouchdown = e => {
    setAwayScore(awayScore + 7);
  };
  const awayFieldGoal = e => {
    setAwayScore(awayScore + 3);
  };

  //setting up quarter callback to use with click handler
 /* const gameQuarter = e => {
    setQuarter(quarter + 1);
  }; 
  */


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>  {/*changed hardcoded scores for both teams to dynamic state values */}
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button> {/*added click listeners for each button using "set(team)Score" callbacks */}
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
        </div>
        <div className="quarterButtonDiv">
<button className="quarterButton" >Next Quarter</button> {/* added quarter button and click handler */}
        </div>
      </section>
    </div>
  );
}


export default App;
