import React from "react";

export interface CardProps {
  id: string;
  name: string;
  catchphrase: string;
  health: string;
  damage: string;
  armor: string;
  bot_class: string;
  avatar_url: string;
}

const BotCard = ({
  id,
  name,
  catchphrase,
  health,
  damage,
  armor,
  bot_class,
  avatar_url,
}: CardProps) => {
  let botType;

  switch (bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={id}
        onClick={() => console.log("add code to connect event listener")}
      >
        <div className="image">
          <img alt="oh no!" src={avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {health}
          </span>

          <span>
            <i className="icon lightning" />
            {damage}
          </span>
          <span>
            <i className="icon shield" />
            {armor}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BotCard;
