const Footer = () => {
  return (
   <div className="bg-gray-50 mt-24">
      <h3 className="text-3xl font-bold pt-20 text-center mb-3">Gadget Heaven</h3>
      <p className="mb-8 text-center">Leading the way in cutting-edge technology and innovation.</p>
      <hr />
     <footer className="footer sm:footer-horizontal   p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
   </div>
  );
};

export default Footer;
