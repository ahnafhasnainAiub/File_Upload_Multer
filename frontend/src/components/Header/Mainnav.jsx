
import logo from './Assests/Logo.png'
import { NavLink } from 'react-router-dom';

function Mainnav() {
  
  
  // function Menu(e) {
   
  //   e.name === "menu"
  //     ? ((e.name = "close"),
  //       list.classList.add("top-[80px]"),
  //       list.classList.add("opacity-100"))
  //     : ((e.name = "menu"),
  //       list.classList.remove("top-[80px]"),
  //       list.classList.remove("opacity-100"));
  // }
  
  
  return (
  
    <div>

        


     <nav className="p-5 bg-white md:flex md:items-center md:justify-between md:container">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[Poppins] cursor-pointer">
            <img src={logo} alt="Company Logo" />
          </span>

          <span className="text-2xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu" onclick="Menu(this)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_2_18890)">
<path d="M22.5 21H1.50001C0.671548 21 0 20.3284 0 19.5C0 18.6716 0.671548 18 1.50001 18H22.5C23.3285 18 24.0001 18.6716 24.0001 19.5C24 20.3284 23.3285 21 22.5 21Z" fill="#002B4F"/>
<path d="M22.5 13.5H1.50001C0.671548 13.5 0 12.8284 0 12C0 11.1716 0.671548 10.5 1.50001 10.5H22.5C23.3285 10.5 24.0001 11.1715 24.0001 12C24.0001 12.8285 23.3285 13.5 22.5 13.5Z" fill="#002B4F"/>
<path d="M22.5 6.00002H1.50001C0.671548 6.00002 0 5.32847 0 4.50001C0 3.67155 0.671548 3 1.50001 3H22.5C23.3285 3 24.0001 3.67155 24.0001 4.50001C24.0001 5.32847 23.3285 6.00002 22.5 6.00002Z" fill="#002B4F"/>
</g>
<defs>
<clipPath id="clip0_2_18890">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
              </svg>
            </ion-icon>
          </span>
        </div>

        <ul
          className="md:text-black md:font-medium md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-6 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-490 md:text-bold"
        >
          <li className="mx-4 my-5 md:my-0 d">
            <NavLink to="/" className="text-2xl hover:text-cyan-500 duration-400" >HOME</NavLink>
          </li>
          <li className="mx-4 my-5 md:my-0">
          <NavLink to="/service" className="text-2xl hover:text-cyan-500 duration-400" >SERVICE</NavLink>
          </li>
          <li className="mx-4 my-5 md:my-0">
          <NavLink to="/projects" className="text-2xl hover:text-cyan-500 duration-400" >PROJECTS</NavLink>
          </li>
          <li className="mx-4 my-5 md:my-0">
            <a href="#" className="text-2xl hover:text-cyan-500 duration-400"
              >WHY MEDIUSWARE</a
            >
          </li>
          <li className="mx-4 my-5 md:my-0">
          <NavLink to="/member" className="text-2xl hover:text-cyan-500 duration-400" >BLOG</NavLink>
          </li>
          {/* <li className="mx-4 my-5 md:my-0">
            <a href="#" className="text-2xl hover:text-cyan-500 duration-400"
              >CAREER</a
            >
          </li> */}
          <li className="mx-4 my-5 md:my-0">
          <NavLink to="/team" className="text-2xl hover:text-cyan-500 duration-400" >OUR TEAM</NavLink>
          </li>

          <li className="flex gap-6 mr-[32px] duration-500">
            <button
              type="button"
              className="bg-[#0060af] text-white p-2 rounded-md whitespace-nowrap"
            ><div className='flex gap-2'>
                  <div><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0497 5C14.0264 5.19057 14.924 5.66826 15.6277 6.37194C16.3314 7.07561 16.8091 7.97326 16.9997 8.95M13.0497 1C15.0789 1.22544 16.9713 2.13417 18.4159 3.57701C19.8606 5.01984 20.7717 6.91101 20.9997 8.94M9.22664 12.8631C8.02506 11.6615 7.07627 10.3028 6.38028 8.85323C6.32041 8.72854 6.29048 8.66619 6.26748 8.5873C6.18576 8.30695 6.24446 7.96269 6.41447 7.72526C6.46231 7.65845 6.51947 7.60129 6.63378 7.48698C6.98338 7.13737 7.15819 6.96257 7.27247 6.78679C7.70347 6.1239 7.70347 5.26932 7.27247 4.60643C7.15819 4.43065 6.98338 4.25585 6.63378 3.90624L6.43891 3.71137C5.90747 3.17993 5.64174 2.91421 5.35636 2.76987C4.7888 2.4828 4.11854 2.4828 3.55098 2.76987C3.2656 2.91421 2.99987 3.17993 2.46843 3.71137L2.3108 3.86901C1.78117 4.39863 1.51636 4.66344 1.31411 5.02348C1.08969 5.42298 0.928332 6.04347 0.929696 6.5017C0.930924 6.91464 1.01103 7.19687 1.17124 7.76131C2.03221 10.7947 3.65668 13.6571 6.04466 16.045C8.43264 18.433 11.295 20.0575 14.3284 20.9185C14.8928 21.0787 15.1751 21.1588 15.588 21.16C16.0462 21.1614 16.6667 21 17.0662 20.7756C17.4263 20.5733 17.6911 20.3085 18.2207 19.7789L18.3783 19.6213C18.9098 19.0898 19.1755 18.8241 19.3198 18.5387C19.6069 17.9712 19.6069 17.3009 19.3198 16.7333C19.1755 16.448 18.9098 16.1822 18.3783 15.6508L18.1835 15.4559C17.8339 15.1063 17.6591 14.9315 17.4833 14.8172C16.8204 14.3862 15.9658 14.3862 15.3029 14.8172C15.1271 14.9315 14.9523 15.1063 14.6027 15.4559C14.4884 15.5702 14.4313 15.6274 14.3644 15.6752C14.127 15.8453 13.7828 15.904 13.5024 15.8222C13.4235 15.7992 13.3612 15.7693 13.2365 15.7094C11.7869 15.0134 10.4282 14.0646 9.22664 12.8631Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg></div>  
                   <div>
                   <NavLink to="/contact" className="">Book a Call</NavLink>
                   </div>
                
            </div>
            
            </button>
          </li>
        </ul>
     </nav>


    </div>
  )
}

export default Mainnav