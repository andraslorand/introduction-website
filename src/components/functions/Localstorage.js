export const setStorage=(value,key)=>{
    window.localStorage.setItem(key, JSON.stringify(value))
}
export const getStorage=key=>{
    const value=window.localStorage.getItem(key)

    if(value){
        return JSON.parse(value)
    }
}