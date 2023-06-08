import Image from "next/image";
import Email from "./Email";
import Github from "./Github";
export default function Hero() {
  return (
    <div>
      <div className="hero flex  min-h-screen items-center justify-center bg-base-200">
        <div className="hero-content mx-72 flex flex-row items-center justify-center ">
          <Image
            src="/1679981229132.jpeg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="me"
            width={500}
            height={500}
          />
          <div>
            <h1 className="text-5xl font-bold">
              hi <br></br> i&apos;m <span className="underline">noyan</span>
            </h1>
            <p className="py-3 text-xl">
              i&apos;m a recent Computer Engineering graduate and a junior
              full-stack developer.
            </p>
            <p>
              mail me at <Email />
            </p>
            <p>
              check out my github at <Github />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
