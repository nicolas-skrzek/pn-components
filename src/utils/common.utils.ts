export const ucFirst = (string: string) => string[0].toUpperCase() + string.slice(1)

export const flattenArray = (array: any[]) => array.reduce((grp, item) => {
  const intArray = typeof item === 'object' ? Object.values(item) : item

  intArray.forEach((el: any) => {
    grp.push(el)
  })

  return grp
}, [])
