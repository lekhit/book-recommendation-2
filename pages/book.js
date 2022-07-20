import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Backdrop from '../components/backdrop';
import { useRouter } from 'next/router';
import Grid from '../components/Grid_my';
var axios = require('axios').default;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const router = useRouter();
  const { isbn } = router.query;
  useEffect(() => {
    //Get_books();
    Get_Data();
  }, [isbn]);

  const Get_Data = () => {
    setLoading(true);
    console.log(isbn);
    fetch(`https://rem4.lekhitborole.repl.co/book?book_isbn=${isbn}`)
      .then((res) => res.json())
      .then((dat) => {
        console.log(dat);
        setData(dat.result);
        setLoading(false);
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
      {loading && <Backdrop on={loading} />}
      {<Grid  articles={data} isbn={isbn} />}
    </div>
  );
}
