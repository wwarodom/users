import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function User2() {
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

    const [user, setUser] = useState<User>({
        name: { title: '', first: '', last: '' },
        location: { city: '', country: '' },
        picture: { large: '' }
    })

    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        (async () => {
            const data = await fetch(`https://randomuser.me/api/`);
            const res = await data.json()
            // console.log("Data: ", res.results)
            const { name, location, picture } = res.results[0];
            setUser({ name, location, picture });
        })()
    }, [])

    useEffect(() => {
        (async () => {
            const data = await fetch(`https://randomuser.me/api/?results=3`);
            const res = await data.json()
            // console.log("Data users: ", res.results)
            setUsers(res.results);
        })()
    }, [])

    const showUsers = () => {
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

    const showHeadUser = () => (
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

    return (
        <>
            <main className='flex-col justify-center items-center'>
                <div className='text-3xl mt-8 text-center'>
                    ..:: Welcome to RANDOM user company ::.. <br />
                </div>
                <div className='flex justify-center'>
                    {showHeadUser()}
                </div>
                <div>
                    <ul className='flex justify-around mt-8'>{showUsers()}</ul>
                </div>
            </main>
        </>
    )
}
