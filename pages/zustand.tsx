import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type StateType = {
    bears: number;
    users: {};
    mesg: string;
    increase: Function;
    fetchUser: Function;
}

// === Create store === 
const store = persist(
    (set: Function) => ({
        bears: 10,
        users: {},
        mesg:  "",
        setMesg: (mesg: string) => set({ mesg }),
        increase: () => set((state: StateType) => ({ bears: state.bears + 1 })),
        fetchUser: async (url: string) => {
            const res = await fetch(url)
            set({ users: (await res.json()).results[0] })
        },
    }),
    {
        name: 'bear-storage',
    }
)
const useBearStore = create(store)

export default function Zustand() {
    // ===  Use store ===
    const bears = useBearStore(state => state.bears)
    const mesg = useBearStore(state => state.mesg)
    const users = useBearStore(state => state.users)
    const setMesg = useBearStore(state => state.setMesg)
    const increase = useBearStore(state => state.increase)
    const fetchUser = useBearStore(state => state.fetchUser) 

    return (
        <>
            <h1>Zustand demo</h1>
            <p>Use store {bears} </p>
            <button className='border-2 border-black p-1 m-4'
                onClick={increase}
            >Increase</button>
            <button className='border-2 border-black p-1 m-4'
                onClick={() => {
                    fetchUser(`https://randomuser.me/api/`)
                    JSON.stringify(users) !== '{}' &&
                        console.log("Users: ", users)
                }}
            >fetchUser</button>
            <br /><br />

            Input:  
            <input
                className='border-2 border-black'
                type="text"
                value={mesg}
                onChange={(e) => {
                    const message = e.target.value
                    console.log("value: ", message)
                    setMesg(message);
                }} />
            
        </>
    )
}
