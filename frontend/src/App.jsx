import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="w-full bg-slate-900 text-white p-[0.1px]">
      <div className="flex justify-end px-20 my-10">
        <Button bgColor={"bg-green-500"} btnName={"Create"} />
      </div>
      <Header />
    </div>
  );
};

export default App;
