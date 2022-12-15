import create from "zustand";

const counterStore = create((set)=>({
    count : 0,
    increaseCount : ()=>set(state=>({
        count : state.count + 1
    })),
    decreaseCount : ()=>set(state=>({
        count : state.count - 1
    })),
    resetCount:()=>set(state=>({
        count : 0
    }))
}))

export default counterStore;