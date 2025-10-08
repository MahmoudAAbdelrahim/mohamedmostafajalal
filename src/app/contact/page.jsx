'use client';

import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name:'', email:'', phone:'', message:'' });
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage({ text: '', type: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');

      setStatusMessage({ text: '✅ Message sent successfully!', type: 'success' });
      setFormData({ name:'', email:'', phone:'', message:'' });
    } catch (err) {
      console.error(err);
      setStatusMessage({ text: '❌ Failed to send. Try again later.', type: 'error' });
    } finally {
      setSending(false);
      setTimeout(() => setStatusMessage({ text: '', type: '' }), 5000); // يخفي الرسالة بعد 5 ثواني
    }
  };

  return (
    <section id="contact" className="bg-[#0a0f1a] text-white py-16 px-6 md:px-12 flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
      {/* الفورم */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-teal-400 mb-4">Contact Me</h2>

        {statusMessage.text && (
          <div
            className={`px-4 py-3 rounded-lg mb-4 ${
              statusMessage.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <input name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name" className="bg-[#151f30] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" />
        <input name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="Your Email" className="bg-[#151f30] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone (optional)" className="bg-[#151f30] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400" />
        <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Your Message" className="bg-[#151f30] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 min-h-[120px]" />
        <button type="submit" disabled={sending} className="bg-teal-400 text-[#0a0f1a] px-6 py-3 rounded-lg font-semibold hover:bg-teal-500 transition-all duration-300 mt-2">
          {sending ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {/* معلومات الاتصال الجانبية */}
      <div className="flex-1 flex flex-col gap-6 text-white">
        <h3 className="text-2xl font-bold text-teal-400">Contact Info</h3>
        <div className="flex items-center gap-3"><FaEnvelope className="text-teal-400 text-xl" /><span>mohamedmostafajalal@gmail.com</span></div>
        <div className="flex items-center gap-3"><FaPhone className="text-teal-400 text-xl" /><span>+20 01010721434</span></div>
        <p className="text-white/70">
          You can also reach me via email or phone. Send me a message and I’ll respond as soon as possible!
        </p>
      </div>
    </section>
  );
}
