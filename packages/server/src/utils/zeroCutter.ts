export const zeroCutter = (value:string) => {
    const cutted = value.split('.')
    if(cutted[1]=== '0000') {
        return cutted[0]
    }
     else {
        return value
    }
}