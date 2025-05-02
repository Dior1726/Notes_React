import { getPosts } from "./api/get_posts";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./components/post_card/PostCard";

const HomePage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get_posts"],
    queryFn: () => getPosts(),
  });

  return (
    <>
      <h3 className='text-xl font-semibold mb-4'>Posts page</h3>
      {isLoading && (
        <div className='flex justify-center items-center'>Loading...</div>
      )}
      <div className='grid grid-cols-3 gap-5'>
        {data &&
          data.posts.map((post: any, index: number) => (
            <PostCard post={post} key={index} />
          ))}
      </div>
    </>
  );
};

export default HomePage;
