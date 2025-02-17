import { FaRobot } from "react-icons/fa";

const MainContent = ({ title }) => {
  const date = new Date();
  let Topics = [
    {
      id: 1,
      name: "Supervised Learning",
      description:
        "A type of machine learning where the model is trained on labeled data.",
    },
    {
      id: 2,
      name: "Unsupervised Learning",
      description:
        "A learning method where the model finds patterns and structures in unlabeled data.",
    },
    {
      id: 3,
      name: "Reinforcement Learning",
      description:
        "A learning approach where an agent interacts with an environment to maximize rewards.",
    },
  ];

  function moveHandler() {
    alert(`on card`);
  }

  return (
    <main>
      <h2>
        <FaRobot /> {title}
      </h2>
      <p>{date.getFullYear()}</p>
      <p>
        Artificial intelligence (AI), in its broadest sense, is intelligence
        exhibited by machines, particularly computer systems. It is a field of
        research in computer science that develops and studies methods and
        software that enable machines to perceive their environment and use
        learning and intelligence to take actions that maximize their chances of
        achieving defined goals.[1] Such machines may be called AIs.
      </p>
      <ul>
        <li>Rule 1</li>
        <li>Rule 2</li>
        <li>Rule 3</li>
      </ul>

      {Topics.map((topic) => (
        <ol key={topic.id}>
          <h3>{topic.name}</h3>
        </ol>
      ))}

      <div style={{ display: "flex" }}>
        {Topics.map(({ id, name, description }) => (
          <div
            key={id}
            onMouseOver={moveHandler}
            style={{
              backgroundColor: "lightblue",
              padding: "20px",
              color: "darkblue",
              margin: "10px",
            }}
          >
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
