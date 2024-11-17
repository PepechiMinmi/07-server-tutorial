import { useEffect, useState } from "react";
//import "./style.css";

export default function App() {
  const [story, setStory] = useState(""); // ストーリーの保持

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/api/random-story"); // サーバー：リクエスト
        const data = await response.text(); // テキスト形式でレスポンス入手
        setStory(data); // ストーリーを状態に保存
      } catch (error) {
        console.error("Failed to fetch story:", error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Random Story Generator</h1>
      <p>{story || "Loading..."}</p>
    </div>
  );
}
