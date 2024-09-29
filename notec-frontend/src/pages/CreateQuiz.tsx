import { useState, ChangeEvent, FormEvent } from "react";
import axiosInstance from "../axiosConfig.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateQuiz = () => {
  const [file, setFile] = useState<File>(null);
  const [showShowButton, setShowShowButton] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files
      ? (event.target.files as File[])[0]
      : null;
    setFile(selectedFile);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (file) {
      setShowShowButton(true);
      const formData = new FormData();
      formData.append("file", file);

      await axiosInstance
        .post("/api/files/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          toast.success("Upload successful!");
          navigate("/home");
        })
        .catch((err) => {
          console.log("Something went wrong: ", err);
          toast.error("Something went wrong!");
        });

      setFile(null);
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container m-auto max-w-4xl flex">
        <div className="float w-1/4 bg-[#72369D] rounded-l-lg"></div>
        <div className="bg-gray-200 px-8 py-32 w-1/2 rounded-r-lg">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-4">Quiz create</h2>
            <div className="mb-4">
              <label
                htmlFor="file"
                className="block text-gray-700 font-bold mb-2"
              >
                File
              </label>
              <input
                id="file"
                name="file"
                type="file"
                className="bg-white rounded-lg p-2 w-full"
                required
                onChange={handleFileChange}
              />
            </div>
            <button
              type="submit"
              className="bg-[#72369D] hover:bg-indigo-600 py-2 px-4 text-white rounded-lg"
            >
              Upload
            </button>

            {/*<button*/}
            {/*  className={*/}
            {/*    "bg-[#72369D] hover:bg-indigo-600 py-2 px-4 text-white rounded-lg mt-5"*/}
            {/*  }*/}
            {/*  style={{ opacity: showShowButton ? 1 : 0 }}*/}
            {/*  disabled={!showShowButton}*/}
            {/*>*/}
            {/*  Show quiz*/}
            {/*</button>*/}
          </form>
        </div>
        <div className="float w-1/4 bg-[#72369D] rounded-l-lg"></div>
      </div>
    </div>
  );
};

export default CreateQuiz;
