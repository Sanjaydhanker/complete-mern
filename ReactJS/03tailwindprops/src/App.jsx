import Card from "./Card";

function App() {
  const randomView = Math.floor(Math.random() * 1000);

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-slate-800">
        <div>
          <h1 className="text-2xl font-bold border bg-green-600 text-white p-4 rounded">
            Tailwind CSS
          </h1>
          <div className="flex space-x-4">
            <Card randNum={randomView} btn="Learn" />
            <Card randNum={randomView} btn="More.." />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
