import { COLOR_STATUS } from "./../const/colors.const";
import { SIZE } from "./../const/size.const";

import type { PnColor } from "./../types/color.type";
import type { SizeElement } from '@/types/size.type';

export const sizeValidator = (value: SizeElement) => (SIZE.includes(value))

export const statusValidator = (value: PnColor) => (COLOR_STATUS.includes(value))
