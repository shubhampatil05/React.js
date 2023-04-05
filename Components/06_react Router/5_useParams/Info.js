import { useParams } from "react-router-dom";

const Info = () => {
  const Params = useParams();
  const { name } = Params;

  return (
    <>
      <h1>This is {name} Page </h1>
    </>
  );
};

export default Info;
