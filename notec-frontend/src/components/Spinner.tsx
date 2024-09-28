import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }: { loading: boolean }) => {
  return (
    <ClipLoader
      color="#72369D"
      cssOverride={override}
      loading={loading}
      size={100}
    />
  );
};

export default Spinner;
