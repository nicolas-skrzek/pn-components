import type { SizeElement } from '@/types/size.type'
import type { TagetLink } from '@/types/element.type'
import type { PnColor } from '../../types/color.type'

export interface ButtonProps {
  disabled?: boolean
  size?: SizeElement
  href?: string | undefined
  taget?: TagetLink | undefined
  status?: PnColor | undefined
}
