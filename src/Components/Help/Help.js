import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Help = () => {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [contactForm, setContactForm] = useState({ subject: '', message: '' });

  const faqs = [
    {
      id: 1,
      question: "How do I track my order?",
      answer: "You can track your order in real-time from the 'My Orders' section. Tap on any active order to see its current status and estimated delivery time."
    },
    {
      id: 2,
      question: "What payment methods are accepted?",
      answer: "We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery (COD). You can also use wallet payments through popular digital wallets."
    },
    {
      id: 3,
      question: "How do I cancel my order?",
      answer: "You can cancel your order within 2 minutes of placing it. Go to 'My Orders', select the order, and tap 'Cancel Order'. After the restaurant starts preparing, cancellation may not be possible."
    },
    {
      id: 4,
      question: "What if my order is delayed?",
      answer: "If your order is taking longer than expected, you can track it in real-time. For significant delays, our support team will automatically notify you and may offer compensation."
    },
    {
      id: 5,
      question: "How do I apply a promo code?",
      answer: "During checkout, you'll see an 'Apply Coupon' option. Enter your promo code there, and if valid, the discount will be applied to your order total."
    },
    {
      id: 6,
      question: "Is my food safe during delivery?",
      answer: "Yes! All our delivery partners use insulated bags to keep food at the right temperature. We also have contactless delivery options for your safety."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.');
    setContactForm({ subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Help & Support</h1>
            <p className="text-gray-400 text-sm">We're here to help</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button className="glass rounded-xl p-4 text-center hover:bg-gray-800/50 transition-colors group">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-orange-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📦</div>
            <span className="text-white text-sm font-medium">Track Order</span>
          </button>
          <button className="glass rounded-xl p-4 text-center hover:bg-gray-800/50 transition-colors group">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">💬</div>
            <span className="text-white text-sm font-medium">Live Chat</span>
          </button>
          <button className="glass rounded-xl p-4 text-center hover:bg-gray-800/50 transition-colors group">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📞</div>
            <span className="text-white text-sm font-medium">Call Us</span>
          </button>
          <button className="glass rounded-xl p-4 text-center hover:bg-gray-800/50 transition-colors group">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📧</div>
            <span className="text-white text-sm font-medium">Email</span>
          </button>
        </div>

        {/* FAQ Section */}
        <div className="glass rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">❓</span> Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-800 last:border-0">
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full py-4 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === faq.id && (
                  <div className="pb-4 text-gray-400 text-sm leading-relaxed animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">✉️</span> Contact Support
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Subject</label>
              <select 
                value={contactForm.subject}
                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                required
              >
                <option value="">Select a topic</option>
                <option value="order">Order Issue</option>
                <option value="payment">Payment Problem</option>
                <option value="delivery">Delivery Concern</option>
                <option value="account">Account Help</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea 
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                placeholder="Describe your issue or question..."
                rows={4}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none resize-none"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>📞 Customer Support: 1800-FLAVOURS (24/7)</p>
          <p className="mt-1">📧 support@flavours.com</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
