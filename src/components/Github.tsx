import Image from "next/image";
const Github = () => {
  return (
    <a
      href="https://github.com/noyandogane"
      className=" flex flex-row rounded-md items-center  text-white shadow-md hover:bg-primary-focus"
    >
      <Image
        className="m-1"
        src="/github-mark-white.png"
        alt={""}
        width={25}
        height={20}
      ></Image>
      noyandogane
    </a>
  );
};

export default Github;
