export default function TextAboutMe(props) {
    return (
      <li>
        <p>
          <strong>{props.title}</strong> {props.description}
        </p>
      </li>
    );
  }