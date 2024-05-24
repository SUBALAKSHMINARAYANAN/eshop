
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




exports.addAgent = async (req, res) => {
    const { name, email, phone } = req.body; 
  
    try {
      await pool.query('INSERT INTO `tbl_admin` (Username, Password, First name, Email, MobileNo, Gender, Role, Address) VALUES (?, ?, ?)', [name, email, phone]);
      res.status(201).json({ message: 'Agent added successfully' });
    } catch (error) {
      console.error('Error adding agent:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };




