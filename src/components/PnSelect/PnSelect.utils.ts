export const getOptionValue = (opt: any) => (typeof opt === 'object' ? opt.value : opt)

export const getOptionLabel = (opt: any) => (typeof opt === 'object' ? opt.label : opt)

export const selectedOptions = (value: any, multiple = false) => {
  if (!value) {
    return []
  }

  if (multiple && Array.isArray(value)) {
    return value.reduce((acc: any[], opt: any) => {
      acc.push(opt)
      return acc
    }, [])
  }

  return [value]
}
