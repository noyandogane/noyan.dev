import Image from "next/image";
const Github = () => {
  return (
    <a
      href="github.com/noyandogane"
      className=" flex flex-row rounded-md   text-white shadow-md hover:bg-primary-focus"
    >
      <Image
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
