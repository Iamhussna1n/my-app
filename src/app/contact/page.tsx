'use client';

import { useState } from 'react';
import axios from 'axios';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', comment: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const sendMessage = async () => {
    // Clear previous messages
    setError('');
    setSuccess('');
    
    // Basic validation
    if (!form.name.trim() || !form.email.trim() || !form.comment.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('/api/users/comment', form);
      if (response.status === 201) {
        setSuccess('Message sent successfully!');
        setForm({ name: '', email: '', comment: '' });
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } catch (error: unknown) {
      console.error('Error sending message:', error);
      
      // Show specific error message from backend
      if (
        typeof error === 'object' && error !== null &&
        'response' in error &&
        typeof (error as { response?: unknown }).response === 'object' &&
        (error as { response: { data?: unknown } }).response.data &&
        typeof (error as { response: { data: { error?: unknown } } }).response.data === 'object' &&
        (error as { response: { data: { error?: unknown } } }).response.data.error
      ) {
        setError((error as { response: { data: { error: string } } }).response.data.error);
      } else if (
        typeof error === 'object' && error !== null &&
        'response' in error &&
        typeof (error as { response?: unknown }).response === 'object' &&
        (error as { response: { data?: unknown } }).response.data &&
        typeof (error as { response: { data: { details?: unknown } } }).response.data === 'object' &&
        (error as { response: { data: { details?: unknown } } }).response.data.details
      ) {
        setError(`Error: ${(error as { response: { data: { details: string } } }).response.data.details}`);
      } else {
        setError('An error occurred while sending your message. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-12">
        Have a question or want to work together? Reach out to me through this form or directly via email/phone below.
      </p>

      {/* Contact Info */}
      <div className="text-center mb-12 space-y-2">
        <p className="text-lg">
          📧 Email: <a href="mailto:husnainawan324@gmail.com" className="underline text-blue-500">husnainawan324@gmail.com</a>
        </p>
        <p className="text-lg">
          📧 Email: <a href="mailto:hassnainawan.official@gmail.com" className="underline text-blue-500">hassnainawan.official@gmail.com</a>
        </p>
        <p className="text-lg">
          📞 Phone: <a href="tel:+92074690860" className="underline text-blue-500">+92-07-4690860</a>
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        {/* Success Message */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {success}
          </div>
        )}

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white outline-none"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white outline-none"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white outline-none"
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition disabled:opacity-50"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </div>
  );
}
