const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3030;

// Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection URI
const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // Increase timeout for server selection
    socketTimeoutMS: 45000 // Increase timeout for socket connection
  })
  

// Connect to MongoDB
MongoClient.connect(mongoURI)
    .then(client => {
        // Initialize Express app
        app.use(express.json());
        app.use(cors());

        const db = client.db(); // Specify database name directly in the MongoClient.connect() method

        // Define user schema for registration
        const userSchema = new mongoose.Schema({
            firstName: { type: String, required: true },
            email: { type: String, unique: true, required: true },
            username: { type: String, unique: true, required: true },
            password: { type: String, required: true },
        });
        const User = mongoose.model('User', userSchema);

        // Define booking schema
        const bookingSchema = new mongoose.Schema({
            name: String,
            email: String,
            phone: Number,
            date: Date,
            slot: String
        });
        const Booking = mongoose.model('Booking', bookingSchema);

        // Define contact schema
        const contactSchema = new mongoose.Schema({
            name: String,
            email: String,
            phone: Number,
            department: String,
            message: String
        });
        const Contact = mongoose.model('Contact', contactSchema);

        // Define doctor schema
        const doctorSchema = new mongoose.Schema({
            name: String,
            email: String,
            phone: Number,
            address: String,
            experience: String,
            price: Number,
            category: String,
            ratings: Number,
            imageUrl: String
        });
        const Dermatologist = mongoose.model('dermatologist', doctorSchema);
        const Dentist = mongoose.model('dentist', doctorSchema);

        // MongoDB connection success message
        console.log('Connected to MongoDB');

        // Login API endpoint
        app.post('/login', async (req, res) => {
            const { email, password } = req.body;

            // Check if email and password are provided
            if (!email || !password) {
                return res.status(400).json({ message: 'Email and password are required' });
            }

            try {
                // Find user by email in MongoDB
                const user = await User.findOne({ email });

                // Check if user exists
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }

                // Compare hashed passwords
                const passwordMatch = await bcrypt.compare(password, user.password);

                if (!passwordMatch) {
                    return res.status(401).json({ message: 'Invalid password' });
                }

                // If everything is fine, return success
                return res.status(200).json({ message: 'Login successful' });
            } catch (err) {
                console.error('Error finding user:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
        });

        // Booking API endpoint
        app.post('/booking', async (req, res) => {
            try {
                const booking = new Booking(req.body);
                await booking.save();
                res.status(201).json({ message: 'Booking created successfully', data: booking });
            } catch (err) {
                res.status(400).json({ message: 'Error creating booking', error: err.message });
            }
        });

        // Contact-Us API endpoint
        app.post('/contact', async (req, res) => {
            try {
                const contact = new Contact(req.body);
                await contact.save();
                res.status(201).json({ message: 'Contact form submitted successfully', data: contact });
            } catch (err) {
                res.status(400).json({ message: 'Error submitting contact form', error: err.message });
            }
        });

        // Register API endpoint
        app.post('/users', async (req, res) => {
            try {
                const hashedPassword = await bcrypt.hash(req.body.password, 10);
                const user = new User({
                    firstName: req.body.firstName,
                    email: req.body.email,
                    username: req.body.username,
                    password: hashedPassword
                });
                await user.save();
                res.status(201).json({ message: 'User registered successfully', data: user });
            } catch (err) {
                res.status(400).json({ message: 'Error registering user', error: err.message });
            }
        });

        // Email API endpoint
        // app.post('/email', async (req, res) => {
        //     // Email sending logic

            
        // });
        // Email API endpoint
app.post('/email', async (req, res) => {
    const { email, firstName } = req.body;

    try {
        await sendRegistrationEmail(email, firstName);
        res.status(200).json({ message: 'Registration successful. Email sent.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Error sending registration email' });
    }
});

// Function to send registration email
async function sendRegistrationEmail(email, firstName) {
    try {
        // Create transporter using nodemailer
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "rojeeshaikh786@gmail.com", // Replace with your Gmail email
                pass: "eivz uvib wena epsw" // Replace with your Gmail password
            }
        });

        // Define email options
        const mailOptions = {
            from: "rojeeshaikh786@gmail.com",
            to: email,
            subject: 'Registration Successful',
            text: `Hello ${firstName},\n\nThank you for registering with us. Your registration was successful.`
        };

        // Send email
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error('Error sending email: ' + error.message);
    }
}



        // Doctors API endpoints
        // app.post('/dermatologist', async (req, res) => {
        //     // Doctor details saving logic
        // });

        // Doctors API endpoint to add a new dermatologist with image upload
