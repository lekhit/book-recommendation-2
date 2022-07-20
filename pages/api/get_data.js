import { Pool } from 'pg/lib';
import { config } from '../../config';
const pool = new Pool(config);

export default async function handler(request, response) {
  const { title, description, date, time } = request.body;
  const query = `select title, author from mydb where index in (1,2,3)`;

  try {
    const client = await pool.connect();
    data = await client.query(query);
    books = [];
    if (data.rows.lenght > 0) {
      data.rows.forEach((row) => {
        console.log(data.row);
        books.push(data.row);
      });
    }
    response.json({
      message: 'Success!',
      result: JSON.parse(JSON.stringify(books)),
    });
  } catch (err) {
    response.status(500).json({
      message: err.message,
    });
  }
}
