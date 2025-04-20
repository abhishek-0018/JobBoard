import { useState, useEffect } from "react";
import { Motion } from "./Motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [coverImage, setCoverImage] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [updatedCoverImage, setUpdatedCoverImage] = useState(null);
  const [updatedAvatar, setUpdatedAvatar] = useState(null);
  const [user, setUser] = useState(null);


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedCoverImage(file);
    }
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdatedAvatar(file);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (!storedUser) {
      navigate("/user");
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      setCoverImage(
        parsedUser.coverImage ||
          "https://static.vecteezy.com/system/resources/thumbnails/032/483/467/small/hd-abstract-background-and-wallpaper-design-photo.jpg"
      );

      setAvatar(
        parsedUser.avatar ||
          "https://static.vecteezy.com/system/resources/thumbnails/016/058/540/small_2x/icon-person-design-and-line-art-icon-free-vector.jpg"
      );
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
      navigate("/user");
    }
  }, []);

  const updateCoverImage = async () => {
    if (!updatedCoverImage) {
      alert("Choose a cover file first");
      return;
    }
    const access = localStorage.getItem("accessToken");
    const endpoint = "/api/v1/users/changeCoverImage";
    const data = new FormData();
    data.append("coverImage", updatedCoverImage);
    try {
      const updatedProfile = await axios.put(
        `http://localhost:8000${endpoint}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setCoverImage(updatedProfile.data.data.coverImage);
      localStorage.removeItem("userData");
      localStorage.setItem(
        "userData",
        JSON.stringify(updatedProfile.data.data)
      );
    } catch (err) {
      console.error("Failed to update cover image:", err);
    }
  };

  const updateAvatar = async () => {
    if (!updatedAvatar) {
      alert("Choose a avatar file first");
      return;
    }
    const access = localStorage.getItem("accessToken");
    const endpoint = "/api/v1/users/changeAvatar";
    const data = new FormData();
    data.append("avatar", updatedAvatar);
    try {
      const updatedProfile = await axios.put(
        `http://localhost:8000${endpoint}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAvatar(updatedProfile.data.data.avatar);
      localStorage.removeItem("userData");
      localStorage.setItem(
        "userData",
        JSON.stringify(updatedProfile.data.data)
      );
    } catch (err) {
      console.error("Failed to update avatar image:", err);
    }
  };
  if (!user) {
    return <p className="text-center mt-20">Redirecting to login...</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-slate-800 to-violet-800 p-6">
      <Motion>
        <div className="w-full max-w-4xl bg-gradient-to-tr from-slate-900 to-violet-900 p-8 rounded-3xl shadow-2xl backdrop-blur-md space-y-8">
          {/* Cover Image */}
          <div className="relative w-[800px] h-64 overflow-hidden rounded-2xl shadow-md">
            <img
              src={coverImage}
              alt="Cover"
              className="object-cover w-full h-full"
            />
            <label className="absolute bottom-4 left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full cursor-pointer transition">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
            </label>
          </div>

          {/* Form & Button */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateCoverImage();
            }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Update Cover
            </button>
          </form>

          {/* Avatar + User Info */}
          <div className="flex flex-col items-center mt-6">
            <img
              src={avatar}
              alt="Avatar"
              className="w-40 h-40 rounded-full shadow-lg border-4 border-white/20"
            />
            <label className="absolute left-88 bottom-45 p-2 bg-black/30 hover:bg-black/50 rounded-b-full cursor-pointer transition">
              <input
                type="file"
                onChange={handleFileChange2}
                className="hidden"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-15 w-35 text-white rounded-b-3xl"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
            </label>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateAvatar();
            }}
            className="flex flex-col sm:flex-row items-center gap-4 "
          >
            <button
              type="submit"
              className="mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Update Avatar
            </button>
          </form>
          <h1 className="text-white text-2xl font-bold mt-4 capitalize">
              {user.name}
            </h1>
        </div>
      </Motion>
    </div>
  );
};
export default Profile;
