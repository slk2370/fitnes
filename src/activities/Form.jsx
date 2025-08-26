import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function Form() {
  const { mutate } = useMutation("POST", "/activities", ["activities"]);
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const description = formData.get("description");
    await mutate({ name, description });
    e.target.reset(); 
  };

  if (!token) return null;

  return (
    <div>
      <h2>Add a new activity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Description
          <input type="text" name="description" required />
        </label>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
}
