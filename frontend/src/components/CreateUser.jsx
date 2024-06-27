import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  //   const handleCreateUser = () => {
  //     const data = {
  //       name,
  //       email,
  //       phoneNumber,
  //     };
  //     axios
  //     .post("http://localhost:3000/", data)
  //     .then(() => {
  //       navigate("/");
  //     })
  //     .catch((err) => {
  //       console.error("Error creating user:", err.message || err);
  //     });
  // };

  const handleSaveBook = (e) => {
    const data = {
      name,
      email,
      phoneNumber,
    };

    //     const response = await axios({
    //         method: "POST",
    //         baseURL: "http://localhost:3000/users",
    //         url:"requisitions"
    //     })
    // console.log(response);
    e.preventDefault();
    axios
      .post("http://localhost:3000/books", data)
      .then(() => {
        navigate("/books");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className=" p-10 w-full bg-pink-400 h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white text-center my-5">Create User</h1>
        <div className="flex flex-col p-5 bg-white md:w-[30%] w-[100%] gap-2 rounded-lg">
          <h4 className="text-zinc-400">Name</h4>
          <input
            type="text"
            className="w-full rounded-sm border-2 bg-purple-500 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h4 className="text-zinc-400">Email</h4>
          <input
            type="email"
            className="w-full rounded-sm border-2 bg-purple-500 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h4 className="text-zinc-400">Number</h4>
          <input
            type="number"
            className="w-full rounded-sm border-2 bg-purple-500 text-white"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button
            className="px-3 py-1 bg-purple-500 rounded-lg text-zinc-200 font-bold"
            onClick={handleSaveBook}
          >
            Create User
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
