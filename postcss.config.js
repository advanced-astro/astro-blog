import autoprefixer from 'autoprefixer'
import OpenProps from 'open-props'
import postcssJitProps from 'postcss-jit-props'

export const plugins = [autoprefixer(), postcssJitProps(OpenProps)]
