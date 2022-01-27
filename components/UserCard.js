import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../styles/usercard.module.css"

function UserCard(props) {
    let imgdim = 80;
    return (
        <div className={'card ' + styles.usercard}>
            <div className={styles.container}>
                <Image className={styles.card__image} 
                    src={props.avatar} 
                    alt='avatar' 
                    width={imgdim}
                    height={imgdim}
                    layout='fixed'
                    />
                <h3 className={styles.user}>{props.username}</h3>
                <div className={styles.btnGroup}>
                    <Link href={"candidate/" + props.id} passHref>
                        <button className={"card " + styles.btn}>Detail</button>
                    </Link>
                    <button className={"card " + styles.btn}>Vote</button>
                </div>
            </div>
        </div>
  );
}

export default UserCard;
