import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="grid sm:grid-cols-2 h-[70vh] py-1 ">

        <div className=" bg-purple-100 flex flex-col gap-4 items-center justify-center text-center">
          <p className="text-4xl font-bold font-serif">The best url shortner in market</p>
          <p className=" px-11 text-2xl text-center font-medium">We are best url shortner in the word. In most of url's shortner you have to login but we understand your needs you can shorten your urls easily</p>

          <li className='flex gap-3'>
            <Link href="/Shorten"><button className='bg-purple-500 rounded-lg p-3 py-1 font-bold text-white'>Try now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg p-3 py-1 font-bold text-white'>Github</button></Link>
          </li>

        </div>

        <div className="flex justify-start relative">
          <Image alt="image of vector" src={"/vector.jpg"} fill={true} />

        </div>

      </section>
    </main>
  );
}
