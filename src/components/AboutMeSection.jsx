import { aboutMe } from "../data";
import TextAboutMe from "./TextAboutMe";
export default function AboutMeSection() {
    return (
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
    )
}
