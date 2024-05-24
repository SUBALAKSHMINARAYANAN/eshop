const express = require('express');
const app = express();
const adminController = require('./controllers/adminController');

// Your other middleware and routes here...

// Example route using the adminController
app.get('/agents', adminController.getAgents);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});













// const express = require('express');
// const app = express();
// const pool = require('./db');


// app.get('/agents', async (req, res) => {
//   try {
//     const agents = await pool.query('SELECT * FROM `tbl_admin`');
//     res.json(agents);
//   } catch (error) {
//     console.error('Error fetching agents:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// module.exports = app;
