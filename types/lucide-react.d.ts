declare module 'lucide-react' {
  import { FC, SVGProps } from 'react'
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number
  }
  export type Icon = FC<IconProps>
  export const Plus: Icon
  export const Sparkles: Icon
  export const Heart: Icon
  export const HeartPulse: Icon
  export const HeartPulseFill: Icon
  export const HeartFill: Icon
  export const Component: Icon
  export const ImageUp: Icon
  export const RefreshCw: Icon
  export const Pause: Icon
  export const Play: Icon
  export const Menu: Icon
  export const Image: Icon
  export const X: Icon
  export const Music: Icon
  export const Zap: Icon
  export const MessageCircle: Icon
  export const TrendingUp: Icon
  export const Bot: Icon
  export const ChevronDown: Icon
  export const ChevronUp: Icon
  export const ExternalLink: Icon
  export const Instagram: Icon
  export const Share2: Icon
  export const Twitter: Icon
  // Add other icons you're using from lucide-react here
}
