import img from "../../public/public/imgi_1_footer-bg.png"
const Footer = () => {
  return (
    <div
      className="w-full h-[53vh] px-10 pt-8 "
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-[40vh] flex justify-between  ">
        <div className="Left w-[40vw] h-[40vh] flex flex-col justify-between ">
          <h1 className="text-2xl font-bold text-white  ">Logo</h1>
          <p className="leading-6 text-white font-medium text-[1.3rem] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            <br /> modi, possimus dolore saepe nobis itaque cupiditate veniam
            <br /> nostrum, provident quam, nequeab dicta velit debitis cum
            <br /> unde recusandae. Fuga, consectetur.
          </p>
          <h1 className="text-[2rem] text-white font-bold ">Follow Us!</h1>
          <div>
            {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
          </div>
        </div>
        <div className="Right w-[30vw] h-[40vh] flex flex-col items-start justify-center ">
          <h1 className="text-white text-[2rem] font-bold ">Get Notified</h1>
          <p className="leading-6 text-white font-medium text-[1.3rem] ">
            Get emails for latest news about anime, and more.
          </p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
            className="placeholder:text-white border-2 border-white outline-none text-xl pl-2 my-5 py-2 w-[20vw] rounded-[10px] text-white  "
          />
          <p className="leading-6 text-white font-medium text-[1.3rem] ">
            By subscribing you agree to our terms and conditions.
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white " />
    </div>
  );
};

export default Footer;
