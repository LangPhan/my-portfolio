import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <header className="h-12 flex justify-between items-center mx-10 z-10 sticky top-0">
      <div className="logo gradientText lg:text-2xl text-lg">Lang Portfolio</div>
      <div
        className="social gradientText text-xl
           flex justify-around items-center lg:w-[15%] w-fit h-full"
      >
          <SocialIcon network="facebook" bgColor="white" style={{height:36, width:36}}/>
          <SocialIcon network="linkedin" bgColor="white" style={{height:36, width:36}}/>
          <SocialIcon network="github" bgColor="white" style={{height:36, width:36}}/>
          <SocialIcon network="email" bgColor="white" style={{height:36, width:36}}/>
      </div>
    </header>
  );
}

export default Header;
