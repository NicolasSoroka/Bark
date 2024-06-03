import { KeyRound, Mail, User, X } from "lucide-react";
import robotsImg from "../assets/robots.png";
import googleImg from "../assets/google_logo.webp";
import { useState } from "react";
import { motion } from "framer-motion";

const LoginWizard = ({ onClose }) => {
  const [isUsingEmail, setIsUsingEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const target = e.target;
    if (target.name === "email") {
      setEmail(e.target.value);
      console.log(email);
    } else {
      setPassword(e.target.value);
      console.log(password);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#1c2730]/50 text-sms_mediumgray backdrop-blur-sm transition ease-in-out"
    >
      <div className="flex h-[550px] w-1/2 max-w-[770px] gap-x-2">
        <div className="flex flex-1 overflow-hidden rounded-xl bg-white">
          <div className="flex w-1/2 flex-col items-center justify-between p-8">
            <div className="flex flex-col gap-y-6">
              <h1 className="text-2xl font-semibold">
                Inicia sesión o regístrate en segundos
              </h1>
              <h2 className="text-gray-700">
                Para acceder a SmartSubs gratis, usa tu correo u otro servicio.
              </h2>
              <ul className="flex  flex-col gap-y-4 text-sms_white">
                <li className="relative flex cursor-pointer items-center justify-center rounded-md bg-sms_gray p-2 transition-all duration-300 hover:bg-sms_mediumgray">
                  <img
                    src={googleImg}
                    alt="google_logo"
                    className="absolute left-2 w-8"
                  />
                  Usar google
                </li>
                <li
                  className={`relative flex cursor-pointer items-center justify-center rounded-md bg-sms_gray p-2 transition-all duration-300 hover:bg-sms_mediumgray`}
                  onClick={() => setIsUsingEmail((prev) => !prev)}
                >
                  <Mail className="absolute left-3" color="gray" />
                  <p>Usar mi correo</p>
                </li>

                <li
                  className={`relative cursor-pointer items-center justify-center rounded-md bg-sms_gray p-2 transition-all duration-300 ${isUsingEmail ? "flex opacity-100" : "hidden opacity-0"}`}
                >
                  <User className="absolute left-3" color="gray" />
                  <input
                    placeholder="correo@ejemplo.com"
                    className="bg-transparent text-center outline-none"
                    name="email"
                    value={email}
                    onChange={(e) => handleInputChange(e)}
                  />
                </li>

                <li
                  className={`relative cursor-pointer items-center justify-center rounded-md bg-sms_gray p-2 transition-all duration-300 ${isUsingEmail ? "flex opacity-100" : "hidden opacity-0"}`}
                >
                  <KeyRound className="absolute left-3" color="gray" />
                  <input
                    placeholder="Password"
                    className="bg-transparent text-center outline-none"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => handleInputChange(e)}
                  />
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-y-4 text-center">
              <p className="text-xs">
                Al continuar, aceptas las Condiciones de uso de SmartSubs.
                Consulta nuestra Política de privacidad
              </p>
              <span>Logo_SMS</span>
            </div>
          </div>
          <div className="flex w-1/2 bg-contain">
            <img src={robotsImg} alt="robots_image" />
          </div>
        </div>
        <div
          onClick={() => onClose((prev) => !prev)}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-600 text-white transition-all duration-300 hover:bg-gray-700"
        >
          <X size={22} />
        </div>
      </div>
    </motion.div>
  );
};

export default LoginWizard;
