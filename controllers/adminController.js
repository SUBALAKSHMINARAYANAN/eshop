
const pool = require("../db");

exports.getAgents = async (req, res) => {
  try {
    const agents = await pool.query('SELECT * FROM `tbl_admin`');
    res.json(agents);
  } catch (error) {
    console.error('Error fetching agents:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};




// exports.addAgent = async (req, res) => {
//     const { Username, Password, FirstName, Email, MobileNo, Gender, Role, Address } = req.body; 
  
//     try {
//       await pool.query('INSERT INTO `tbl_admin` (Username, Password, First name, Email, MobileNo, Gender, Role, Address) VALUES (?, ?, ?, ?, ?, ? , ?, ?)', [Username, Password, FirstName, Email, MobileNo, Gender, Role, Address]);
//       res.status(201).json({ message: 'Agent added successfully' });
//     } catch (error) {
//       console.error('Error adding agent:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };

exports.addAdmin = async (req, res) => {
  const { Username, Password, FirstName, Email, MobileNo, Gender, Role, Address } = req.body;
  const query = 'INSERT INTO tbl_admin (Username, Password, FirstName, Email, MobileNo, Gender, Role, Address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [Username, Password, FirstName, Email, MobileNo, Gender, Role, Address];

  try {
    await pool.query(query, values);
    res.status(201).json({ message: 'Admin added successfully' });
  } catch (error) {
    console.error('Error adding admin:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};