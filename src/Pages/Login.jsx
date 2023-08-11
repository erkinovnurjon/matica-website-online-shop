import { useState } from "react";

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
      <div className="container mx-auto px-8 p-4">
        <div className="w-[450px] p-9 h-[500px] bg-slate-300 border shadow-2xl rounded mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-8 justify-between">
              <label>First Name:</label>
              <input
                className="p-2 outline-none hover:bg-slate-400 hover:text-white hover:placeholder:text-white transition-all"
                placeholder="Enter Your First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex gap-8 justify-between my-10">
              <label>Last Name:</label>
              <input
                className="p-2 outline-none hover:bg-slate-400 hover:text-white hover:placeholder:text-white transition-all"
                placeholder="Enter Your Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <label>Your Email</label>
              <input
                className="p-2 outline-none hover:bg-slate-400 hover:text-white hover:placeholder:text-white transition-all"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="flex justify-end my-10">
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
              You are logined
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
