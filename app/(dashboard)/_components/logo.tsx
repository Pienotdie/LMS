import Image from "next/image";

export const Logo = () => {
     return (
          <Image 
               height={200}
               width={250}
               alt="logo"
               src="/logo.svg"
          /> 
     )
}