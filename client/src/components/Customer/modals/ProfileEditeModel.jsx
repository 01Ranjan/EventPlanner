import React, { useEffect, useState } from "react";
import { IoIosCloseCircle, IoIosSave } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import api from "../../../config/api";
import { toast } from "react-hot-toast";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal",
];

const ProfileEditModal = ({ isOpen, onClose, oldData }) => {
  const [userdata, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    photo: "",
    gender: "",
    occupation: "",
    address: "",
    city: "",
    state: "",
    district: "",
    representing: "",
  });

  const [preview, setPreview] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setPicture(e.target.files[0]);
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullName", userdata.fullName);
    formData.append("picture", picture);
    formData.append("phone", userdata.phone);
    formData.append("gender", userdata.gender);
    formData.append("occupation", userdata.occupation);
    formData.append("address", userdata.address);
    formData.append("city", userdata.city);
    formData.append("state", userdata.state);
    formData.append("district", userdata.district);
    formData.append("representing", userdata.representing);

    try {
      const res = await api.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(res.data.message);
      sessionStorage.setItem("EventUser", JSON.stringify(res.data.data));
      onClose();
    } catch (error) {
      toast.error(
        `Error: ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (oldData) {
      setUserData(oldData);
    }
  }, [isOpen, oldData]);

  if (!isOpen) return null;

  return (
     <>
     <div className="fixed inset-0 bg-black/70 ">
      <div className=" flex justify-center items-center px-4 mt-20">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-semibold">Edit Profile</h2>
          <button onClick={onClose}>
            <IoIosCloseCircle className="text-3xl text-red-500 hover:text-red-600 transition" />
          </button>
        </div>

        <form className="p-6 space-y-6" onSubmit={handleEditProfile}>
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={preview || userdata.photo}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover shadow-md border"
              />
              <label
                htmlFor="imageUpload"
                className="absolute bottom-0 right-0 p-2 bg-rose-500 text-white rounded-full cursor-pointer hover:bg-rose-600 transition"
              >
                <FaCamera />
              </label>
              <input
                type="file"
                id="imageUpload"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="text"
                name="email"
                value={userdata.email}
                disabled
                className="w-full p-2 border rounded-lg bg-gray-100"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={userdata.fullName}
                onChange={handelChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={userdata.phone}
                onChange={handelChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Gender</label>
              <select
                name="gender"
                value={userdata.gender}
                onChange={handelChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="N/A">N/A</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Occupation</label>
              <input
                type="text"
                name="occupation"
                value={userdata.occupation}
                onChange={handelChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={userdata.address}
                onChange={handelChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">City</label>
              <input
                type="text"
                name="city"
                value={userdata.city}
                onChange={handelChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">District</label>
              <input
                type="text"
                name="district"
                value={userdata.district}
                onChange={handelChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">State</label>
              <select
                name="state"
                value={userdata.state}
                onChange={handelChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="N/A">N/A</option>
                {indianStates.map((state, i) => (
                  <option key={i} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Representing</label>
              <select
                name="representing"
                value={userdata.representing}
                onChange={handelChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="N/A">N/A</option>
                <option value="Bride">Bride Side</option>
                <option value="Groom">Groom Side</option>
                <option value="both">Common</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg transition"
            >
              <IoIosSave />
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
     </div>
     </>
  );
};

export default ProfileEditModal;
