import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar, FaTrophy } from "react-icons/fa";
import Spinner from "../components/Spinner.tsx";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({});

  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [points, setPoints] = useState(0);
  const [rank, setRank] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  const [password, setPassword] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get(`http://localhost:8000/user/${id}`)
        .then((res) => {
          const data = res.data;

          setUserData(data);

          setEmail(data.email);
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setRank(data.rank);
          setPoints(data.points);
          setAvatarUrl(data.avatarUrl);
        })
        .catch((error) => {
          console.log("Error fetching user", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchUser();
  }, [id]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newUser = userData;

    if (email !== "") {
      newUser = { ...newUser, email };
    }

    if (password !== "") {
      newUser = { ...newUser, password };
    }

    console.log(newUser);
  };

  return (
    <div className="container m-auto flex bg-gray-200 px-8 py-6">
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <div className="mr-12">
            <img
              src={avatarUrl}
              alt="User Avatar"
              className="rounded-full border-4 border-gray-500 w-52 h-52 mb-4"
            />
            <h2 className="text-3xl font-bold">{`${firstName} ${lastName}`}</h2>

            <div>
              <FaTrophy className="text-lg inline mr-1 text-yellow-400" />
              {rank}
            </div>
            <div>
              <FaStar className="text-lg inline mr-1 text-yellow-400" />
              {points}
            </div>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <h2 className="text-3xl font-semibold mb-4">Edit your data</h2>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="bg-white rounded-lg p-2 w-full"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="bg-white rounded-lg p-2 w-full"
                  placeholder="********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-custom-purple-dark hover:bg-indigo-600 py-2 px-4 text-white rounded-lg"
              >
                Update profile
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
