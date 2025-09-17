

function App() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <div>
     <div className="shadow-lg">

      <img alt="body-spray" src="./fenty.jpeg" className=" w-[300px] h-64 object-cover rounded-t-lg shadow-lg" />
     </div>
     <div className=" bg-white rounded-b-lg shadow-lg p-6">
      <div className="flex flex-col gap-[5px]  justify-center items-center">
        <h1 className="text-2xl font-bold">Fenty Beauty</h1>
        <h2 className="text-xl font-semibold">Glowing Skin</h2>
        <p className="text-lg">A body spray for glowing skin</p>
        <p className="text-lg">Price: $30</p>
        <button className="bg-blue-700 hover:bg-transparent border-2 border-white hover:border-2 hover:border-black hover:text-black text-white font-bold py-2 px-4 rounded">
          Add to cart
        </button>
      </div>
      </div>
       
     </div>
    </div>
  );
}

export default App;
