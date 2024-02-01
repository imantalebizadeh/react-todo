import Header from "@/components/Header";
import AddForm from "@/components/AddForm";

export default function App() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-screen-sm flex-col gap-8">
      {/* Header component */}
      <Header />

      {/* AddForm component */}
      <AddForm />
    </div>
  );
}
