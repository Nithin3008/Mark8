import { useReducer, useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "😑": "annoyance",
  "😂": "Face with Tears of Joy",
  "🔥": "Fire",
  "😤": "Frustrated",
  "🚞": "Mountain Railway",
  "🛌": "Person Sleeping",
  "🍨": "Ice cream"
};
var emojiarr = Object.keys(emojiDictionary);
export default function App() {
  var [result, setResult] = useState("");

  function emojihandler(event) {
    result = emojiDictionary[event.target.value];
    if (result === undefined) {
      result = "not there in database";
    }
    setResult(result);
  }

  function emojiHandler1(emoji) {
    result = emojiDictionary[emoji];
    setResult(result);
  }

  return (
    <div className="App">
      <h2>Emoji</h2>
      <input onChange={emojihandler} />
      <h2>{result}</h2>
      <h2>emoji we know</h2>
      {emojiarr.map(function (emoji) {
        return (
          <span
            onClick={() => emojiHandler1(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
