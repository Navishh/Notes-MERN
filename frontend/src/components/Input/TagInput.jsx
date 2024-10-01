/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      {tags?.length > 0 && (
        <div className="flex items-center gap-2 mt-2 wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex gap-2 px-3 py-1 text-sm rounded bg-blue-100/60 item-center text-slate-900"
            >
              # {tag}
              <button onClick={() => handleRemoveTag(tag)}>
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 mt-3">
        <input
          type="text "
          value={inputValue}
          className="px-3 py-2 text-sm border rounded outline-none bg-tranparent"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></input>
        <button
          className="flex items-center justify-center w-8 h-8 border border-blue-700 rounded hover:bg-blue-700 "
          onClick={() => {
            addNewTag();
          }}
        >
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
