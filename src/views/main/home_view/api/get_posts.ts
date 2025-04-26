import PostService from "@/services/post.service";

export const getPosts = async () => {
  try {
    const { data } = await PostService.get();
    return data;
  } catch (error) {
    console.error(error);
  }
};
