import React, { FC, useState } from 'react';

interface Job {
  jobTitle: string;    // Job title
  category: string; // Job category
}

interface FormProps {
  job: Job; // Define this based on your job object structure
  onSubmit: (job: Job, formData: FormData) => void; // Expecting a job object and form data
}

const Form: React.FC<FormProps> = ({ job, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    age: '',
    phone: '',
    state: '',
  });
  
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Basic validation
    if (!formData.name || !formData.id || !formData.age || !formData.phone || !formData.state) {
      setError('All fields are required.');
      return;
    }

    // Ensure age is a positive integer and not a decimal
    const age = formData.age;
    const ageAsNumber = Number(age);
  
    if (!/^\d+$/.test(age) || ageAsNumber <= 0) {
      setError('Age must be a positive whole number.');
      return;
    }

    if (ageAsNumber <= 17) {
      setError('You must be at least 18 years old to apply for this job.');
      return;
    }

    // Create FormData object
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('jobCategory', job.category); 
    formDataToSubmit.append('jobTitle', job.jobTitle);
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('id', formData.id);
    formDataToSubmit.append('age', formData.age);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('state', formData.state);
  
    // Clear error and submit the form
    setError('');
    onSubmit(job, formDataToSubmit);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">

      {/* Display Job Title and Category only on small devices */}
      <h2 className="text-lg font-semibold mb-4 sm:block">
        Applying for: {job.jobTitle} ({job.category})
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            Identification Number
          </label>
          <input
            type="text"
            maxLength={12}
            id="id"
            name="id"
            placeholder="Identification Number"
            value={formData.id}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Your Age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="">Select a state</option>
            <option value="Johor">Johor</option>
            <option value="Kedah">Kedah</option>
            <option value="Kelantan">Kelantan</option>
            <option value="Malacca">Malacca</option>
            <option value="Negeri Sembilan">Negeri Sembilan</option>
            <option value="Pahang">Pahang</option>
            <option value="Penang">Penang</option>
            <option value="Perak">Perak</option>
            <option value="Perlis">Perlis</option>
            <option value="Sabah">Sabah</option>
            <option value="Sarawak">Sarawak</option>
            <option value="Selangor">Selangor</option>
            <option value="Terengganu">Terengganu</option>
            <option value="Wilayah Persekutuan Kuala Lumpur">Wilayah Persekutuan Kuala Lumpur</option>
            <option value="Wilayah Persekutuan Labuan">Wilayah Persekutuan Labuan</option>
            <option value="Wilayah Persekutuan Putrajaya">Wilayah Persekutuan Putrajaya</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
