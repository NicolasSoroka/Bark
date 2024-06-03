import React, { FC } from "react";

type DividerProps = {
  section: string;
  number: string;
  title: string;
  description: string;
  from?: string;
  via?: string;
  to?: string;
};

const Divider: FC<DividerProps> = ({
  section,
  number,
  title,
  description,
  from = "from-blue-600",
  via = "via-blue-400",
  to = "to-teal-300",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <span
        className={`h-[80px] w-[1px] bg-gradient-to-b from-transparent ${via} ${to}`}
      />
      <div className="flex flex-col items-center justify-center">
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r ${from} ${via} ${to} font-extrabold text-black`}
        >
          {number}
        </span>
        <h3
          className={`mt-5 bg-gradient-to-r text-3xl font-extrabold ${from} ${to} bg-clip-text text-transparent`}
        >
          {section}
        </h3>
      </div>
      <h4 className="my-4 max-w-xs text-4xl font-bold dark:text-slate-200">
        {title}
      </h4>
      <p className="max-w-[300px] text-lg font-light leading-relaxed dark:text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default Divider;
