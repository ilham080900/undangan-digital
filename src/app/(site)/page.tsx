import Image from "next/image";
import router from "next/router";
import Cover from "../../../components/cover";
import Link from "next/link";
export default function Home() {
  return (
    <div className='flex flex-col items-center'>
        <div className=" w-full h-screen">
          <Image
            className="bg-cover -z-10 filter: sepia(50%)" 
            src="/images/wedding cover.jpg"
            alt="background image"
            fill={true}
          />
            <Cover />
      </div>
    </div>
  );
}
