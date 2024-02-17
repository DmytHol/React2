import Header from "./components/Header";
import { aboutMe } from "./data.js";
import TextAboutMe from "./components/TextAboutMe";
import Button from "./components/Button.jsx";

function App() {
  function handleClick(type) {
    console.log("Button clicked!", type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Dmytro</h2>
          <ul>
            <TextAboutMe title={aboutMe[0].title} description={aboutMe[0].description}/>
            <TextAboutMe {...aboutMe[1]} />
            <TextAboutMe {...aboutMe[2]} />
            <TextAboutMe {...aboutMe[3]} />
          </ul>
        </section>
        <section>
          <h3></h3>
          <h3>
            <h3>Reach me</h3>
          </h3>
          <Button onClick={() => handleClick('linkedin')}>LinkedIn</Button>
          <Button onClick={() => handleClick('github')}>GitHub</Button>
          <Button onClick={() => handleClick('facebook')}>Facebook</Button>
        </section>
        
      </main>
    </div>
  );
}

export default App;
