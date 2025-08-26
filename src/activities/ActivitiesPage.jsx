import useQuery from "../api/useQuery";
import Form from "./Form";
import ActivityListItem from "./ActivityListItem";
function ActivitiesList() {
  const { data: allActivities } = useQuery("/activities", "activities");

  return (
    <ul>
      {allActivities?.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ul>
  );
}

export default function ActivitiesPage() {
  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <ActivitiesList />
      <Form />
    </>
  );
}
