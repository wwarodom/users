import useSWR from 'swr'

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useUser() {
    const { data, error, isLoading } = useSWR(`https://randomuser.me/api/`, fetcher)
    return {
        user: data,
        isLoading,
        isError: error
    }
}

export function useUsers(num: number) {
    const { data, error, isLoading } = useSWR(`https://randomuser.me/api/?results=${num}`, fetcher)
    return {
        users: data,
        isUsersLoading: isLoading,
        isUsersError: error
    }
}