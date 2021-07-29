import React, { useState, useEffect } from "react";
import { BotCardProps } from "../components/BotCard";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

//start here with your code for step one
const BotsPage = () => {
  const [allBots, setAllBots] = useState<Array<BotCardProps>>([]);
  const [myBots, setMyBots] = useState<Array<BotCardProps>>([]);

  const getBots = async () => {
    const resp = await fetch(
      "https://bot-battler-api.herokuapp.com/api/v1/bots"
    );
    const result = await resp.json();
    setAllBots(result);
  };

  const handleClick = (id: string) => {
    const selectedBot = allBots.find((bot) => bot.id === id);
    if (selectedBot) {
      if (!myBots.includes(selectedBot)) {
        setMyBots([...myBots, selectedBot]);
      }
    }
  };

  const removeBot = (id: string) => {
    const filteredBots = myBots.filter((bot) => bot.id !== id);
    setMyBots(filteredBots);
  };

  useEffect(() => {
    getBots();
  }, []);

  return (
    <div>
      <YourBotArmy botsArray={myBots} handleClick={removeBot} />
      <BotCollection botsArray={allBots} handleClick={handleClick} />
    </div>
  );
};

export default BotsPage;
