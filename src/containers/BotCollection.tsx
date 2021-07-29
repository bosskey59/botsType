import React from "react";
import BotCard, { BotCardProps } from "../components/BotCard";

export interface BotCollectionProps {
  botsArray: Array<BotCardProps>;
  handleClick: (id: string) => void;
}

const BotCollection = ({ botsArray, handleClick }: BotCollectionProps) => {
  //your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {botsArray.map((bot) => (
          <BotCard {...bot} handleClick={handleClick} key={bot.id} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
};

export default BotCollection;
