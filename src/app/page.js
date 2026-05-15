import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Testimonial from "@/components/Testimonial";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Featured></Featured>
      <WhyChoose></WhyChoose>
      <Testimonial></Testimonial>
    </div>
  );
}
