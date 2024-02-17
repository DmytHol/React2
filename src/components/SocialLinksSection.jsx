import Button from "./button/Button";
import { socialLinks } from "../data";
import { useState } from "react";

export default function SocialLinksSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
    // console.log("Button clicked!", type);
  }

  return (
    <section>
      <h3>Reach me at: </h3>

      <Button
        isActive={contentType === "linkedin"}
        onClick={() => handleClick("linkedin")}
      >
        LinkedIn
      </Button>
      <Button
        isActive={contentType === "github"}
        onClick={() => handleClick("github")}
      >
        GitHub
      </Button>
      <Button
        isActive={contentType === "facebook"}
        onClick={() => handleClick("facebook")}
      >
        Facebook
      </Button>

      {contentType ? (
        <p>{socialLinks[contentType]}</p>
      ) : (
        <p>Press the button</p>
      )}
    </section>
  );
}
