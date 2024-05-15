import PricingCardFeature from './PricingCardFeature'
import { Link } from 'react-router-dom'

const PricingCardList = () => {
  return (
    <ul className="flex flex-col md:flex-row w-full gap-y-4 gap-x-8 justify-center items-center md:pt-10">
    <li className="flex flex-col items-center justify-center w-[300px] h-[430px] rounded-md border border-white bg-slate-100 gap-y-1 py-4">
      <h2 className="font-bold text-2xl text-dark-grey2">Free</h2>
      <h3 className="text-xs font-medium text-slate-500">
        All features available
      </h3>

      <div className="flex flex-col items-center gap-y-4 mt-1">
        <div className="flex items-end text-dark-grey2">
          <span className="font-medium">$</span>
          <h1 className="font-bold text-4xl">0</h1>
          <span className="">/mo</span>
        </div>
      </div>
      <span className="flex w-[230px] border-t-2 border-slate-300 mt-4" />

      <div className="flex flex-col w-[230px] gap-y-1 mt-2">
        <h2 className="font-bold text-sm text-dark-grey2">Top Features</h2>
        <ul className="flex flex-col text-sm gap-y-1">
          <PricingCardFeature
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
          <PricingCardFeature
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
          <PricingCardFeature
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
          <PricingCardFeature
            disabled
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
          <PricingCardFeature
            disabled
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
        </ul>
      </div>
    </li>
    <li className="flex flex-col items-center w-[300px] h-[430px] rounded-md border border-white bg-slate-100 gap-y-1 py-4">
      <h2 className="font-bold text-2xl text-dark-grey2">Premium</h2>
      <h3 className="text-xs font-medium text-slate-500">
        All features without limits
      </h3>

      <div className="flex flex-col items-center gap-y-4 mt-1">
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

        <Link
          to={AppPaths.PROFILE}
          className="flex p-2 w-[200px] rounded-lg bg-yellow justify-center font-bold transition-all hover:scale-105 active:scale-95"
        >
          Go Premium
        </Link>
        <p className="text-xs font-medium text-slate-500">
          Special offer $30 / year
        </p>
      </div>
      <span className="flex w-[230px] border-t-2 border-slate-300" />

      <div className="flex flex-col w-[230px] gap-y-1 mt-2">
        <h2 className="font-bold text-sm text-dark-grey2">
          All free tier features plus
        </h2>
        <ul className="flex flex-col text-sm gap-y-1">
          <PricingCardFeature
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
          <PricingCardFeature
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
          <PricingCardFeature
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
          <PricingCardFeature
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
          <PricingCardFeature
            title="titulo de la feature"
            tootlip="soy el tooltip"
          />
        </ul>
      </div>
    </li>
  </ul>
  )
}

export default PricingCardList