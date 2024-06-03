import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ToggleSwitch from "./ToggleSwitch";

const ModalModifyPayment = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-[#1c2730]/50 text-sms_mediumgray backdrop-blur-sm transition ease-in-out"
    >
      <div className="flex h-[200px] w-[400px] rounded-xl bg-slate-700">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-between p-4 w-full">
          <div className="flex flex-col w-full h-full relative">
            <label htmlFor="">Cuenta</label>
            <input className="flex w-[150px] border-2 border-red-600"{...register("account")} />
            <label htmlFor="">Monto</label>
            <input className="flex w-[150px] border-2 border-red-600"{...register("price")} />
            <ToggleSwitch classnames={'absolute top-0 right-0'}/>
          </div>

          <div className="flex gap-x-2 w-full items-center justify-end">
            <button type="submit" className="flex items-center justify-center w-20 h-6 font-semibold bg-sms_green text-white border-red-600 rounded-md shadow-sm shadow-sms_mediumgray active:scale-90 transition-all">Save</button>
            <button 
            onClick={()=> onClose()}
            className="flex items-center justify-center w-20 h-6 font-semibold bg-sms_red text-white border-red-600 rounded-md shadow-sm shadow-sms_mediumgray active:scale-90 transition-all">Cancel</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ModalModifyPayment;
