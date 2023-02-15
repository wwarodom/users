import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function V1() {

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
      console.log("Data: ", res.results)
      const { name, location, picture } = res.results[0];
      setUser({ name, location, picture });
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const data = await fetch(`https://randomuser.me/api/?results=3`);
      const res = await data.json()
      console.log("Data users: ", res.results)

      let tmpUsers: User[] = [];
      for (let i = 0; i < 3; i++) {
        const { name, location, picture } = res.results[i];
        tmpUsers[i] = { name, location, picture };
      }
      setUsers(tmpUsers);
    })()
  }, [])

  const showUser = () =>
    Object.keys(user.name).map(key => (
      <li key={key}>
        {user.name[key as keyof typeof user.name]}
      </li>
    ))

  const showUserPicture = () =>
    Object.keys(user.picture).map(key => (
      <li key={key}>
        {user.picture[key as keyof typeof user.picture]}
        <Image src={user.picture[key as keyof typeof user.picture]}
          alt="Picture of user"
          width={100}
          height={100}
        />
      </li>
    ))

  const showUsers = () => {
    if (users) {
      return users?.map((user) =>
        Object.keys(user.name).map(key => {
          // console.log("Users xx ", user.name[key as keyof typeof user.name]);
          console.log("User1: ", user.name.first)
          console.log("User 99: ", user.name)
          return (
            <li key={key}>
              {user.name[key as keyof typeof user.name]}
            </li>
          )
        })
      )
    }
    else {
      console.log("Users is not set yet.")
    }
  }

  return (
    <>
      <main>
        Hello <br />
        <button onClick={() => {
          console.log("Showuser: ", users);
          showUsers()
        }}>Click</button>
      </main>

      <div>
        {(user.picture.large !== '') ?
          <Image src={user.picture?.large}
            alt="Picture of user"
            width={100}
            height={100}
          /> : <></>}
      </div>

      <div>
        <ul>{showUser()}</ul>
        <ul>{showUsers()}</ul>
      </div>
      <div>
        Hello
      </div>
    </>
  )
}
