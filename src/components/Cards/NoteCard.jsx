/* eslint-disable react/prop-types */
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="w-full h-full p-4 transition-all ease-in-out bg-white border rounded-md hover:shadow-lg">
      <div className="flex justify-between">
        <div>
          <h6 className="text-sm font-semibold">{title}</h6>
          <span className="text-xs text-slate-500">{date}</span>
        </div>

        <MdOutlinePushPin
          className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300"}`}
          onClick={onPinNote}
        />
      </div>

      <p className="mt-2 teext-xs text-slate-600">{content?.slice(0, 60)}</p>
      <div className="flex items-center justify-between mt-2 ">
        <div className="text-xs text-slate-500 ">{tags}</div>
        <div className="flex items-center gap-2">
          <MdCreate
            className="icon-btn hover:text-green-600"
            onClick={onEdit}
          />
          <MdDelete
            className="icon-btn hover:text-red-600"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
