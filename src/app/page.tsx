import { Inter } from 'next/font/google';

const fontInter = Inter();

export default function Home() {



  return (
    <div>
      <p className={`text-yellow-500 text-9xl ${fontInter.className}`}>Hello World</p>
    </div>
  );
}
