import Container from "./Container";

const Footer = () => {
  return (
    <footer className='mt-12 mb-8'>
      <Container className='flex justify-between items-center gap-4'>
        <p className='text-sm'>QuickBill &copy; {new Date().getFullYear()}</p>
        <p className='text-sm'>
          Created by Abdullahi Onikoko with Next.js, Xata, and Clerk
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
