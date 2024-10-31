# HealthOne

![HealthOne Logo](/public/assets/logo.png) <!-- Replace with your logo link -->


## Overview
**HealthOne** is an innovative healthcare platform that empowers users with seamless access to medical consultations, an integrated pharmacy service, and an AI-driven health assistant. Our mission is to enhance healthcare accessibility through technology, enabling users to receive timely support and treatment, all from the comfort of their homes.

## Features
- **AI Bot**: An intelligent chatbot providing preliminary health assessments, answering questions, and directing users to appropriate resources.
- **Video Conferencing**: Engage in real-time consultations with healthcare professionals, ensuring a personal and interactive experience{on development}.
- **Pharmacy Integration**: Order medications directly through the platform, facilitating easy access to necessary prescriptions and ensuring timely delivery.


## Technologies Used
- **Frontend**: JavaScript, Next.js, React, Tailwind CSS
- **Backend**: MongoDB (for data storage and retrieval)
- **Email Service**: EmailJS (for notifications and confirmations)
  
  HealthOne is a comprehensive healthcare management application designed for both doctors and patients, focusing on secure and decentralized health data management. This platform allows doctors and patients to seamlessly interact in a secure environment, where patient data is easily accessible but remains confidential and protected.

Key Features
Doctor and Patient Portals: Separate dashboards for doctors and patients, providing relevant features tailored to each user type.
Medical History & Records: Doctors can access and manage patient medical history, helping streamline care and treatment.
Patient Consent Management: Patients control data sharing, ensuring their information is accessed securely and only with consent.
AI-Assisted Interaction: Patients can interact with an AI bot to manage appointments, receive prescriptions, and get personalized health assistance.
Blockchain Integration: Patient data is securely managed through blockchain/IPFS for decentralized storage, enhancing privacy and data integrity.
Role-Based Authentication: Using NEAR Protocol with NextAuth and Clerk, HealthOne supports secure login and personalized access based on user roles.

## How to Integrate HealthOne

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Frontend Setup
To get started with the frontend, install the necessary npm packages:

```bash
npm install next react react-dom tailwindcss emailjs-com
```

### Example Code

#### Setting Up the AI Bot
```javascript
import React from 'react';
import { AiBot } from 'your-ai-library'; // Update with actual AI bot library import

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Welcome to HealthOne</h1>
      <AiBot />
    </div>
  );
}
```

#### Setting Up a Video Consultation Button
```javascript
import React from 'react';
import { VideoConsultationButton } from 'your-video-library'; // Update with actual video library import

export default function App() {
  const handleConsultation = (data) => {
    // Handle successful consultation
    console.log(data);
  };

  return (
    <VideoConsultationButton onCompleted={handleConsultation} />
  );
}
```

### Backend Setup
To set up your backend, make sure you have MongoDB configured.

1. **Connect to MongoDB**:
   - Follow the [MongoDB documentation](https://docs.mongodb.com/manual/installation/) for installation instructions.
   
2. **Define your Data Models**:
   - Use Mongoose or your preferred library to define schemas for users and consultations.

3. **Example User Schema**:
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Add more fields as necessary
});

const User = mongoose.model('User', userSchema);
module.exports = User;
```

### Deploying Your Application
Deploy your Next.js application using platforms like Vercel or Netlify. Ensure you configure your environment variables for production to enhance security.

### Contact
For support or inquiries, please contact:
- Email: [mmtspteam1@gmail.com](mailto:mmtspteam1@gmail.com)
- GitHub: [healthone](https://github.com/mmtspteam1/healthone)

## Demo
Experience how HealthOne works with our demo application [here](https://healthone-xi.vercel.app/).

## Submission Information
To ensure proper integration of your application, please have the following information ready for submission:
- App Name: HealthOne
- App URL: [Your App URL]
- App Icon: [https://healthone-xi.vercel.app/]
- App Logo: [\public\assets\logo.png]
- Brief description of the application and its features.

## Development Modes
- **Development Mode**: Allows testing with all features enabled but limited to mock data.
- **Production Mode**: Full feature access with real data, suitable for end-users.

## License
MIT License
