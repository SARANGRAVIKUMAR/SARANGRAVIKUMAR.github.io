import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "sarang",
      username: "@sarang",
      verified: true,
      text: tweetMessage,
      avatar:
        "https://yt3.ggpht.com/yti/ANoDKi4rQgwf52nxX5QQRJATf6f1FHY7oGg141KrPOtR5Q=s88-c-k-c0x00ffffff-no-rj-mo",
      image: tweetImage,
    });
    setTweetImage("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://yt3.ggpht.com/yti/ANoDKi4rQgwf52nxX5QQRJATf6f1FHY7oGg141KrPOtR5Q=s88-c-k-c0x00ffffff-no-rj-mo" />

          <input
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="Whats happening"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox_inputImage"
          placeholder="Optional:Enter image url"
          type="text"
        />
        <Button type="submit" onClick={sendTweet} className="tweetBox_button">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
