import CircleHelpLogo from "./CircleHelpLogo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Check, X } from "lucide-react";

const PricingCardFeature = ({ disabled=false, title, tooltip }) => {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-x-1">
        { disabled ? (
          <X color="#f00000" strokeWidth={3} size={12} className="relative top-[1px]"/>
        ) : (
          <Check color="#027a08" strokeWidth={5} size={10} />
        )}
        <p className={`${ disabled ? 'relative -left-[2px]' : ''}`}>{title}</p>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <CircleHelpLogo size={15} />
          </TooltipTrigger>
          <TooltipContent>
            <p>tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </li>
  );
};

export default PricingCardFeature;
