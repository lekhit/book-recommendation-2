import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import { useRouter } from 'next/router';
import Grid from '../components/Grid';
var axios = require('axios').default;
export default function Home() {
  const [data, setData] = useState('old text');
  const router = useRouter();
  useEffect(() => {
    Get_books();
  });

  const Get_Data = () => {
    const { isbn } = router.query;
    console.log(isbn);
    fetch(`https://rem4.lekhitborole.repl.co/?book_isbn=${isbn}`)
      .then((res) => res.json())
      .then((dat) => {
        console.log(dat);
        setData(dat);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const Get_books = () => {
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const Post = () => {
    return <p>Post: {pid}</p>;
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <NavBar />
      <Grid articles={data} />
    </div>
  );
}
