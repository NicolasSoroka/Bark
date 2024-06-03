const TextBlock = () => {
  return (
    <div className="overflow-hidden flex flex-col md:flex-row justify-center items-center md:items-start p-10 gap-y-8 md:my-20 md:p-0 md:gap-x-8">
      <div className="-z-50 text-3xl md:text-[39px] font-semibold md:font-bold tracking-widest text-slate-500">
        <h2 className="relative -left-4">_Denim</h2>
        <h2 className="relative left-16">real</h2>
      </div>
      <div>
      
        {/* <h2 className="text-2xl font-bold md:font-extrabold md:text-[25px] text-slate-700 tracking-widest">
          Capricórnio Argentina
        </h2> */}
        <p className="text-xl font-semibold text-slate-400 w-[280px] md:w-[320px] mt-2 md:text-[19px] md:font-extrabold tracking-widest">
        Somos distribuidora líder en Argentina desde hace más de una década, especializada en tela denim y gabardina, representando de manera exclusiva a Capricornio Textil, prestigiosa empresa brasileña con más de 75 años de experiencia en la industria.
        </p>
      </div>
    
    </div>
  );
};

export default TextBlock;
