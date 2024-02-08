import Header from "@/components/Header";
import AddForm from "@/components/AddForm";
import Filter from "@/components/Filter";
import TasksList from "./components/TasksList";

export default function App() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-sm flex-col gap-8 p-4 md:p-0">
      {/* Header component */}
      <Header />

      {/* AddForm component */}
      <AddForm />

      <section className="space-y-5 rounded-md border p-4">
        <h2 className="text-xl">Tasks</h2>

        <div className="space-y-8">
          {/* Filter component */}
          <Filter />

          {/* Tasks list */}
          <TasksList />
        </div>
      </section>
    </div>
  );
}
