/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import TagInput from "../../components/Input/TagInput";
import axiosInstance from "../../utils/axiosInstance";

const AddEditNotes = ({
  noteData,
  type,
  getAllNotes,
  onClose,
  showToastMessage,
}) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags || "");

  const [error, setError] = useState(null);

  const handleAddNote = () => {
    // Add new note
    const addNewNote = async () => {
      try {
        const response = await axiosInstance.post("/add-note", {
          title,
          content,
          tags,
        });

        if (response.data && response.data.note) {
          showToastMessage("Note Added Successfully");
          getAllNotes();
          onClose();
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        }
      }
    };

    //  Edit the note
    const editNote = async () => {
      const noteId = noteData._id;
      try {
        const response = await axiosInstance.put("/edit-note/" + noteId, {
          title,
          content,
          tags,
        });

        if (response.data && response.data.note) {
          showToastMessage("Note Updated Successfully");
          getAllNotes();
          onClose();
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          setError(error.response.data.message);
        }
      }
    };

    if (!title) {
      setError("Title is required");
      return;
    }

    if (!content) {
      setError("Content is required");
      return;
    }

    setError("");

    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute flex items-center justify-center w-10 h-10 rounded-full -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl outline-none text-slate-950"
          placeholder="Go to the gym"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="p-2 text-sm rounded outline-none text-slate-950 bg-slate-50"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="mt-3">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="pt-4 text-xs text-red-500">{error}</p>}

      <button
        className="p-3 mt-5 font-medium btn-primary"
        onClick={handleAddNote}
      >
        {type === "edit" ? "UPDATE" : "ADD "}
      </button>
    </div>
  );
};
AddEditNotes.propTypes = {
  noteData: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  }),
  type: PropTypes.string.isRequired,
  getAllNotes: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddEditNotes;
