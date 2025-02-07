const Layout = () => {
  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div className="bg-[#212223] shadow-md fixed left-0 top-0 w-full z-20">
        <div className="w-[93%] m-auto py-3">
          <div className="flex justify-between items-center">
            <div className="w-[80px] h-[48px]">
              <img
                className="w-full h-full"
                src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"
                alt=""
              />
            </div>
            <div className="flex gap-4 justify-center items-center relative">
              <button className="text-white overflow-hidden text-center font-medium bg-purple-700 py-2 px-3 rounded-md ">
                Create A Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
