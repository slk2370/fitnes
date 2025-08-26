import useMutation from "../api/useMutation";
import { useAuth } from "../auth/AuthContext";

export default function ActivityListItem({ activity }) {
  const { token } = useAuth();

  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", `/activities/${activity.id}`, ["activities"]);

  const handleDelete = async () => {
    try {
      await deleteActivity();
    } catch (err) {
      console.error("Failed to delete activity:", err);
    }
  };

  return (
    <li>
      <div>{activity.name}</div>
      {error ? (
        <div id="inline-error" style={{ border: "1px solid", backgroundColor: "lightgray", borderRadius: "4px" }}>{error}</div>
      ) : (
        token && (
          <button onClick={handleDelete} disabled={loading}>
            Delete
          </button>
        )
      )}
    </li>
  );
}
