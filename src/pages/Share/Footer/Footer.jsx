import React from 'react';


const Footer = () => {
    return (
        <> 
        <footer className="mt-5 footer p-10 bg-black text-white">
  <div>
    <img className='w-[250px] h-[200px]' src="https://www.shutterstock.com/image-vector/cartoon-illustration-cheerful-chef-cook-260nw-791305150.jpg" alt="" />
    
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Pres kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie polisy</a>
  </div>

  
</footer>
</>
    );
};

export default Footer;