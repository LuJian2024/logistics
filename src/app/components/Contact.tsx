"use client"; // This is a client component

import { sendMail } from '@/lib/mailer';
import { useForm } from 'react-hook-form';
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { isSubmitting,errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendMail({
        from: process.env.NEXT_PUBLIC_EMAIL_FROM, 
        // to: 'jian.lu.ou@gmail.com', 
        to: 'julijana3uneva@gmail.com', 
        subject: `New Contact Form Submission from ${data.name}`,
        text: `
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone}
          Message: ${data.message}
        `,
        attachments: [] // Add any attachments if needed
      });
      
      alert('Message sent successfully!');
      reset(); // reset the form after successful submission
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again.');
    }
  };


  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-2">Let's partner up</h2>
      <p className="text-lg mb-6">Let's level up your brand, together.</p>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        
        <div>
          <label htmlFor="phone" className="block mb-1">Phone</label>
          <div className="flex">
          {/* <select 
              className="p-2 border border-gray-300 rounded-l bg-gray-100"
              {...register('phoneCountry')}
              defaultValue="US"
            >
              <option value="US">US ▼</option>
              <option value="UK">UK</option>
              <option value="CA">CA</option>
            </select> */}  
            <input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="+1 (555) 000-0000"
              className="flex-1 p-2 border border-gray-300 rounded-r"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-1">How can we help?</label>
          <textarea
            id="message"
            {...register('message')}
            rows={3}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
        >
         {isSubmitting ? 'Sending...' : 'Get started'}
        </button>
        
      </form>
      
      <div className="mt-8 text-center">
        <p className="text-sm">Peter email? hello@unititled.com</p>
      </div>
    </div>
  );
}