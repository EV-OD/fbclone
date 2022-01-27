import Head from 'next/head'
import Header from '../components/Header'
import UserCard from '../components/UserCard'


export default function Home(props) {
  const {id, username, avatar, vote} = props.users
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        {props.users.map(user=> <UserCard {...user} key={user.id}/>)}
      </main>
    </div>
  )
}


export async function getServerSideProps(context){
  const fs = require('fs');
  const path = require('path');
  
  let rawdata = fs.readFileSync(path.resolve(__dirname, '../../../data/user.json'));
  let student = JSON.parse(rawdata);
  return {
    props:{
      users:student
    }
  }
}
