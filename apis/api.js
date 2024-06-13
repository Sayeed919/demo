const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');
const currentDate = new Date().toISOString().slice(0, 10); 
// require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

// Import models
// const Vendor = require('./models/vendor');
// const Medicine = require('./models/medicine');
// const Inventory = require('./models/inventory');
// const Payment = require('./models/payment');



const app = express();
const PORT = process.env.PORT || 4000;

const mongodb = process.env.MONGO_URI || 'mongodb+srv://ajinkyagajarmal:Ajinkyag16@cluster0.2koedho.mongodb.net/Doctors';

mongoose.connect('mongodb+srv://ajinkyagajarmal:Ajinkyag16@cluster0.2koedho.mongodb.net/Doctors',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
const Schema = mongoose.Schema;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', ()=> {
    console.log('Connected to MongoDB');
});

app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));



//3.Doctors Bio API

const docSchema = new Schema({
    photo: String,
    name: String,
    degrees: Array,
    briefDescription: String,
    testimonials: Array
});
const docBio_Model = mongoose.model('DoctorProfile',docSchema);


app.post('/post-details', async(req,res) => {
    try {
        const newItem = new docBio_Model(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch(err){
        res.status(400).json({message: err.message});
    }
});

app.put('/put-details/:name', async(req,res) => {
    try {
        const name = req.params.name;
        const updateItem = await docBio_Model.findOneAndUpdate({name}, req.body,{new : true});
        if(!updateItem) {
            return res.status(404).json({message: 'Item not found'});
        }
        res.json(updateItem);
    } catch(err) {
        res.status(400).json({message:err.message});
    }
});

app.get('/get-details', async(req, res) => {
    try {
        const items = await docBio_Model.find();
        res.json(items);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});
//Doctors Bio API End


//4.Inventory API

// Define Medicine Schema
const medicineSchema = new mongoose.Schema({
    medicine: String,
    description: String,
    quantity: Number,
    expiryDate: String,
    purchaseDate: String,
    amount: String,
    paymentDate: String,
    vendor: {
      name: String,
      address: String,
      contact_no: String
    }
  });
  
  // Define Medicine model
  const med_Model = mongoose.model('Ajinkya', medicineSchema);

  
// GET /api/medicines
app.get('/api/doctors/medicines', async (req, res) => {
    try {
      const medicines = await med_Model.find().sort({createdAt : -1});
      res.json(medicines);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // GET /api/medicines/:id
  app.get('/api/doctors/medicines/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const medicine = await med_Model.findById(id)
  ;
      if (medicine) {
        res.json(medicine);
      } else {
        res.status(404).json({ error: 'Medicine not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // POST /api/medicines
  app.post('/api/doctors/medicines', async (req, res) => {
    const newMedicine = req.body;
    try {
      const createdMedicine = await med_Model.create(newMedicine);
      res.status(201).json(createdMedicine);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // PUT /api/medicines/:id
  app.put('/api/doctors/medicines/:id', async (req, res) => {
    const { id } = req.params;
    const updatedMedicine = req.body;
    try {
      const medicine = await med_Model.findByIdAndUpdate(id, updatedMedicine, { new: true });
      if (medicine) {
        res.json(medicine);
      } else {
        res.status(404).json({ error: 'Medicine not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // DELETE /api/medicines/:id
  app.delete('/api/doctors/medicines/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await med_Model.findByIdAndDelete(id)
  ;
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

//Inventory API End




//7.Patients Signup and login API


//edit-profile-API

const memberSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: String },
    gender: { type: String },
    bloodGroup: { type: String },
    medHistory: { type: String },
    allergy: { type: String },
    occupation: { type: String },
    address: { type: String },
    members: [
      {
        name: { type: String},
        bloodGroup: { type: String },
        phone: { type: String},
        occupation: { type: String },
        address: { type: String },
        allergy: { type: String },
        medHistory: { type: String },
        age: { type: Number },
        gender: { type: String }
      }
    ]
  });

const Member = mongoose.model('Member',memberSchema);




app.post('/post-user', async (req, res) => {
    try {
        const { password, confirmPassword, ...rest } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const existingUser = await Member.findOne({ phone: req.body.phone });
        if (existingUser) {
            return res.status(400).json({ message: 'Phone number already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newItem = new Member({ ...rest, password: hashedPassword });

        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/patient-list', async (req, res) => {
    try {
        const users = await Member.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/get-user/:id', async (req, res) => {
    try {
        const user = await Member.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/update-user/:id', async (req, res) => {
    try {
        const user = await Member.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // If updating password, hash the new password before saving
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        Object.assign(user, req.body);
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/delete-user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await Member.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User Deleted Successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/login', async (req, res) => {
    const { phone, password } = req.body;

    if (!phone || !password) {
        return res.status(400).json({ message: 'Phone and password are required' });
    }

    try {
        const user = await Member.findOne({ phone });
        if (!user) {
            return res.status(404).json({ message: 'Not a registered phone' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid Password' });
        }

        return res.status(200).json({ message: 'Login Successful' });
    } catch (err) {
        console.error('Error finding user:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});


// // User Registration
// app.post('/api/register', async (req, res) => {
//     const { name, phone, password } = req.body;

//     const cleanedPhone = phone.replace('+91','');
  
//     try {
//       // Check if user with the provided phone number already exists
//       const existingUser = await Member.findOne({ phone: cleanedPhone });
//       if (existingUser) {
//         return res.status(400).json({ success: false, message: 'User with this phone number already exists' });
//       }
  
//       // Create a new user
//       const newUser = new Member({
//         name,
//         phone,
//         password
//       });
  
//       // Save the new user to the database
//       await newUser.save();
  
//       res.status(201).json({ success: true, message: 'User registered successfully' });
//     } catch (err) {
//       res.status(500).json({ success: false, message: 'Failed to register user', error: err.message });
//     }
//   });
  

// User Registration
app.post('/api/register', async (req, res) => {
  const { name, phone, password } = req.body;

  // Remove the "+91" prefix from the phone number
  const cleanedPhone = phone.replace('+91', '');

  try {
      // Check if user with the provided phone number already exists
      const existingUser = await Member.findOne({ phone: cleanedPhone });
      if (existingUser) {
          return res.status(400).json({ success: false, message: 'User with this phone number already exists' });
      }

      // Create a new user
      const newUser = new Member({
          name,
          phone: cleanedPhone, // Use the cleaned phone number
          password
      });

      // Save the new user to the database
      await newUser.save();

      res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to register user', error: err.message });
  }
});


  // User Login
  app.post('/api/login', async (req, res) => {
    const { phone, password } = req.body;
  
    try {
      // Check if user with the provided phone number exists
      const user = await Member.findOne({ phone });
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      // Check if the password matches
      if (user.password !== password) {
        return res.status(401).json({ success: false, message: 'Invalid password' });
      }
  
      // If everything is correct, log in the user
      res.status(200).json({ success: true, message: 'Login successful', user });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to login', error: err.message });
    }
  });
  
  


  app.get('/api/members/', async (req, res) => {
    try {
      const members = await Member.findOne({});
      res.json(members);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


  // app.get('/user/:phone', async (req, res) => {
  //   try {
  //     const phone = req.params.phone;
  //     const user = await Member.findOne({ phone: phone });
  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }
  //     res.status(200).json(user);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'Server Error' });
  //   }
  // });
  
  app.get('/user/:phone', async (req, res) => {
    try {
        let phone = req.params.phone;
        
        // Remove the "+91" prefix from the phone number
        phone = phone.replace('+91', '');

        const user = await Member.findOne({ phone });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});



// POST Request to Post Primary Schema Data
app.post('/api/members', async (req, res) => {
    const memberData = req.body;
  
    try {
      // Create a new member with the primary schema data
      const newMember = new Member(memberData);
      await newMember.save();
  
      res.status(201).json({ success: true, message: 'Member created successfully', member: newMember });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to create member', error: err.message });
    }
  });


// // PUT Request to Edit Primary Schema Fields
// app.put('/api/members/:phone', async (req, res) => {
//   const memberId = req.params.phone;
//   const updatedMemberData = req.body;

//   try {
//       // Find the member by ID
//       const existingMember = await Member.findOne(memberId);
//       if (!existingMember) {
//           return res.status(404).json({ success: false, message: 'Member not found' });
//       }
    
//       // Update primary schema fields with new data
//       Object.assign(existingMember, updatedMemberData);

//       // Ensure the medHistory field is updated
//       existingMember.medHistory = updatedMemberData.medHistory;
    
//       // Save the updated member data
//       await existingMember.save();
    
//       res.status(200).json({ success: true, message: 'Member data updated successfully', member: existingMember });
//   } catch (err) {
//       res.status(500).json({ success: false, message: 'Failed to update member data', error: err.message });
//   }
// });

app.put('/api/members/:phone', async (req, res) => {
  const phone = req.params.phone;
  const updatedMemberData = req.body;

  try {
      // Find the member by phone number
      const existingMember = await Member.findOne({ phone: phone });
      if (!existingMember) {
          return res.status(404).json({ success: false, message: 'Member not found' });
      }
    
      // Update primary schema fields with new data
      Object.assign(existingMember, updatedMemberData);

      // Ensure the medHistory field is updated
      existingMember.medHistory = updatedMemberData.medHistory;
    
      // Save the updated member data
      await existingMember.save();
    
      res.status(200).json({ success: true, message: 'Member data updated successfully', member: existingMember });
  } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to update member data', error: err.message });
  }
});



// POST Request to Post Data in `members[]` Array
app.post('/api/members/:id/addMember', async (req, res) => {
    const memberId = req.params.id;
    const memberData = req.body;
  
    try {
      // Find the member by ID (index)
      const existingMember = await Member.findOne({});
      if (!existingMember) {
        return res.status(404).json({ success: false, message: 'Member not found' });
      }
  
      // Add data to the `members[]` array
      existingMember.members.push(memberData);
      await existingMember.save();
  
      res.status(200).json({ success: true, message: 'Data added to members[] array successfully', member: existingMember });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to add data to members[] array', error: err.message });
    }
  });



// PUT Request to Update Member Data in `members[]` Array
app.put('/api/members/:id/updateMember/:index', async (req, res) => {
    const memberId = req.params.id;
    const memberIndex = req.params.index;
    const updatedMemberData = req.body;
  
    try {
      // Find the parent member by ID
      const existingMember = await Member.findById(memberId);
      if (!existingMember) {
        return res.status(404).json({ success: false, message: 'Member not found' });
      }
  
      // Find the member object within the `members[]` array
      const memberToUpdate = existingMember.members[memberIndex];
      if (!memberToUpdate) {
        return res.status(404).json({ success: false, message: 'Member not found in members[] array' });
      }
  
      // Update the fields provided in the request body
      Object.assign(memberToUpdate, updatedMemberData);
  
      // Save the updated member data
      await existingMember.save();
  
      res.status(200).json({ success: true, message: 'Member data updated successfully', member: existingMember });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to update member data', error: err.message });
    }
});


  
// DELETE Request to Remove Member from `members[]` Array
app.delete('/api/members/:id/deleteMember/:index', async (req, res) => {
    const memberId = req.params.id;
    const memberIndex = req.params.index;
  
    try {
      // Find the member by ID (index)
      const existingMember = await Member.findOne({});
      if (!existingMember) {
        return res.status(404).json({ success: false, message: 'Member not found' });
      }
  
      // Remove the member from the `members[]` array
      if (existingMember.members[memberIndex]) {
        existingMember.members.splice(memberIndex, 1);
        await existingMember.save();
        res.status(200).json({ success: true, message: 'Member deleted from members[] array successfully' });
      } else {
        res.status(404).json({ success: false, message: 'Member not found in members[] array' });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to delete member from members[] array', error: err.message });
    }
  });
  



app.post('/api/members/:index', async (req, res) => {
  const index = req.params.index;
  const newMemberData = req.body;

  try {
    const existingMembers = await Member.findOne({});
    if (existingMembers) {
      if (index >= 0 && index <= existingMembers.members.length) {
        existingMembers.members.splice(index, 0, newMemberData);
        await existingMembers.save();
        res.json(existingMembers);
      } else {
        res.status(400).json({ message: 'Invalid index' });
      }
    } else {
      res.status(404).json({ message: 'Members not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.put('/api/members/:index', async (req, res) => {
    const index = req.params.index;
    const updatedMemberData = req.body;
  
    try {
      const existingMembers = await Member.findOne({});
      if (existingMembers && existingMembers.members[index]) {
        existingMembers.members[index] = { ...existingMembers.members[index], ...updatedMemberData };
        await existingMembers.save();
        res.json(existingMembers);
      } else {
        res.status(404).json({ message: 'Member not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  

  app.delete('/api/members/:index', async (req, res) => {
    const index = req.params.index;
  
    try {
      const existingMembers = await Member.findOne({});
      if (existingMembers && existingMembers.members[index]) {
        existingMembers.members.splice(index, 1);
        await existingMembers.save();
        res.json({ message: 'Member deleted' });
      } else {
        res.status(404).json({ message: 'Member not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  

  app.post('/api/members/:index/uploadImage', async (req, res) => {
    try {
      const { index } = req.params;
      const { profileImage } = req.body;
  
      const memberId = mongoose.Types.ObjectId(index);
      const member = await Member.findById(memberId);
      if (member) {
        member.profileImage = profileImage;
        await member.save();
        res.status(200).json({ success: true, message: 'Image uploaded successfully' });
      } else {
        res.status(404).json({ message: 'Member not found' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to upload image' });
    }
  });


  //tanmay fetch appointment code



  app.get('/api/doctors/patients', async (req, res) => {
    try {
        const patients = await Member.find();
        res.json(patients);
    } catch (error) {
        console.error('Error fetching patients:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// New endpoint to get a patient by ID
app.get('/api/doctors/patients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await Member.findById(id);
        if (patient) {
            res.json(patient);
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (error) {
        console.error('Error fetching patient:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/doctors/patients', async (req, res) => {
    const newPatientData = req.body;
    try {
        const newPatient = await Member.create(newPatientData);
        res.json(newPatient);
    } catch (error) {
        console.error('Error adding patient:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/doctors/patients/:id', async (req, res) => {
    const { id } = req.params;
    const updatedPatientData = req.body;
    try {
      const updatedPatient = await Member.findByIdAndUpdate(id, updatedPatientData, { new: true });
      res.json(updatedPatient);
    } catch (error) {
      console.error('Error updating patient:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.delete('/api/doctors/patients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Patient.findByIdAndDelete(id);
        res.json({ message: 'Patient deleted' });
    } catch (error) {
        console.error('Error deleting patient:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
//edit-profile-API ends


app.post('/post-user', async (req, res) => {
    try {
        const { password, confirmPassword, ...rest } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const existingUser = await user_Model.findOne({ phone: req.body.phone });
        if (existingUser) {
            return res.status(400).json({ message: 'Phone number already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newItem = new user_Model({ ...rest, password: hashedPassword });

        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/patient-list', async (req, res) => {
    try {
        const users = await user_Model.find({});
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/get-user/:id', async (req, res) => {
    try {
        const user = await user_Model.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.put('/update-user/:id', async (req, res) => {
    try {
        const user = await user_Model.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // If updating password, hash the new password before saving
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        Object.assign(user, req.body);
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.delete('/delete-user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await user_Model.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User Deleted Successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/login', async (req, res) => {
    const { phone, password } = req.body;

    if (!phone || !password) {
        return res.status(400).json({ message: 'Phone and password are required' });
    }

    try {
        const user = await user_Model.findOne({ phone });
        if (!user) {
            return res.status(404).json({ message: 'Not a registered phone' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid Password' });
        }

        return res.status(200).json({ message: 'Login Successful' });
    } catch (err) {
        console.error('Error finding user:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

//Patients Signup and login API end


//Admin Doctor Patients CRUD API

// Define Patient Schema and Model
const patientSchema = new mongoose.Schema({
    details: String,
    followUp: String,
    phoneNumber: String,
    bloodGroup: String,
    occupation: String,
    allergy: String,
    address: String,
    history: Array
});

const Patient = mongoose.model('Patient', patientSchema);

// Routes
app.get('/api/doctors/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        console.error('Error fetching patients:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// New endpoint to get a patient by ID
app.get('/api/doctors/patients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await Patient.findById(id)
;
        if (patient) {
            res.json(patient);
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (error) {
        console.error('Error fetching patient:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/doctors/patients', async (req, res) => {
    const newPatientData = req.body;
    try {
        const newPatient = await Patient.create(newPatientData);
        res.json(newPatient);
    } catch (error) {
        console.error('Error adding patient:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/doctors/patients/:id', async (req, res) => {
    const { id } = req.params;
    const updatedPatientData = req.body;
    try {
      const updatedPatient = await Patient.findByIdAndUpdate(id, updatedPatientData, { new: true });
      res.json(updatedPatient);
    } catch (error) {
      console.error('Error updating patient:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

app.delete('/api/doctors/patients/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Patient.findByIdAndDelete(id)
;
        res.json({ message: 'Patient deleted' });
    } catch (error) {
        console.error('Error deleting patient:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//Admin Doctor Patients CRUD API End


//Invoices API

// Define a schema for invoices
const invoiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    diagnosis: { type: String, required: true },
    date: { type: Date, required: true }
  });
  
  const Invoice = mongoose.model('Invoice', invoiceSchema);
  
  // Sample doctor information
  const doctorInfo = {
    name: 'Dr. Bhavesh C. Jain',
    bio: 'Family Physician & Homeopathic Consultant',
    number: 'Reg.No.39344',
    qualification: 'B.H.M.S, C.C.M.P',
    address: 'Mantri Aangan Complex, Shop No.1, Pingale Wasti Mundhawa, Pune-411036',
    contact: '9527902551',
    time: '• Morning 9.30 to 2 • Evening 5 to 9.30 • Sunday Evening Closed •'
  };
  
  // Endpoint to get doctor information
  app.get('/api/doctor', (req, res) => {
    res.json(doctorInfo);
  });
  
  // Endpoint to create an invoice
  app.post('/api/invoice', async (req, res) => {
    const { name, amount, diagnosis, date } = req.body;
  
    if (!name || !amount || !diagnosis || !date) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    try {
      const invoice = new Invoice({ name, amount, diagnosis, date });
      await invoice.save();
      res.status(201).json({
        message: 'Invoice created successfully',
        invoice
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Endpoint to get all invoices
  app.get('/api/invoices', async (req, res) => {
    try {
      const invoices = await Invoice.find();
      res.json(invoices);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  //Invoices API ends


  //Manage Staff API


  const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: false, unique: true },
    password: { type: String, required: false },
    photo: { type: String, required: false }
})


const Model = mongoose.model('TanmayDoctor',doctorSchema);

app.use(bodyparser.json());
app.use(cors());


app.get('/doctors', async (req, res) => {
    try {
        const doctors = await Model.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.post('/add-doctor', async(req,res)=>{
    try{
        const newDoctor = new Model(req.body);
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error){
        res.status(400).json({message: error.message});
    }
});

app.post('/doc-login', async(req,res)=> {
    const {email, password} = req.body;
    try{
        const doctor = await Model.findOne({email});
        if(!doctor){
            return res.status(404).json({message:"Doctor not found"});
        }

        // Comparing passwords directly (not recommended in production)
        if(password !== doctor.password){
            return res.status(401).json({message:"Invalid Credentials"});
        }

        res.status(200).json({message: "Login successful"});
    } catch(error){
        res.status(500).json({message:error.message});
    }
});

app.put('/update-doctor/:id', async(req,res)=>{
    const {id} = req.params;
    const updateFields = req.body;
    try{
        // Filter out any properties that are undefined or null
        const filteredUpdateFields = Object.fromEntries(Object.entries(updateFields).filter(([_, v]) => v != null));
        const updatedDoctor = await Model.findByIdAndUpdate(id, filteredUpdateFields, { new: true });
        if(!updatedDoctor){
            return res.status(404).json({message: "Doctor not found"});
        }
        res.status(200).json(updatedDoctor);
    } catch(error){
        res.status(400).json({message:error.message});
    }
});



app.delete('/delete-doctor/:id', async(req,res) => {
    const {id} = req.params;
    try{
        const deletedDoctor = await Model.findByIdAndDelete(id)
;
        if(!deletedDoctor){
            return res.status(404).json({message:"Doctor not found"});
        }
        res.status(200).json({message:"Doctor Deleted Successfully"});
    } catch(error){
        res.status(400).json({message: error.message});
    }
});

//Manage Staff API ends


//Appointment API


// const memberSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   phone: { type: String, required: true },
//   password: { type: String, required: true },
//   age: { type: String },
//   gender: { type: String },
//   bloodGroup: { type: String },
//   medHistory: { type: String },
//   allergy: { type: String },
//   occupation: { type: String },
//   address: { type: String },
//   members: { type: Array }
// });

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  token: { type: String, required: true },
  date: { type: Date, default: Date.now },
  age: { type: String },
  gender: { type: String },
  bloodGroup: { type: String },
  medHistory: { type: String },
  allergy: { type: String },
  occupation: { type: String },
  address: { type: String },
  member: { type: Array, default: [] },
  prescriptions: { type: Array, default: [] },
  status: { type: Boolean, default: false } // Added status field
}, { timestamps: true });

const previousAppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  token: { type: String, required: true },
  date: { type: Date, default: Date.now },
  age: { type: String },
  gender: { type: String },
  bloodGroup: { type: String },
  medHistory: { type: String },
  allergy: { type: String },
  occupation: { type: String },
  address: { type: String },
  member: { type: Array, default: [] },
  prescriptions: { type: Array, default: [] }
}, { timestamps: true });


const cancelledAppointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  token: { type: String, required: true },
  date: { type: Date, default: Date.now },
  age: { type: String },
  gender: { type: String },
  bloodGroup: { type: String },
  medHistory: { type: String },
  allergy: { type: String },
  occupation: { type: String },
  address: { type: String },
  member: { type: Array, default: [] },
  prescriptions: { type: Array, default: [] },
  status: { type: Boolean, default: false }
}, { timestamps: true });

const CancelledAppointment = mongoose.model('CancelledAppointment', cancelledAppointmentSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);
const PreviousAppointment = mongoose.model('PreviousAppointment', previousAppointmentSchema);
// const Member = mongoose.model('Members', memberSchema);

let nextTokenNumber = 1;
let currentTokenNumber = 1;

// Reset token number at 6 AM daily
function resetTokenOnDateChange() {
  const checkTime = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const currentTime = `${hours}:${minutes}:${seconds}`;
    if (currentTime === '06:00:00') {
      nextTokenNumber = 1;
      console.log('Token number reset to 1. Time is 6 AM.');
    }
  };
  setInterval(checkTime, 60000);
}
resetTokenOnDateChange();

// Appointment Routes
app.get('/user-profile/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const memberData = await Member.findById(id);
    if (memberData) {
      res.status(200).json(memberData);
    } else {
      res.status(404).json({ message: 'Member data not found for this id' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/post-appointment/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const memberData = await Member.findById(id);
    if (memberData) {
      const appointmentData = {
        name: memberData.name,
        phone: memberData.phone,
        token: String,
        date: String,
        age: memberData.age,
        gender: memberData.gender,
        bloodGroup: memberData.bloodGroup,
        medHistroy: memberData.medHistroy,
        allergy: memberData.allergy,
        occupation: memberData.occupation,
        address: memberData.address,
        members: memberData.members
      };
      const appointment = new Appointment(appointmentData);
      await appointment.save();
      res.status(201).json({ message: 'Appointment posted successfully', appointment });
    } else {
      res.status(404).json({ message: 'Member data not found for this id' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/post-appointment', async (req, res) => {
    try {
      const now = new Date();
      const hours = now.getHours();
  
      // Check if token generation is within the allowed timeframe
      if (hours < 9 || hours > 20) {
        return res.status(400).json({ message: 'Token generation is open from 9 AM to 8 PM only.' });
      }
  
      const { name, phone, date } = req.body;
      const parsedDate = moment(date, 'DD-MM-YYYY').toDate();
  
      // Find member data
      const memberData = await Member.findOne({ name, phone });
      if (!memberData) {
        return res.status(404).json({ message: 'User does not exist' });
      }
  
      // Generate token
      let token;
      if (nextTokenNumber <= 200) {
        token = nextTokenNumber;
        nextTokenNumber++;
      } else {
        nextTokenNumber = 1;
        token = nextTokenNumber;
      }
  
      // Create appointment data
      const appointmentData = {
        name: memberData.name,
        phone: memberData.phone,
        token: token.toString(),
        date: parsedDate,
        age:memberData.age,
        gender: memberData.gender,
        bloodGroup: memberData.bloodGroup,
        allergy: memberData.allergy,
        occupation: memberData.occupation,
        address: memberData.address,
        medHistory: memberData.medHistory,
        member: memberData.members,
        prescriptions: memberData.prescriptions
      };
  
      // Save appointment
      const appointment = new Appointment(appointmentData);
      await appointment.save();
      res.status(201).json({ message: 'Appointment posted successfully', appointment, token });
    } catch (error) {
      console.error('Error posting appointment and generating token:', error);
      res.status(500).json({ message: 'Internal server error. Failed to post appointment and generate token.' });
    }
  });

app.put('/update-token-number', async (req, res) => {
  try {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 9 || hours > 18) {
      return res.status(400).json({ message: 'Sorry for your inconvenience...' });
    }

    if (currentTokenNumber < 10) {
      currentTokenNumber++;
      res.json({ message: 'Next Token Number: ', NextTokenNumber: currentTokenNumber + 1 });
    } else {
      currentTokenNumber = 1;
      res.status(200).json({ message: 'Token Limit Reached ' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.get('/live-token-number', (req, res) => {
  const now = new Date();
  const hours = now.getHours();
  if (hours < 9 || hours > 18) {
    return res.status(400).json({ message: 'No Token is Live Now ........' });
  }

  res.json({ liveTokenNumber: currentTokenNumber });
});

app.get('/latest-token/:phone', async (req, res) => {
  try {
    const { phone } = req.params;
    const latestPatient = await Appointment.findOne({ phone }).sort({ createdAt: -1 });

    if (!latestPatient) {
      return res.status(404).json({ message: 'No token found for this phone number.' });
    }

    res.status(200).json({ token: latestPatient.token });
  } catch (error) {
    console.error('Error fetching latest token:', error);
    res.status(500).json({ message: 'Internal server error. Failed to fetch latest token.' });
  }
});

app.get('/bookings', async (req, res) => {
  try {
    const bookings = await Appointment.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
});


app.get('/booking/:id', async (req, res) => {
  try {
    const booking = await Appointment.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching booking' });
  }
});


app.put('/booking/:id', async (req, res) => {
  try {
    const booking = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ error: 'Error updating booking' });
  }
});

app.delete('/booking/:id', async (req, res) => {
  try {
    const booking = await Appointment.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Error deleting booking' });
  }
});

app.get('/generated-token/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const generatedToken = await Appointment.findOne({ bookDate: date }).sort({ createdAt: -1 });

    if (!generatedToken) {
      return res.status(404).json({ message: 'No token generated for the specified date.' });
    }

    res.status(200).json({ token: generatedToken.token });
  } catch (error) {
    console.error('Error fetching generated token:', error);
    res.status(500).json({ message: 'Internal server error. Failed to fetch generated token.' });
  }
});

// Add new route to fetch appointment by token and date
app.get('/appointment', async (req, res) => {
    const { token, date } = req.query;
    try {
      const parsedDate = moment(date, 'DD-MM-YYYY').toDate();
      const appointment = await Appointment.findOne({ token, date: parsedDate });
  
      if (!appointment) {
        return res.status(404).json({ message: 'No appointment found for the given token and date.' });
      }
  
      res.status(200).json(appointment);
    } catch (error) {
      console.error('Error fetching appointment:', error);
      res.status(500).json({ message: 'Internal server error. Failed to fetch appointment.' });
    }
  });

app.put('/update-appointment-status/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    appointment.status = true;
    await appointment.save();
    res.status(200).json({ message: 'Status updated successfully', appointment });
  } catch (error) {
    console.error('Error updating appointment status:', error);
    res.status(500).json({ message: 'Internal server error. Failed to update status.' });
  }
});

app.post('/move-to-previous/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    if (appointment.status) {
      const previousAppointment = new PreviousAppointment(appointment.toObject());
      await previousAppointment.save();
      await Appointment.findByIdAndDelete(id);
      res.status(201).json({ message: 'Appointment moved to PreviousAppointments and deleted from Appointments', previousAppointment });
    } else {
      res.status(400).json({ message: 'Appointment status is not true' });
    }
  } catch (error) {
    console.error('Error moving appointment to previous:', error);
    res.status(500).json({ message: 'Internal server error. Failed to move appointment.' });
  }
});

app.delete('/delete-appointment/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    if (appointment.status) {
      await Appointment.findByIdAndDelete(id);
      res.status(200).json({ message: 'Appointment deleted successfully' });
    } else {
      res.status(400).json({ message: 'Appointment status is not true' });
    }
  } catch (error) {
    console.error('Error deleting appointment:', error);
    res.status(500).json({ message: 'Internal server error. Failed to delete appointment.' });
  }
});


app.get('/previous-bookings', async (req, res) => {
  try {
    const previousBookings = await PreviousAppointment.find();
    res.status(200).json(previousBookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching previous bookings' });
  }
});


app.post('/cancel-appointment/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // Find the appointment by ID
    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    // Create the cancelled appointment data
    const cancelledAppointmentData = {
      name: appointment.name,
      phone: appointment.phone,
      token: appointment.token,
      date: appointment.date,
      age: appointment.age,
      gender: appointment.gender,
      bloodGroup: appointment.bloodGroup,
      medHistory: appointment.medHistory,
      allergy: appointment.allergy,
      occupation: appointment.occupation,
      address: appointment.address,
      member: appointment.member,
      prescriptions: appointment.prescriptions,
      status: true
    };

    // Save to CancelledAppointments collection
    const cancelledAppointment = new CancelledAppointment(cancelledAppointmentData);
    await cancelledAppointment.save();

    // Delete from Appointments collection
    await Appointment.findByIdAndDelete(id);

    res.status(201).json({ message: 'Appointment cancelled and moved to CancelledAppointments', cancelledAppointment });
  } catch (error) {
    console.error('Error cancelling appointment:', error);
    res.status(500).json({ message: 'Internal server error. Failed to cancel appointment.' });
  }
});



app.get('/cancelled-bookings', async (req, res) => {
  try {
    const cancelledBookings = await CancelledAppointment.find();
    res.status(200).json(cancelledBookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cancelled bookings' });
  }
});


//Appointment API ends


//Referall API

// Define Doctor schema and model
const refdoctorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  qualification: String,
  address: String,
  contact: String
});

const Doctor = mongoose.model('Doctor', refdoctorSchema);

// Define Referral schema and model
const referralSchema = new mongoose.Schema({
  referredDoctor: String,
  patientName: String,
  reasonForReferral: String
});

const Referral = mongoose.model('Referral', referralSchema);

// Hardcoded list of doctors
const sampleDoctors = [
  { name: 'Dr. Bhavesh C. Jain', bio: 'Family Physician & Homeopathic Consultant', qualification: 'BHMS, MD-Homeopathy', address: 'Mantri Aangan Complex, Pingale Wasti Mundhawa, Pune-411036', contact: '9527902551' },
  { name: 'Dr. Smith', bio: 'General Practitioner', qualification: 'MBBS', address: '123 Main St, Springfield', contact: '1234567890' },
  { name: 'Dr. Johnson', bio: 'Cardiologist', qualification: 'MD-Cardiology', address: '456 Elm St, Springfield', contact: '2345678901' },
  { name: 'Dr. Patel', bio: 'Dermatologist', qualification: 'MD-Dermatology', address: '789 Oak St, Springfield', contact: '3456789012' },
  { name: 'Dr. Lee', bio: 'Pediatrician', qualification: 'MD-Pediatrics', address: '101 Pine St, Springfield', contact: '4567890123' }
];

// Endpoint to fetch the list of doctors
app.get('/api/doctors', (req, res) => {
  try {
      res.json(sampleDoctors);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching doctors', error });
  }
});

// Endpoint to handle form submission
app.post('/api/referral', async (req, res) => {
  const { referredDoctor, patientName, reasonForReferral } = req.body;

  if (!referredDoctor || !patientName || !reasonForReferral) {
      return res.status(400).json({ message: 'All fields are required' });
  }

  try {
      const newReferral = new Referral(req.body);
      await newReferral.save();
      res.status(200).json({ message: 'Referral submitted successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Error submitting referral', error });
  }
});


//Referall API ends


//clinic details API


const clinicSchema = new mongoose.Schema({
  morningTimings: String,
  eveningTimings: String,
  phone: String,
  email: String,
  address: String
});

const Clinic = mongoose.model('Clinic_details', clinicSchema);

// 2. Define routes for CRUD operations
// Cre
app.post('/clinics', async (req, res) => {
  try {
      const clinic = new Clinic(req.body);
      await clinic.save();
      res.status(201).send(clinic);
  } catch (err) {
      res.status(400).send(err);
  }
});

// Read
app.get('/clinics/:id', async (req, res) => {
  try {
      const clinic = await Clinic.findById(req.params.id);
      if (!clinic) {
          return res.status(404).send();
      }
      res.send(clinic);
  } catch (err) {
      res.status(500).send(err);
  }
});

// Update
app.patch('/clinics/:id', async (req, res) => {
  try {
      const clinic = await Clinic.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!clinic) {
          return res.status(404).send();
      }
      res.send(clinic);
  } catch (err) {
      res.status(400).send(err);
  }
});

// Delete
app.delete('/clinics/:id', async (req, res) => {
  try {
      const clinic = await Clinic.findByIdAndDelete(req.params.id);
      if (!clinic) {
          return res.status(404).send();
      }
      res.send(clinic);
  } catch (err) {
      res.status(500).send(err);
  }
});

//clinics details API ends

//Admin token api

const tokenSchema = new mongoose.Schema({
  value: { type: Number, default: 0 },
});
const Token = mongoose.model('Admintoken', tokenSchema);

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      res.status(400).json({ message: 'Invalid JSON' });
    } else {
      next();
    }
  });

// Reset token number to 0 at midnight every day
cron.schedule('0 0 * * *', async () => {
  try {
    const token = await Token.findOne();
    if (token) {
      token.value = 0;
      await token.save();
      console.log('Token number reset to 0');
    }
  } catch (err) {
    console.error('Error resetting token number:', err);
  }
});

// Routes
app.get('/token', async (req, res) => {
  try {
    const token = await Token.findOne();
    res.json(token);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/token', async (req, res) => {
  try {
    const { value } = req.body;
    let token = await Token.findOne();
    if (!token) {
      token = new Token({ value });
    } else {
      token.value = value;
    }
    await token.save();
    res.json(token);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Admin token api ends

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


