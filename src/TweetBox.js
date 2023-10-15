import { Avatar, Button } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: "parvgugnani",
      displayName: "Parv gugnani",
      Avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Prescription02&hatColor=White&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Blue03&eyeType=Happy&eyebrowType=Angry&mouthType=Eating&skinColor=Yellow",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });

    setTweetImage("");
    setTweetMessage("");
  };
}

return (
  <div className="tweetBox">
    <form>
      <div className="tweetBox__input">
        <Avatar src="https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Prescription02&hatColor=White&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Blue03&eyeType=Happy&eyebrowType=Angry&mouthType=Eating&skinColor=Yellow" />
      </div>
    </form>
  </div>
);
