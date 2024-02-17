import Header from "./components/Header";
import { aboutMe, socialLinks } from "./data.js";
import { useState } from "react";
import TextAboutMe from "./components/TextAboutMe";
import Button from "./components/button/Button.jsx";

function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
    // console.log("Button clicked!", type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Dmytro</h2>
          <ul>
            {/* <TextAboutMe
              title={aboutMe[0].title}
              description={aboutMe[0].description}
            />
            <TextAboutMe {...aboutMe[1]} />
            <TextAboutMe {...aboutMe[2]} />
            <TextAboutMe {...aboutMe[3]} /> */}
            {aboutMe.map((item, index) => (
              <TextAboutMe key={index} {...item} />
            ))}
          </ul>
        </section>
        <section>
          <h3>Reach me at: </h3>

          <Button isActive={contentType === 'linkedin'} onClick={() => handleClick("linkedin")}>LinkedIn</Button>
          <Button isActive={contentType === 'github'} onClick={() => handleClick("github")}>GitHub</Button>
          <Button isActive={contentType === 'facebook'} onClick={() => handleClick("facebook")}>Facebook</Button>

          {contentType ? (
            <p>{socialLinks[contentType]}</p>
          ) : (
            <p>Press the button</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
