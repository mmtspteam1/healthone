// src/app/api/patients/[id]/route.ts

import dbConnect from '../../../../lib/dbConnect'; // Ensure this path is correct
import Patient from '../../../../models/Patient'; // Ensure this points to your Patient model

export async function GET(request, { params }) {
  const { id } = params;

  await dbConnect();

  try {
    const patient = await Patient.findById(id); // Find patient by ID
    if (!patient) {
      return new Response(JSON.stringify({ message: 'Patient not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(patient), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching patient' }), { status: 500 });
  }
}
