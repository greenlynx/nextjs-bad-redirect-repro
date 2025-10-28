import submitAction from "./submitAction";

export default function Home() {
  return (
    <form action={submitAction}>
      <button type="submit">Submit</button>
    </form>
  );
}
