import { DollarSign, Settings, Bitcoin } from "lucide-react";
import ModalModifyPayment from "./ModalModifyPayment";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const variants = {
  mercadopago: {
    classnames: "from-blue-400 to-cyan-700",
    image: <DollarSign size={100} />,
    title: "Mercado Pago",
    account: "Alias",
    amount: "5000",
  },
  crypto: {
    classnames: "from-pink-500 to-yellow-500",
    image: <Bitcoin size={100} />,
    title: "Crypto",
    account: "Wallet",
    amount: "5",
  },
};

const PaymentCard = ({ format }) => {
  const classnames = variants[format].classnames;
  const ImageComponent = variants[format].image;
  const [showModifyModal, setShowModifyModal] = useState(false);

  return (
    <>
      <AnimatePresence>
        {showModifyModal && <ModalModifyPayment onClose={setShowModifyModal} />}
      </AnimatePresence>
      <div className="flex overflow-hidden">
        <div
          className={`borderjustify-between relative flex h-[170px] w-[350px] rounded-xl bg-gradient-to-r p-4 shadow-sm shadow-sms_lightgray ${classnames}`}
        >
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-bold">{variants[format].title}</p>
            <div className="flex flex-col">
              <p className="text-sm">{variants[format].account}</p>
              <p className="text-xl font-bold tracking-wider">
                Sarasa.primero.segundo
              </p>
            </div>
            <p>
              <span className="text-xl font-bold">
                $ {variants[format].amount}
              </span>{" "}
              / mo
            </p>

            <div
              onClick={() => setShowModifyModal((prev) => !prev)}
              className={`absolute bottom-3 right-3 z-10 flex w-fit items-center gap-x-6 rounded-md border bg-white/20 p-1 text-sms_white shadow-md transition-all hover:bg-white/50 hover:text-sms_mediumgray active:scale-75`}
            >
              <Settings className="cursor-pointer " size={30} />
            </div>
          </div>

          <span className="absolute bottom-6 right-6 rotate-[15deg] scale-[230%] opacity-30">
            {ImageComponent}
          </span>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
