import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PostCard = ({ post }: any) => {
  return (
    <div className='bg-white rounded-2xl shadow-xs p-4'>
      <div className='flex justify-between items-center pb-2 border-b border-slate-100'>
        <div className='text-xs flex gap-1'>
          {post.tags.map((item: string) => (
            <div
              key={item}
              className='bg-slate-100 text-slate-600 rounded-full px-2 py-1 capitalize'
            >
              {item}
            </div>
          ))}
        </div>
        <Button variant={"ghost"}>
          <HeartIcon className='text-slate-600' size={"14px"} />
        </Button>
      </div>
      <div className='text-slate-700 my-2 font-semibold'>{post.title}</div>
      <div className='text-slate-500 text-sm mb-2'>
        {post.body.slice(0, 50)}...
      </div>
      <div className='flex justify-between items-center text-sm text-slate-600'></div>
      <div className='border-t border-slate-100 pt-2 flex justify-end'>
        <Dialog>
          <DialogTrigger>
            <Button>Read more...</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{post.title}</DialogTitle>
              <DialogDescription>{post.body}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PostCard;
