import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      {/* Main Footer Content */}
      <div className="footer p-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        
        {/* Brand Section */}
        <aside className="max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-primary p-2 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">House<span className="text-primary">Rent</span></h2>
          </div>
          <p className="opacity-80">
            Finding your dream home made easy. We provide the best rental properties at the most affordable prices.
          </p>
          <div className="mt-4 font-semibold text-primary">
            Email: <span className="text-neutral-content font-normal">info@houserent.com</span>
          </div>
        </aside>

        {/* Quick Links */}
        <nav>
          <h6 className="footer-title opacity-100 text-white">Property Types</h6>
          <a className="link link-hover">Apartment</a>
          <a className="link link-hover">Family House</a>
          <a className="link link-hover">Modern Villa</a>
          <a className="link link-hover">Studio Flat</a>
        </nav>

        {/* Company Section */}
        <nav>
          <h6 className="footer-title opacity-100 text-white">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">All Listings</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Contact</a>
        </nav>

        {/* Newsletter / Social */}
        <div className="flex flex-col gap-4">
          <h6 className="footer-title opacity-100 text-white">Subscribe to Newsletter</h6>
          <fieldset className="form-control w-80">
            <div className="join">
              <input type="text" placeholder="username@site.com" className="input input-bordered join-item w-full bg-white text-black" />
              <button className="btn btn-primary join-item">Join</button>
            </div>
          </fieldset>
          
          <div className="mt-2">
             <h6 className="footer-title opacity-100 text-white mb-3">Follow Us</h6>
             <div className="grid grid-flow-col gap-4 w-fit">
                {/* Facebook Icon */}
                <a className="hover:text-primary transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                </a>
                {/* Twitter Icon */}
                <a className="hover:text-primary transition-colors cursor-pointer">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                </a>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer (Copyright) */}
      <div className="border-t border-base-100 py-6">
        <div className="max-w-7xl mx-auto px-10 text-center opacity-60 text-sm">
          <p>© {new Date().getFullYear()} HouseRent Properties Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;