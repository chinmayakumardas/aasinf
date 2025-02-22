
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input"; // Shadcn UI input component
import { Button } from "@/components/ui/button"; // Shadcn UI button component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Card components from Shadcn UI
import { Textarea } from "@/components/ui/textarea"; // Shadcn UI Textarea
import { useDispatch } from 'react-redux';
import { applyForJob } from '@/redux/slices/careerSlice';
//import { useToast } from "@/hooks/toast-container";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    gender: '',
    dateOfBirth: '',
    passoutYear: '',
    highestQualification: '',
    yearOfExperience: '',
    address: '',
    skills: '',
    role: '',
  });

  const [resume, setResume] = useState(null); 
  const dispatch = useDispatch();
  const router = useRouter();
  //const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSubmit = new FormData();
      // Append the form fields to FormData
      for (const key in formData) {
        formDataToSubmit.append(key, formData[key]);
      }
      // Append the resume file
      if (resume) {
        formDataToSubmit.append('uploadYourResume', resume);
        formDataToSubmit.append('resumeMimeType', resume.type);
      }

      // Dispatch the applyForJob action
      await dispatch(applyForJob(formDataToSubmit));
      console.log("Applicat data",formData)
      // toast({
      //   description: "Job Applied Successfully!",
      // });
      
      router.push('/career'); // Redirect after successful submission
    } catch (error) {
      console.error(error);
      // toast({
      //   description: "Error while applying!",
      // });
    }
  };

  return (
    <div className="mx-auto p-6 space-y-4">
    <Card>
      <CardHeader>
        <CardTitle>Apply for Job</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Column 1: Left side */}
          <div className="space-y-4">
            <Input 
              name="fullName" 
              placeholder="Full Name" 
              value={formData.fullName} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <Input 
              name="email" 
              placeholder="Email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <div className="flex mb-4">
              <Input 
                name="contact" 
                placeholder="Phone Number" 
                type="tel" 
                value={formData.contact} 
                onChange={handleChange} 
                className="w-full p-3 border rounded-md flex-grow"
              />
            </div>
            <Input 
              name="dateOfBirth" 
              placeholder="Date of Birth" 
              type="date" 
              value={formData.dateOfBirth} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <Textarea 
              name="address" 
              placeholder="Address" 
              value={formData.address} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
          </div>
  
          {/* Column 2: Right side */}
          <div className="space-y-4">
            {/* Gender Dropdown */}
            <div>
              <select 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                className="w-full p-3 border rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
  
            {/* Year of Experience Dropdown */}
            <div>
              <select 
                name="yearOfExperience" 
                value={formData.yearOfExperience} 
                onChange={handleChange} 
                className="w-full p-3 border rounded-md"
              >
                <option value="">Select Experience</option>
                <option value="0-1">0-1 Years</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>
            </div>
  
            {/* Year of Passing as a dropdown with only years */}
            <div>
              <select 
                name="passoutYear" 
                value={formData.passoutYear} 
                onChange={handleChange} 
                className="w-full p-3 border rounded-md"
              >
                <option value="">Select Year</option>
                {[...Array(30).keys()].map(i => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year}>{year}</option>;
                })}
              </select>
            </div>
  
            <Input 
              name="highestQualification" 
              placeholder="Highest Qualification" 
              value={formData.highestQualification} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <Textarea 
              name="skills" 
              placeholder="Key Skills" 
              value={formData.skills} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
            <Input 
              name="role" 
              placeholder="Role" 
              value={formData.role} 
              onChange={handleChange} 
              className="w-full p-3 border rounded-md" 
            />
  
            {/* Resume Upload */}
            <input 
              type="file" 
              name="uploadYourResume" 
              onChange={handleFileChange} 
              accept=".pdf,.docx,.txt" 
              className="w-full p-3 border rounded-md" 
            />
          </div>
  
          {/* Submit Button */}
          <div className="col-span-2 flex justify-center mt-6">
            <Button type="submit" className="w-full sm:w-auto max-w-sm">
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  </div>
  
  );
}
