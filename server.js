const express = require('express');
const Routes = require('./routes/paths');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets');
const syncDatabase = require('./database');

/*       setup server       */
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

app.use(Routes.home, indexRouter);
app.use(Routes.users, usersRouter);
app.use(Routes.pets, petsRouter);

/*       setup database       */
syncDatabase();
