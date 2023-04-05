import { useGetAllPostsQuery, useGetPostByIdQuery } from "./ApiSlice";

export const Posts = () => {
  const {
    data: allPostsData,
    error,
    isError,
    isLoading,
  } = useGetAllPostsQuery();
  const { data: singlePostsData } = useGetPostByIdQuery("5");

  console.log(allPostsData);
  console.log(singlePostsData);

  if (isLoading) {
    console.log("Loading");
    return <h1>Loading...</h1>;
  } else if (!isLoading) {
    console.log("Fulfilled");
  }

  return (
    <>
      <div>
        {allPostsData.map((curr) => {
          return (
            <div key={curr.id}>
              <p>{curr.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
