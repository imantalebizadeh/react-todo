import Header from "@/components/Header";
import AddForm from "@/components/AddForm";
import TasksList from "./components/TasksList";

export default function App() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-sm flex-col gap-8 p-4 md:p-0">
      {/* Header component */}
      <Header />

      {/* AddForm component */}
      <AddForm />

      <section className="space-y-3">
        <h2 className="text-xl">Tasks</h2>

        <div className="rounded-md border p-4">
          <TasksList />
        </div>
      </section>
    </div>
  );
}
