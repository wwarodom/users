import Image from 'next/image' 
import { useUser, useUsers } from '../hook/services'

type User = {
    name: {
        title: string;
        first: string;
        last: string;
    },
    location: {
        city: string;
        country: string;
    },
    picture: {
        large: string;
    }
}

export default function User3() {
    const showUsers = (users: User[]) => {
        return users && users?.map((user, index) => {
            console.log("User: ", user.picture.large);
            return <UserCard key={index} user={user} index={index} />;
        }) 
    }

    type UserType = {
        user: any;
        index: number;
        key: number;
    }

    const UserCard = ({ user, index }: UserType) => (
        <li key={index}>
            <span className='flex justify-center mb-4'>
                {user.name.title} {' '}
                {user.name.first} {' '}
                {user.name.last}
            </span>

            <Image src={user.picture.large}
                alt="Picture of user"
                width={200}
                height={200}
            />
        </li>)

    const showHeadUser = (user: User) => { 
        return (
            (user.picture.large !== '') ?
                (
                    <div>
                        <span className='flex justify-center mt-8 mb-4 text-2xl'>
                            {user.name.title} {' '}
                            {user.name.first} {' '}
                            {user.name.last}
                        </span>
                        <Image src={user.picture?.large}
                            className='rounded-full'
                            alt="Picture of user"
                            width={250}
                            height={250}
                        />
                    </div>) : <></>
        )
    }

    const { user, isLoading, isError } = useUser()
    const { users, isUsersLoading, isUsersError } = useUsers(3)

    if (isLoading || isUsersLoading) return "Loading..."
    if (isError || isUsersError) return "Error..."

    // console.log(user.results[0]) 
    // console.log( users.results)

    return (
        <>
            <main className='flex-col justify-center items-center'>
                <div className='text-3xl mt-8 text-center'>
                    ..:: Welcome to RANDOM user company ::.. <br />
                </div>
                <div className='flex justify-center'>
                    {showHeadUser(user.results[0])}
                </div>
                <div>
                    <ul className='flex justify-around mt-8'>{showUsers(users.results)}</ul>
                </div>
            </main>
        </>
    )
}
