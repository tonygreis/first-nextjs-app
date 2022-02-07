import { useRouter } from "next/router";

function ClientProjects() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "tony", clientprojectid: "projectOne" },
    });
  }
  return (
    <div>
      <h1>Client project Page</h1>
      <button onClick={loadProjectHandler}>Load a project</button>
    </div>
  );
}

export default ClientProjects;
