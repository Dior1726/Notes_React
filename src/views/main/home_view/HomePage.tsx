import { EllipsisVertical } from "lucide-react";

const notes = [
  {
    title: "Note 1",
    content: "This is the content of note 1.",
    type: "Work",
    created: "2023-01-29",
    author: "John Doe",
  },
  {
    title: "Note 2",
    content: "This is the content of note 2.",
    type: "Personal",
    created: "2024-10-10",
    author: "Anna Smith",
  },
  {
    title: "Note 3",
    content: "This is the content of note 3.",
    type: "Team",
    created: "2022-10-01",
    author: "Don Carleone",
  },
  {
    title: "Note 4",
    content: "This is the content of note 4.",
    type: "Personal",
    created: "2025-07-17",
    author: "God Father",
  },
];

const HomePage = () => {
  return (
    <div>
      <h3 className='text-xl font-semibold mb-4'>Weather Page</h3>
      <div className='grid grid-cols-3 gap-5'>
        {notes.map((note, index) => (
          <div key={index} className='bg-white rounded-2xl shadow-xs p-4'>
            <div className='flex justify-between items-center pb-2 border-b border-slate-200'>
              <div className='bg-amber-600 text-white rounded-4xl px-2 py-0.5 text-xs'>
                {note.type}
              </div>
              <div>
                <EllipsisVertical className='text-slate-600' size={"14px"} />
              </div>
            </div>
            <div className='text-slate-700 mb-1'>{note.title}</div>
            <div className='text-slate-500 text-sm mb-1'>{note.content}</div>
            <div className='flex justify-between items-center text-sm text-slate-600'>
              <div>{note.author}</div>
              <div>{note.created}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
