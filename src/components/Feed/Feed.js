import React from "react";

// components
import InputOption from "../InputOptions/InputOption";
// style && icon
import "./Feed.css";
import {
  Create,
  Image,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from "@mui/icons-material";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button>Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70b5f9" />
          <InputOption Icon={Subscriptions} title="Vedio" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
