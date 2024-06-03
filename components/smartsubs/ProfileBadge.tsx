import profileImg from "../assets/profile.jpg";

const ProfileBadge = () => {
  return (
    <div className="flex flex-col justify-center p-4 rounded-lg bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-sm shadow-sms_lightgray">
      <div className="flex items-center gap-3">
        <div className="flex w-16">
          <img src={profileImg} alt="profile_img" className="rounded-full" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">{`Nombre Apellido`}</h2>
          <p className="text-base">sorokanicolas@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileBadge