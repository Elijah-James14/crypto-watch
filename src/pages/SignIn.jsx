import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const SignIn = () => {
  const { signIn } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogIn(e) {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="w-full max-w-[400px] flex flex-col mx-auto p-5 min-h-[400px] mt-5 dark:bg-slate-800 dark:text-gray-300 shadow-xl">
      <h1 className="font-bold text-3xl">Sign In</h1>
      {<p className="font-bold text-red-600">{error}</p>}
      <form onSubmit={handleLogIn}>
        <div className="pt-7">
          <label className="font-bold mb-3">Email</label>
          <div className="relative w-full my-2">
            <input
              type="email"
              className="w-full bg-slate-600 shadow-xl rounded-3xl py-2 px-4"
              onChange={(e) => setEmail(e.target.value)}
            />
            <AiOutlineMail size={15} className="absolute top-3 right-3" />
          </div>
        </div>

        <div className="">
          <label className="font-bold">Password</label>
          <div className="relative w-full my-2">
            <input
              type="password"
              className="w-full bg-slate-600 shadow-xl rounded-3xl py-2 px-4"
              onChange={(e) => setPassword(e.target.value)}
            />
            <AiFillLock size={15} className="absolute top-3 right-3" />
          </div>
        </div>

        <button className="bg-cyan-600 w-full rounded-3xl py-2 px-4 shadow-xl my-3">
          Sign In
        </button>
      </form>

      <p>
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-cyan-600">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
