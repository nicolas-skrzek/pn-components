export const ucFirst = (string: string) => string[0].toUpperCase() + string.slice(1)

export const flattenArray = (array: any[]) => array.reduce((grp, item) => {
  const intArray = typeof item === 'object' ? Object.values(item) : item

  intArray.forEach((el: any) => {
    grp.push(el)
  })

  return grp
}, [])

export const getKeysOfArrayObject = (array: any[]) => array.map((item) => Object.keys(item)).reduce((grp, item) => {
  item.forEach((el) => {
    const itemUpper = ucFirst(el)
    const itemExist = grp.find((k) => k === itemUpper)

    if (!itemExist) {
      grp.push(itemUpper)
    }
  })

  return grp
}, [])
