const Footer = () => {
  return (
    <footer className='mt-12 mb-8'>
      <p className='text-sm'>QuickBill &copy; {new Date().getFullYear()}</p>
      <p className='text-sm'>
        Created by Abdullahi Onikoko with Next.js, Xata, and Clerk
      </p>
    </footer>
  );
};

export default Footer;
