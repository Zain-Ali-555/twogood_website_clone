const Footer = () => {
  return (
    <>
      <div className="footer w-full h-screen">
        <div className="footerup w-full h-[80vh] flex items-center justify-between px-5">
          <div className="socialLinks flex flex-col gap-5">
            <h3 className="uppercase text-[.7rem] text-zinc-400">CONNECT WITH US</h3>
            <div className="links text-[.8rem]">
              <h5> Facebook</h5>
              <h5> Instagram</h5>
              <h5> Twitter</h5>
              <h5> LinkedIn</h5>
              <h5> YouTube</h5>
            </div>
          </div>
          <div className="logo flex flex-col justify-center pt-36 gap-20">
            <svg
              className="w-[30vw] h-[30vh]"
              viewBox="0 0 62 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.8316 0C42.9105 0 39.1501 1.59236 36.3775 4.42677C33.605 7.26119 32.0474 11.1055 32.0474 15.114C32.0474 19.1224 33.605 22.9667 36.3775 25.8011C39.1501 28.6355 42.9105 30.2279 46.8316 30.2279C50.7526 30.2279 54.513 28.6355 57.2856 25.8011C60.0582 22.9667 61.6158 19.1224 61.6158 15.114C61.6158 11.1055 60.0582 7.26119 57.2856 4.42677C54.513 1.59236 50.7526 0 46.8316 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M14.793 0C10.872 0 7.11154 1.59236 4.33897 4.42677C1.56639 7.26119 0.00878906 11.1055 0.00878906 15.114C0.00878906 19.1224 1.56639 22.9667 4.33897 25.8011C7.11154 28.6355 10.872 30.2279 14.793 30.2279C18.714 30.2279 22.4744 28.6355 25.247 25.8011C28.0196 22.9667 29.5772 19.1224 29.5772 15.114C29.5772 11.1055 28.0196 7.26119 25.247 4.42677C22.4744 1.59236 18.714 0 14.793 0Z"
                fill="currentColor"
              ></path>
              <path
                d="M36.9805 32.7422L32.0366 37.7963L56.6819 62.9913L61.6258 57.9372L36.9805 32.7422Z"
                fill="currentColor"
              ></path>
              <path
                d="M56.6836 32.7485L32.0383 57.9435L36.9822 62.9976L61.6275 37.8026L56.6836 32.7485Z"
                fill="currentColor"
              ></path>
              <path
                d="M4.94386 32.7464L0 37.8005L24.6453 62.9955L29.5892 57.9414L4.94386 32.7464Z"
                fill="currentColor"
              ></path>
              <path
                d="M24.647 32.7527L0.00170898 57.9477L4.94557 63.0018L29.5909 37.8068L24.647 32.7527Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="text-sm flex gap-5 justify-center text-zinc-400">
              <h5>&copy; Two Good Co. 2024</h5>
              <h5>Terms of Use</h5>
              <h5>Privacy Policy </h5>
            </div>
          </div>
          <div className="webLinks flex flex-col gap-5 text-right">
            <h3 className="uppercase text-[.7rem] text-zinc-400">THE NITTY GRITTIES</h3>
            <div className="links text-[.8rem]">
              <h5>Good Things FAQs</h5>
              <h5>Good Food FAQs</h5>
              <h5>Good places</h5>
              <h5>Pathways</h5>
              <h5>Careers</h5>
              <h5>Wholeslae</h5>
            </div>
          </div>
        </div>
        <div className="footerdown text-[.8rem] text-center px-[14.3rem]">
          <p>
            We are proud and privileged to have our home on this land, and to be
            able to continue the long tradition of community coming together
            around food, begun thousands of years ago by First Nations peoples.
            As we stand together on this unceded land, we acknowledge our First
            Nations people, are the original custodians of this land, and we
            recognise their deep connection to land, water, sky and community
            which continues today. We pay our deep respects to community elders,
            past, present and emerging, for they hold the memories, the
            traditions, the culture and hopes of Aboriginal and Torres Strait
            Islander peoples. Always was, always will be Aboriginal land.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
