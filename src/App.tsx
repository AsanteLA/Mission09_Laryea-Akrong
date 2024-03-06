import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './CollegeBasketballTeams.json';

interface Teamprops {
  school: string;
  name: string;
  city: string;
  state: string;
}

function WelcomeNote() {
  return <h1>Welcome to March Madness 2024!!</h1>;
}

class Team extends React.Component<Teamprops> {
  render() {
    const oneTeam = this.props;
    return (
      <div className='card'>
        <h2>{oneTeam.school}</h2>
        <h3>{oneTeam.name}</h3>
        <p>
          {oneTeam.city}, {oneTeam.state}
        </p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className='card-container'>
      {data.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeNote />
      </header>
      <TeamList />
    </div>
  );
}

export default App;
