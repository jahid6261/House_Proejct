import React from "react";
import { FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
  const phoneNumber = "+8801XXXXXXXXX";  
  const email = "jahidalam01741@gmail.com";    
  const whatsappNumber = "8801XXXXXXXXX"; 

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <div className="space-y-6">

        {/* Phone */}
        <div className="bg-base-200 p-4 rounded-lg flex items-center gap-4 shadow">
          <FiPhone className="text-2xl text-primary" />
          <div>
            <p className="font-semibold">Phone</p>
            <a href={`tel:${phoneNumber}`} className="text-blue-500 hover:underline">
              {phoneNumber}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="bg-base-200 p-4 rounded-lg flex items-center gap-4 shadow">
          <FiMail className="text-2xl text-primary" />
          <div>
            <p className="font-semibold">Email</p>
            <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
              {email}
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-base-200 p-4 rounded-lg flex items-center gap-4 shadow">
          <FiMessageCircle className="text-2xl text-green-500" />
          <div>
            <p className="font-semibold">WhatsApp</p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
