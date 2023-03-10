import { SizeType, ThemeType } from '../../types'
import { ExtractPropTypes, PropType } from 'vue'
export const buttonProps = {
  type: {
    type: String as PropType<ThemeType>,
    default: 'primary'
  },
  to: String,
  light: Boolean,
  text: String,
  size: {
    type: String as PropType<SizeType>,
    default: 'md'
  },
  disabled: Boolean,
  loading: Boolean
}

export type EButtonProps = ExtractPropTypes<typeof buttonProps>
