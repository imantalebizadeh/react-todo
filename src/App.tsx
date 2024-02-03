import Header from "@/components/Header";
import AddForm from "@/components/AddForm";
import FilterForm from "@/components/FilterForm";

export default function App() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-sm flex-col gap-8">
      {/* Header component */}
      <Header />

      {/* AddForm component */}
      <AddForm />

      <section className="space-y-5 rounded-md border p-4">
        <h2 className="text-xl">Tasks</h2>

        <div>
          {/* FilterForm component */}
          <FilterForm />
        </div>
      </section>
    </div>
  );
}
