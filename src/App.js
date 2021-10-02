import './App.css';
import { useState } from 'react';

var emojiDict = {
  "😀" : "Grinning Face",
  "😃" : "Grinning Face with Big Eyes",
  "😄" : "Grinning Face with Smiling Eyes",
  "😁" : "Beaming Face with Smiling Eyes",
  "😆" : "Grinning Squinting Face",
  "😅" : "Grinning Face with Sweat",
  "🤣" : "Rolling on the Floor Laughing",
  "😂" : "Face with Tears of Joy",
  "🙂" : "Slightly Smiling Face",
  "🙃" : "Upside-Down Face"
}

var emojiList = ["😂", "🙂","🙃", "😀", "😃", "😄", "😁", "😆", "😅", "🤣"]


function App() {
  var [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event){
    emojiMeaning = emojiDict[event.target.value];
    if (emojiMeaning === undefined){
      emojiMeaning = "we dont have this in our database"
    }
    setEmojiMeaning(emojiMeaning)
  }

  function emojiClick(emoji){
    var emojiMeaning = emojiDict[emoji];
    setEmojiMeaning(emojiMeaning)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Emoji Interpreter</h1>
        <input type="text" onChange = {emojiInputHandler} placeholder="type emoji here"/>
        <p>{emojiMeaning}</p>
        <h3>Available emojis:</h3>
        <ul>
          {
            emojiList.map(emoji => {
              return <li onClick = {() =>{emojiClick(emoji)}} key={emoji} style = {{
                listStyle : "none", 
                display: "inline", 
                padding: "1rem",
                margin: "1rem",
                fontSize : "3rem",
                textAlign: "center",
                cursor : "pointer"
              }}>{emoji}</li>
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
