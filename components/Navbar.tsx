import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
      <h1 style={{ color: "#000000", fontSize: "32px", fontWeight: "bold" }}>TripTires</h1>
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles="bg-primary-blue text-white rounded-full mt-2.5"
      />
    </nav>
  </header>
);

export default NavBar;
