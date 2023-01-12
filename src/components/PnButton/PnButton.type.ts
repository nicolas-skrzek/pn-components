import type { SizeElement } from '@/types/size.type'
import type { TagetLink } from '@/types/element.type'
import type { Color } from "../../types/color.type";

export interface ButtonProps {
  disabled?: boolean
  size?: SizeElement
  href?: string | undefined
  taget?: TagetLink | undefined
  status?: Color | undefined
}
