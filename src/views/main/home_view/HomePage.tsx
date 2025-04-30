import { getPosts } from "./api/get_posts";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "./components/post_card/PostCard";
import { decrement, increment } from "@/store/slices/counter_slice";

const HomePage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const { data, isLoading } = useQuery({
    queryKey: ["get_posts"],
    queryFn: () => getPosts(),
  });

  return (
    <>
      <h3 className='text-xl font-semibold mb-4'>Posts page</h3>
      <h3>Counter {count}</h3>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
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
