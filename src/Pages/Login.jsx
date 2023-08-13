import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && email) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="w-[450px] p-9 h-[500px] bg-slate-300 border shadow-2xl rounded mx-auto">
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 sm:gap-8 justify-between">
        <label>First Name:</label>
        <input
          className="p-2 outline-none hover:bg-slate-200 hover:text-black transition-all"
          placeholder="Enter Your First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label>Last Name:</label>
        <input
          className="p-2 outline-none hover:bg-slate-200 hover:text-black  transition-all"
          placeholder="Enter Your Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <label>Your Email:</label>
        <input
          className="p-2 outline-none hover:bg-slate-200 hover:text-black  transition-all"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          required
        />
      </div>

      <div className="flex justify-end my-8 sm:my-10">
        <button
          className="hover:bg-slate-400 transition-all bg-slate-500 px-4 py-2 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>

    {isSubmitted && (
      <p className="text-slate-600 mt-2">
        You are logged in
      </p>
    )}

    <button className="flex ml-[240px] rounded border-2 px-3 py-2 mt-5 bg-slate-300 my-8 sm:my-10">
      <Link to="/" className="hover:text-blue-600 transition-all">
        Back to Home
      </Link>
    </button>
  </div>
</div>

    </>
  );
};

export default Login;
