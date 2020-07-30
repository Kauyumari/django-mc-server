import React from 'react';
import axios from 'axios';

import 'antd/dist/antd.css';
import { Layout, Typography, Divider, Button, Input } from 'antd';

import Headr from './header';

const { Header, Content, Footer } = Layout;

function Settings() {

  // send command function from buttons
  const sendCommand = (command) => {
    console.log("Sending command: " + command);
    const response = axios.post('http://localhost:8000/command/', {"command": command})
      .then((res) => console.log(res));
    console.log(response);
  }

  // Time commands
  const makeSunrise = () => sendCommand("/time set 23000");
  const makeDay = () => sendCommand("/time set day");
  const makeNoon = () => sendCommand("/time set noon");
  const makeSunset = () => sendCommand("/time set 12000");
  const makeNight = () => sendCommand("/time set night");
  const makeMidnight = () => sendCommand("/time set midnight");

  // Weather commands
  const makeClear = () => sendCommand("/weather clear");
  const makeRain = () => sendCommand("/weather rain");
  const makeThunder = () => sendCommand("/weather thunder");

  // Gamemode commands
  const gamemodeSurvival = () => sendCommand("/gamemode survival @a");
  const gamemodeCreative = () => sendCommand("/gamemode creative @a");
  const gamemodeAdventure = () => sendCommand("/gamemode adventure @a");
  const gamemodeSpectator = () => sendCommand("/gamemode spectator @a");

  // Difficulty commands
  const difficultyPeaceful = () => sendCommand("/difficulty peaceful");
  const difficultyEasy = () => sendCommand("/difficulty easy");
  const difficultyNormal = () => sendCommand("/difficulty normal");
  const difficultyHard = () => sendCommand("/difficulty hard");

  // Broadcast message
  const sendMessage = (text) => sendCommand("/msg @a " + text);


  return (
    <div>
      <Layout>
          <Header>
            <Headr title="World Settings" subtitle="Change world here"/>
          </Header>
          <Content>
            <Typography.Title level={3}>Environment Settings</Typography.Title>
            
            <Typography.Title level={4}>Time</Typography.Title>
            <Button onClick={makeSunrise}>Sunrise</Button>
            <Button onClick={makeDay}>Day</Button>
            <Button onClick={makeNoon}>Noon</Button>
            <Button onClick={makeSunset}>Sunset</Button>
            <Button onClick={makeNight}>Night</Button>
            <Button onClick={makeMidnight}>Midnight</Button>

            <Typography.Title level={4}>Weather</Typography.Title>
            <Button onClick={makeClear}>Clear</Button>
            <Button onClick={makeRain}>Rain</Button>
            <Button onClick={makeThunder}>Thunder</Button>
            
            <Divider />
            
            <Typography.Title level={3}>Game Mode Settings</Typography.Title>
            
            <Typography.Title level={4}>Gamemodes</Typography.Title>
            <Button onClick={gamemodeSurvival}>Survival</Button>
            <Button onClick={gamemodeCreative}>Creative</Button>
            <Button onClick={gamemodeAdventure}>Adventure</Button>
            <Button onClick={gamemodeSpectator}>Spectator</Button>

            <Typography.Title level={4}>Difficulty</Typography.Title>
            <Button onClick={difficultyPeaceful}>Peaceful</Button>
            <Button onClick={difficultyEasy}>Easy</Button>
            <Button onClick={difficultyNormal}>Normal</Button>
            <Button onClick={difficultyHard}>Hard</Button>

            <Divider />

            <Typography.Title level={3}>Other Commands</Typography.Title>
            <Typography.Title level={4}>Broadcast Message</Typography.Title>
            <Input.Search
              style={{width: '80%'}}
              placeholder="Type message to broadcast"
              enterButton="Send"
              onSearch={value => sendMessage(value)}
            />

            <Typography.Title level={4}>Send Custom Text Command</Typography.Title>
            <Input.Search
              style={{width: '80%'}}
              placeholder='Type command to send'
              addonBefore="/"
              enterButton="Send command"
              onSearch={value => sendCommand(`/${value}`)}
            />



          </Content>
          <Footer>Minecraft server admin Settings :)</Footer>
        </Layout>
    </div>
  );
}

export default Settings;