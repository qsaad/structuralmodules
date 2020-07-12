
//SUM ARRAYS - ADD CONSECUTIVE ELEMENTS OF MULTIPLE ARRAYS
export const sumArrays = as => as.filter(a => a.length).length ? [as.filter(a => a.length).reduce((r, a) => r + a.shift(), 0), ...sumArrays(as)] : []