import Image from 'next/image';
import React from 'react';
import styles from "../../styles/userdetail.module.css"

function UserDetail({user}) {
  return <div className={styles.container}>
        <div className={styles.usercard + ' card'}>
            <Image className={styles.userimage} src={user.avatar} width={100} height={100} alt={user.username}/>
            <h1>{user.username}</h1>
            <div className={styles.detail}>
            <p>
                {user.detail}
            </p>
            <div className={styles.voteBox}>vote count <div className={styles.voteBox}>{user.vote}</div></div>
            </div>
        </div>
  </div>;
}

export async function getServerSideProps(context){
    const fs = require('fs');
    const path = require('path');
    const {params} = context
    
    let rawdata = fs.readFileSync(path.resolve(__dirname, '../../../../data/user.json'));
    let users = JSON.parse(rawdata);
    const user = users.filter(user=> user.id == params.id)[0]
    if(!user){
        return {
            notFound:true
        }
    }
    return {
      props:{
        user
      }
    }
  }

export default UserDetail;
