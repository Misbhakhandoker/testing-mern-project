import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {loading ? (
        "hello"
      ) : (
        <div className="flex justify-around">
          {users.map((user) => (
            <div
              className="w-48 p-5 gap-2 flex flex-col rounded-xl justify-center items-center border-2 border-white text-[0.8rem]"
              key={user._id}
            >
              <div className="text-[2rem] text-yellow-400">{user.name}</div>
              <div className="text-purple-500 font-bold">{user.email}</div>
              <div>{user.phoneNumber}</div>
              <Link to={`/edit/${user._id}`}>
                {" "}
                <Button bgColor={"bg-green-500"} btnName={"edit"} />{" "}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
