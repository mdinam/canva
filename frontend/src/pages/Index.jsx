import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

const Index = () => {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(state);

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#18191b] min-h-screen w-full">
      <div
        className={`w-screen ${
          show ? "visible opacity-100" : "invisible opacity-30"
        } transition-all duration-500 h-screen fixed bg-[#252627ad] flex justify-center items-center`}
      >
        <div className="w-[350px] m-auto px-6 py-4 rounded-b-md relative bg-[#323335]">
          <div
            onClick={() => setShow(false)}
            className="absolute right-4 top-4 text-xl cursor-pointer text-white"
          >
            <IoMdClose />
          </div>
          <h2 className="text-white pb-4 text-center text-xl">
            Login and Sign up in seconds{" "}
          </h2>
          <form>
            <div className="flex flex-col gap-3 mb-3 text-white">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col gap-3 mb-3 text-white">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="px-3 py-2 rounded-md border outline-none border-[#5c5c5e] focus:border-purple-500 bg-transparent"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div>
              <button className="px-3 py-2 rounded-md bg-purple-500 w-full outline-none hover:bg-purple-600 text-white">
                Signin
              </button>
            </div>
            <div className="flex py-4 justify-between items-center px-3">
              <div className="w-[45%] h-[1px] bg-slate-500"></div>
              <div className="w-[6%] text-center text-white flex pb-1 ">
                {" "}
                Or
              </div>
              <div className="w-[45%] h-[1px] bg-slate-500"></div>
            </div>
            <div>
              <button className="px-3 py-2 rounded-md bg-red-600 w-full outline-none mb-3 hover:bg-red-500 flex justify-center items-center gap-2 text-white">
                <span>
                  {" "}
                  <SiGmail />
                </span>
                <span>Login with gmail</span>
              </button>
            </div>
            <div>
              <button className="px-3 py-2 rounded-md bg-blue-700 w-full outline-none mb-3 hover:bg-blue-500 flex justify-center items-center gap-2 text-white">
                <span>
                  {" "}
                  <FaFacebook />
                </span>
                <span>Login with gmail</span>
              </button>
            </div>
          </form>
        </div>
      </div>

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
            <div onClick={() => setShow(true)} className="flex gap-4">
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
