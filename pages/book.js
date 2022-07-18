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
  const { isbn } = router.query;
  useEffect(() => {
    Get_books();
  }, []);

  const Get_Data = () => {
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
    var options = {
      method: 'GET',
      url: 'https://rem4.lekhitborole.repl.co',
      params: { book_isbn: isbn },
    };
    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Grid articles={data} />
    </div>
  );
}
