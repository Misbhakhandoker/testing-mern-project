import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const id = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhoneNumber(res.data.phoneNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleEditUser = () => {
    const data = {
      name,
      email,
      phoneNumber,
    };
    axios
      .put(`http://localhost:3000/${id}`, data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
    
    <div className=" p-10 w-full bg-pink-400 h-screen flex flex-col items-center justify-center">
    <h1 className="text-3xl text-white text-center">Edit User</h1>
      <div className="flex flex-col items-center justify-center p-5 bg-white md:w-[30%] w-[100%] gap-2 rounded-lg">
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
          onClick={handleEditUser}
        >
          Edit User
        </button>
      </div>
    </div>
    </>
  );
};

export default EditUser;
