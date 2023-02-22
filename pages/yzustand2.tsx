import React, { useState } from 'react'
import { create } from 'zustand';

type numType = {
    num: number;
    setNum: Function;
}

const store = (set: Function) => ({
    num: 0,
    setNum: (num: number) => set((state: numType) => ({ num: state.num + 1 }))
})
const useNum = create(store)

export default function Yzustand2() {

    const num = useNum(state => state.num)
    const setNum = useNum( state => state.setNum)

    return (
        <div>
            <h1>num: {num}</h1>
            <button className='p-2 m-2 border-2 border-black' onClick={() => setNum(num + 1)}>Root</button>
            <hr />
            Call A:  <A />
        </div>
    )
}

const A = () => {
    return (
        <div>A component
            <hr />
            Call B: <B />
        </div>

    )
}

const B = () => {
    return (
        <div>B component
            <hr />
            Call C: <C />
        </div>
    )
}

const C = () => {

    const num = useNum(state => state.num)
    const setNum = useNum( state => state.setNum)

    return <> <br />
        C component
        <br />
        <button
            className='p-2 m-2 border-2 border-black'
            onClick={() => setNum(num + 1)}>Update</button>
        <hr />
    </>
}