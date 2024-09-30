import { MdAdd } from "react-icons/md";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import AddEditNotes from "./AddEditNotes";
const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title={`React session`}
            date={"03rd April 2024"}
            content={` Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April Meeting on 7th April `}
            tags={`#Meeting`}
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="absolute flex items-center justify-center w-16 h-16 rounded-2xl bg-primary hover:bg-blue-600 right-10 bottom-10"
        onClick={() => {}}
      >
        <MdAdd className=" text-[32px] text-white" />
      </button>
      <AddEditNotes />
    </>
  );
};

export default Home;
