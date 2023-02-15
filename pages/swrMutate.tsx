import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())
const options = {
    revalidateOnFocus: false, 
    refreshInterval: 0,
}

export default function SwrMutate() {

    const { data, error, isLoading, mutate } = useSWR(
        `https://randomuser.me/api`,
        fetcher, 
        options)

    if (error) return "Error"
    if (isLoading) return "Loading..."

    return (
        <>
            <div>{JSON.stringify(data?.results[0].gender)} </div>
            <div>{JSON.stringify(data?.results[0])} </div>

            <button className='border-2 border-black' onClick={() => {
                const gender = data.results[0].gender.toUpperCase()
                console.log("data: ", data)

                // send a request to the API to update the data
                // await updateGender()

                // update the local data immediately and revalidate (refetch)
                // NOTE: key is not required when using useSWR's mutate as it's pre-bound
                // data.results[0].gender = newGender
                mutate({ ...data, results: [{ gender }] })

            }}>Mutate</button>
        </>
    )
}
