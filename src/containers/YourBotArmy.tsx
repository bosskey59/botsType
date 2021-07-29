import React from "react";
import BotCard, { BotCardProps } from "../components/BotCard";
import { BotCollectionProps } from "./BotCollection";

const YourBotArmy = ({ botsArray, handleClick }: BotCollectionProps) => {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botsArray.map((bot) => (
            <BotCard {...bot} handleClick={handleClick} key={bot.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
