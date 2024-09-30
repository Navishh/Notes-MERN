import { getInitials } from "../../utils/helper";

// eslint-disable-next-line react/prop-types
const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3 ">
      <div className="flex items-center justify-center w-12 h-12 font-medium rounded-full text-slate-950 bg-slate-100">
        {getInitials("Navishka Malalage")}
      </div>
      <div>
        <p className="text-sm font-medium "></p>
        <button className="text-sm underline text-slate-700" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
