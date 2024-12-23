import express from 'express';
import User from '../models/User';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required' });
      return;
    }

    const filter = { email: email as string, password: password as string };
    const user = await User.findOne(filter);

    if (!user) {
      res.status(200).json({ message: 'User not found' });
      return;
    }
    
    res.status(200).json({ message: `User fetched successfully`, user });
        
  } catch (error) {
    console.error(`Error fetching user, error: `, error);
    res.status(500).json({ message: 'An internal server error occurred' });
  }
});

router.get('/all', async (req, res) => {
  try {

    const users = await User.find();
    res.status(200).json({ message: `Users fetched successfully`, users });
        
  } catch (error) {
    console.error(`Error fetching user, error: `, error);
    res.status(500).json({ message: 'An internal server error occurred' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password});
    await user.save();
    res.status(200).json({ message: `User created successfully`, user });
        
  } catch (error) {
    console.error(`Error creating user, error: `, error);
    res.status(500).json({ message: 'An internal server error occurred' });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const filter = { _id: req.params.id };

    const updateFields = req.body;

    const user = await User.findOneAndUpdate(
      filter, 
      { $set: updateFields },
      { new: true }
    );
    res.status(200).json({ message: `User updated successfully`, user });
        
  } catch (error) {
    console.error(`Error updating user, error: `, error);
    res.status(500).json({ message: 'An internal server error occurred' });
  }
});

export default router;