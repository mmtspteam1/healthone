// src/models/Patient.js

import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Age: { type: Number, required: true },
  Gender: { type: String, required: true },
  'Medical Condition ': { type: String, required: true },
  Medications: { type: String, required: true },
  Notes: { type: String, required: true },
  'Last checkup date': { type: Date, required: true },
  'Medication History': { type: String, required: true },
});

export default mongoose.models.Patient || mongoose.model('Patient', PatientSchema);
