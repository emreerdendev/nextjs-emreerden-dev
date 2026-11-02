import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Props = {
  text: string
}

/** Single-line text that truncates with an ellipsis and reveals the full
 * value in a tooltip on hover. */
const TruncatedTooltip = ({ text }: Props) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="overflow-hidden overflow-ellipsis whitespace-nowrap">
          {text}
        </TooltipTrigger>
        <TooltipContent>{text}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default TruncatedTooltip
