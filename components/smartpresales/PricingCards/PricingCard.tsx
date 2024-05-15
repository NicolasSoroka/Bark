const PricingCard = () => {
  return (
    <li className="flex flex-col items-center w-[300px] h-[400px] rounded-md border border-white bg-slate-100 gap-y-2 py-4">
          <h2 className="font-bold text-xl text-dark-grey2">Free</h2>
          <h3 className="text-xs font-medium text-slate-500">
            All features available
          </h3>

          <div className="flex gap-x-2">
            <h3 className="line-through">$4.99</h3>
            <h3 className="flex items-center rounded-full bg-yellow px-2 text-sm font-bold">
              SAVE 40%
            </h3>
          </div>

          <div className="flex items-end text-dark-grey2">
            <span className="font-medium">$</span>
            <h1 className="font-bold text-4xl">2.99</h1>
            <span className="">/mo</span>
          </div>

          <button className="flex p-2 w-[200px] rounded-lg bg-yellow justify-center font-bold text-">
            Go Premium
          </button>
          <p className="text-xs font-medium text-slate-500">
            Special offer: $30 / 12 mo
          </p>

          <span className="flex w-[200px] border-t-2 border-slate-300 " />

          <div className="flex flex-col w-[200px]">
            <h2 className="font-bold text-sm text-dark-grey2">Top Features</h2>
            <ul className="text-sm">
              
              
            </ul>
          </div>
        </li>
  )
}

export default PricingCard