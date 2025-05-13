import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };

  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new name"
          style={{
            backdropFilter: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            width: "100%",
            height: "100%",
            fontSize: "16px",
            cursor: "text",
            color: "black",
            background: "white",
          }}
        />
        <button
          type="submit"
          style={{
            background: "white",
            color: "blue",
            cursor: "pointer",
            margin: "10px",
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
