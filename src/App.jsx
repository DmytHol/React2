import Header from "./components/Header";
import { aboutMe, socialLinks } from "./data.js";
import { useState } from "react";
import TextAboutMe from "./components/TextAboutMe";
import Button from "./components/button/Button.jsx";

function App() {
  const [content, setContent] = useState("Press the button!");

  function handleClick(type) {
    setContent(type);
    // console.log("Button clicked!", type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Dmytro</h2>
          <ul>
            <TextAboutMe
              title={aboutMe[0].title}
              description={aboutMe[0].description}
            />
            <TextAboutMe {...aboutMe[1]} />
            <TextAboutMe {...aboutMe[2]} />
            <TextAboutMe {...aboutMe[3]} />
          </ul>
        </section>
        <section>
          <h3>Reach me at: </h3>

          <Button onClick={() => handleClick("linkedin")}>LinkedIn</Button>
          <Button onClick={() => handleClick("github")}>GitHub</Button>
          <Button onClick={() => handleClick("facebook")}>Facebook</Button>

          <p>{socialLinks[content]}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
