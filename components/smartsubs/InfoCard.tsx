import CreditCards from "./icons/CreditCards";

const variants = {
  blue: 'from-indigo-400 to-cyan-400',
  pink: 'from-pink-500 to-yellow-500',
  red: 'from-rose-700 to-pink-600',
  yellow: 'from-emerald-500 to-yellow-400',
  green: 'from-green-800 to-green-400'
}

const types = {
  sm: 'w-[260px]',
  md: 'w-[400px]',
  lg: 'w-[600px]',
  xl: 'w-[800px]',
  full: 'w-full'
}

const InfoCard = ({ variant = 'blue', type='square', flat=false, image=true}) => {

  const classnames = `${variants[variant]} ${types[type]}`;

  return (
    <div className={`flex items-center justify-between px-8 ${flat ? 'h-[170px]' : 'h-[200px]'} ${classnames} rounded-xl bg-gradient-to-r shadow-sm shadow-sms_lightgray `}>
      <div className="flex flex-col gap-y-3">
        <p>Current mont billing</p>
        <h1 className="text-5xl font-semibold">$2345.53</h1>
        <p className="max-w-[200px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
      {image && <CreditCards classnames={'w-[200px] h-[200px] fill-sms_white opacity-60'}/> }
    </div>
  );
};

export default InfoCard;
