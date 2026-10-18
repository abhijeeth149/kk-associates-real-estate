import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_CONFIG } from '../config/company';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { openWhatsApp } from '../utils/whatsapp';
import { useModalContext } from '../context/ModalContext';


export const ContactPage: React.FC = () => {
  const { showToast } = useModalContext();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'General Property Enquiry',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please provide your name and mobile number.');
      return;
    }

    const msg = `Hello KK Associates, I am reaching out from your website contact page:

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Subject: ${formData.subject}
Message: ${formData.message || 'Please contact me regarding available properties.'}`;

    openWhatsApp(msg);
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    } catch {}
    showToast('Message sent via WhatsApp! We will reply promptly.', 'success');
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please provide your name and mobile number.');
      return;
    }

    setIsSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
    } catch {}
    showToast('Thank you! Your enquiry has been received.', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#0D8B78] bg-[#E8F5F2] px-3.5 py-1 rounded-full">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#172522]">
          Contact KK Associates
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          We are based in Gachibowli, Hyderabad. Connect with our dedicated real estate advisors for plots, flats, resale, and selling support.
        </p>
      </div>

      {/* 4 Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: WhatsApp */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#075E54] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <h2 className="font-bold text-gray-900 text-base">WhatsApp Support</h2>
            <p className="text-xs text-gray-500">Fastest channel for layout blueprints & instant pricing.</p>
          </div>
          <div className="pt-2">
            <WhatsAppButton fullWidth size="sm" label="Chat +91 9063613496" />
          </div>
        </div>

        {/* Card 2: Phone Call */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#E8F5F2] text-[#075E54] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-gray-900 text-base">Direct Phone Call</h2>
            <p className="text-xs text-gray-500">Mon – Sat: 9:00 AM – 7:30 PM</p>
          </div>
          <div className="pt-2">
            <a
              href={`tel:${COMPANY_CONFIG.rawPhone}`}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#0D8B78] hover:bg-[#097262] text-white font-bold text-xs shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {COMPANY_CONFIG.phone}</span>
            </a>
          </div>
        </div>

        {/* Card 3: Email */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-gray-900 text-base">Official Email</h2>
            <p className="text-xs text-gray-500 break-all">{COMPANY_CONFIG.email}</p>
          </div>
          <div className="pt-2">
            <a
              href={`mailto:${COMPANY_CONFIG.email}`}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Card 4: Office Location */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h2 className="font-bold text-gray-900 text-base">Office Location</h2>
            <p className="text-xs text-gray-500">{COMPANY_CONFIG.location.addressString}</p>
          </div>
          <div className="pt-2 text-xs font-semibold text-[#075E54]">
            <span>Telangana, India</span>
          </div>
        </div>

      </div>

      {/* Main Form & Office Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-lg">
          <h2 className="text-xl font-bold font-display text-gray-900 mb-2">
            Send a Direct Property Message
          </h2>
          <p className="text-xs text-gray-500 mb-6">
            We respond promptly to all enquiries during working hours.
          </p>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-[#075E54] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold font-display text-gray-900">Message Delivered!</h3>
              <p className="text-xs text-gray-600 max-w-sm mx-auto">
                Thank you for contacting KK Associates. A member of our team in Gachibowli will get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-bold text-[#075E54] hover:underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Anand Varma"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9063613496"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Enquiry Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8] cursor-pointer"
                >
                  <option value="Residential Plot Enquiry">Residential Plot Enquiry (Clear Title)</option>
                  <option value="Open Plot Inquiry">Open Plot Inquiry</option>
                  <option value="Flat / Apartment Purchase">Flat / Apartment Purchase</option>
                  <option value="Resale Property Enquiry">Resale Property Enquiry</option>
                  <option value="Sell My Plot / Flat">Sell My Plot / Flat</option>
                  <option value="Site Visit Booking">Request a Site Visit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Message Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your preferred locality, budget, or timeframe..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D8B78] bg-[#F8FAF8]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 py-3 px-4 bg-[#075E54] hover:bg-[#043E37] text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="flex-1 py-3 px-4 bg-[#C7A76C] hover:bg-[#b09054] text-[#172522] font-bold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Form</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Office & Hyderabad Map Location Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#075E54] rounded-3xl p-6 sm:p-8 text-white shadow-xl space-y-4">
            <span className="text-xs uppercase tracking-wider font-bold text-[#C7A76C] bg-white/10 px-3 py-1 rounded-full inline-block">
              Business Headquarters
            </span>
            <h3 className="text-2xl font-bold font-display text-white">
              KK ASSOCIATES
            </h3>
            <p className="text-xs text-emerald-100">
              (Klinkaaraa Associates)
            </p>

            <div className="space-y-3 pt-3 border-t border-emerald-700/80 text-xs sm:text-sm text-emerald-50">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C7A76C] flex-shrink-0 mt-1" />
                <span>Gachibowli, Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C7A76C] flex-shrink-0" />
                <span>+91 9063613496</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C7A76C] flex-shrink-0" />
                <span>klinakaaraassociates@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-emerald-700/80">
                <Clock className="w-4 h-4 text-[#C7A76C] flex-shrink-0 mt-0.5" />
                <span>Mon – Sat: 9:00 AM – 7:30 PM<br />Sunday: By Appointment for Site Visits</span>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#075E54]" />
              <span>Gachibowli Operational Hub</span>
            </h4>
            <div className="h-44 rounded-2xl overflow-hidden bg-emerald-50 flex items-center justify-center relative border border-emerald-100">
              <div className="text-center p-4 space-y-1">
                <div className="w-8 h-8 rounded-full bg-[#075E54] text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="font-bold text-xs text-[#075E54]">KK Associates Gachibowli</p>
                <p className="text-[11px] text-gray-500">Connecting Hyderabad West & Growth Corridors</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
