const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-6 px-8 border-t border-slate-100 bg-white/50 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
        <div className="text-sm">
          © {currentYear} <span className="font-semibold text-[#4B0082]">Dominion City IT Division</span>. 
          <span className="hidden sm:inline"> Raising Leaders that Transform Society.</span>
        </div>
        
        <div className="flex gap-6 text-xs font-medium uppercase tracking-wider">
          <a href="#" className="hover:text-[#4B0082] transition-colors">Support</a>
          <a href="#" className="hover:text-[#4B0082] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#4B0082] transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;