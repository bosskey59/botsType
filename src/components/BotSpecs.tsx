import React from "react";
import { BotCardProps } from "./BotCard";

const BotSpecs = ({
  id,
  name,
  catchphrase,
  health,
  damage,
  armor,
  bot_class,
  avatar_url,
}: BotCardProps) => {
  let botType;

  switch (bot_class) {
    case "Assault":
      botType = <i className="icon large circular military" />;
      break;
    case "Defender":
      botType = <i className="icon large circular shield" />;
      break;
    case "Support":
      botType = <i className="icon large circular ambulance" />;
      break;
    default:
      botType = <div />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={avatar_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {name}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {catchphrase}
            </p>
            <strong>
              Class: {bot_class} {botType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{health}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{damage}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() =>
                console.log("connect this to a function that shows all bots")
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>
                console.log(
                  "connect this to a function that adds this bot to your bot army list"
                )
              }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;