app.post('/dermatologist', upload.single('image'), async (req, res) => {
    try {
        // Extract other details of dermatologist from the request body
        const { name, email, phone, address, experience, price, category, ratings } = req.body;
        
        // Assuming image is sent as base64 encoded string in the request body
        const imageUrl = req.file.buffer.toString('base64'); // Convert buffer to base64 string

        // Create a new instance of Doctor model
        const newDoctor = new Dermatologist({
            name,
            email,
            phone,
            address,
            experience,
            price,
            category,
            ratings,
            imageUrl // Save base64 string as imageUrl
        });

        // Save the new dermatologist record to the database
        await newDoctor.save();

        res.status(201).json({ message: 'Dermatologist record created successfully', data: newDoctor });
    } catch (err) {
        res.status(400).json({ message: 'Error creating dermatologist record', error: err.message });
    }
});

// Doctors API endpoint to get all dermatologists
app.get('/dermatologist', async (req, res) => {
    try {
        // Retrieve all dermatologists from the database
        const dermatologists = await Dermatologist.find();
        
        // Send the retrieved dermatologists as a JSON response
        res.json(dermatologists);
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: 'Error retrieving dermatologists', error: err.message });
    }
});

//add a Dentist API

app.post('/dentist', upload.single('image'), async (req, res) => {
    try {
        // Extract other details of dermatologist from the request body
        const { name, email, phone, address, experience, price, category, ratings } = req.body;
        
        // Assuming image is sent as base64 encoded string in the request body
        const imageUrl = req.file.buffer.toString('base64'); // Convert buffer to base64 string

        // Create a new instance of Doctor model
        const newDoctor = new Dentist({
            name,
            email,
            phone,
            address,
            experience,
            price,
            category,
            ratings,
            imageUrl // Save base64 string as imageUrl
        });

        // Save the new dermatologist record to the database
        await newDoctor.save();

        res.status(201).json({ message: 'Dentist record created successfully', data: newDoctor });
    } catch (err) {
        res.status(400).json({ message: 'Error creating dentist record', error: err.message });
    }
});

app.get('/dentist', async (req, res) => {
    try {
        // Retrieve all dermatologists from the database
        const dentist = await Dentist.find();
        
        // Send the retrieved dermatologists as a JSON response
        res.json(dentist);
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: 'Error retrieving dermatologists', error: err.message });
    }
});

    
    // Search API endpoint to search for dermatologists
// app.get('/search', async (req, res) => {
//     try {
//         // Extract the search query from the request query parameters
//         const query = req.query.q;

//         // Create a regex pattern to perform a case-insensitive search
//         const regex = new RegExp(query, 'i');

//         // Perform the search query to find dermatologists matching the search query
//         const dermatologists = await Dermatologist.find({
//             $or: [
//                 { name: regex }, // Search by dermatologist's name
//                 { address: regex }, // Search by email
//                 { category: regex } // Search by category
//                 // Add more fields to search by if needed
//             ]
//         });

//         const dentist = await Dentist.find({
//             $or: [
//                 { name: regex }, // Search by dermatologist's name
//                 { address: regex }, // Search by email
//                 { category: regex } // Search by category
//                 // Add more fields to search by if needed
//             ]
//         });

//         // Send the search results as a JSON response
//         res.json(dermatologists);
//         res.json(dentist);
//     } catch (err) {
//         // If an error occurs, send an error response
//         res.status(500).json({ message: 'Error performing search', error: err.message });
//     }
// });


// Search API endpoint to search for dermatologists and dentists
app.get('/search', async (req, res) => {
    try {
        // Extract the search query from the request query parameters
        const query = req.query.q;

        // Create a regex pattern to perform a case-insensitive search
        const regex = new RegExp(query, 'i');

        // Perform the search query to find dermatologists and dentists matching the search query
        const dermatologists = await Dermatologist.find({
            $or: [
                { name: regex }, // Search by dermatologist's name
                { address: regex }, // Search by address
                { category: regex } // Search by category
                // Add more fields to search by if needed
            ]
        });

        const dentists = await Dentist.find({
            $or: [
                { name: regex }, // Search by dentist's name
                { address: regex }, // Search by address
                { category: regex } // Search by category
                // Add more fields to search by if needed
            ]
        });

        // Combine the search results for dermatologists and dentists
        const searchResults = {
            dermatologists,
            dentists
        };

        // Send the search results as a JSON response
        res.json(searchResults);
    } catch (err) {
        // If an error occurs, send an error response
        res.status(500).json({ message: 'Error performing search', error: err.message });
    }
});



        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
