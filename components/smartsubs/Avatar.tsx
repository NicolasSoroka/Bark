const Avatar = ({ imgUrl }) => {
  return (
    <div className="flex relative">
      <img src={imgUrl} alt="profile_avatar" className="flex w-10 h-10 rounded-full"/>
      <span className="absolute top-0  border rounded-full w-10 h-10 border-sms_white/50"/>
    </div>
  );
};

export default Avatar;