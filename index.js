const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');
const PORT = 8080;

// all users retrive

app.get('/', (req, res) => {
  const html = `
  <ol>${users
    .map(
      (user) => `
    <li>
      ${user.first_name} ${user.last_name} from ${user.university}
    </li>`
    )
    .join('')}
  </ol>
  `;
  res.send(html);
});

//single user retrive

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  const html2 = `<li>${user.first_name} ${user.last_name} from ${user.university}</li>`;
  res.send(html2);
  res.end();
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
