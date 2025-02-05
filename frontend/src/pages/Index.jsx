const Index = () => {
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div className="bg-[#212223] shadow-md">
        <div className="w-[93%] m-auto py-3">
          <div className="flex justify-between items-center">
            <div className="w-[80px] h-[48px]">
              <img
                className="w-full h-full"
                src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
                alt=""
              />
            </div>
            <div className="flex gap-4">
              <button className="py-2 w-[80px] text-center bg-teal-700 text-white transition-all hover:bg-teal-500 rounded-[5px] font-medium">
                SignIn
              </button>
              <button className="py-2 w-[80px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center p-4">
        <div className="flex flex-col justify-center items-center gap-6 py-[170px]">
          <h2 className="text-5xl text-[#d8d4d4] font-bold">
            What you will design today?
          </h2>
          <span className="text-[#aaa7a7] text-2xl font-medium">
            Canva makes it easy to create and share professional designs
          </span>
          <button className="py-2 w-[200px] text-center bg-purple-700 text-white transition-all hover:bg-purple-500 rounded-[5px] font-medium">
            SignUp for Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
