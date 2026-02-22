import React from "react";

const ContactSection = () => {
 
  const localImage = "images/contact.jpg"; 
  

 

  return (
    <section className="relative h-80 md:h-96 text-white flex items-center justify-center overflow-hidden">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${localImage}')`,
          backgroundColor: "#111827", 
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
          Get In Touch
        </h2>
        <p className="mb-8 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
          Have questions or want to list your house? Contact us today!
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="min-w-[200px] p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <h3 className="font-bold text-blue-400">Phone</h3>
            <p className="">+880 1234 567890</p>
          </div>

          <div className="min-w-[200px] p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <h3 className="font-bold text-blue-400">Email</h3>
            <p className="">info@house-rent.com</p>
          </div>

          <div className="min-w-[200px] p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10">
            <h3 className="font-bold text-blue-400">Address</h3>
            <p className="">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;