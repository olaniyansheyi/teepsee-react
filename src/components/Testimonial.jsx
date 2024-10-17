import reviewImg from "@/img/reviewImg.png";

function Testimonial() {
  return (
    <div className="text-center flex flex-col gap-y-10 my-10 tracking-wider justify-center items-center bg-white w-full px-6 py-16">
      <h1 className="text-secondary text-2xl font-semibold">Testimonials</h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <div className="gray-white text-secondary tracking-wider text-left rounded-xl py-10 pe-10 ps-6 flex flex-col gap-y-5 justify-start items-center md:w-[48%]">
          <p>
            I am so proud of Starfield they really gave my son what i have been
            expecting. They have all the quailties and so much more..
          </p>
          <div className="flex justify-center items-center gap-x-5 md:w-[50%] me-auto">
            <img src={reviewImg} alt="" />
            <p>Mrs willaims Okafor</p>
          </div>
        </div>
        <div className="gray-white text-secondary tracking-wider text-left rounded-xl py-10 pe-10 ps-6 flex flex-col gap-y-5 justify-start items-center md:w-[48%]">
          <p>
            I am so proud of Starfield they really gave my son what i have been
            expecting. They have all the quailties and so much more..
          </p>
          <div className="flex justify-center items-center gap-x-5 md:w-[50%] me-auto">
            <img src={reviewImg} alt="" />
            <p>Mrs willaims Okafor</p>
          </div>
        </div>
        <div className="gray-white text-secondary tracking-wider text-left rounded-xl py-10 pe-10 ps-6 flex flex-col gap-y-5 justify-start items-center md:w-[48%]">
          <p>
            I am so proud of Starfield they really gave my son what i have been
            expecting. They have all the quailties and so much more..
          </p>
          <div className="flex justify-center items-center gap-x-5 md:w-[50%] me-auto">
            <img src={reviewImg} alt="" />
            <p>Mrs willaims Okafor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
