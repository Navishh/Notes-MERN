// import { getInitials } from "../../utils/helper";

// // eslint-disable-next-line react/prop-types
// const ProfileInfo = ({ userInfo, onLogout }) => {
//   return (
//     <div className="flex items-center gap-3 ">
//       <div className="flex items-center justify-center w-12 h-12 font-medium rounded-full text-slate-950 bg-slate-100">
//         {getInitials(userInfo?.fullName)}
//       </div>
//       <div>
//         <p className="text-sm font-medium ">{userInfo.fullName}</p>
//         <button className="text-sm underline text-slate-700" onClick={onLogout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileInfo;
import PropTypes from "prop-types";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ userInfo, onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 font-medium rounded-full text-slate-950 bg-slate-100">
        {getInitials(userInfo?.fullName || "NA")}
      </div>
      <div>
        <p className="text-sm font-medium ">{userInfo?.fullName || "Guest"}</p>
        <button className="text-sm underline text-slate-700" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

ProfileInfo.propTypes = {
  userInfo: PropTypes.shape({
    fullName: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

export default ProfileInfo;
