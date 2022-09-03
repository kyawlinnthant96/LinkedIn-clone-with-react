import React, { useState, useEffect } from "react";

// components
import InputOption from "../InputOptions/InputOption";
import Post from "../Post/Post";
// style && icon
import "./Feed.css";
import {
  Create,
  Image,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from "@mui/icons-material";

// firebase
import { db } from "../../Firebase/Firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
} from "firebase/firestore";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const postRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = onSnapshot(postRef, (snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    };

    getPosts();
  }, []);

  const sendPosts = async (event) => {
    event.preventDefault();
    await addDoc(postRef, {
      name: "Kyaw",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button onClick={sendPosts} type="submit">
              Send
            </button>
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

      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
