import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VanishingText from "./VanishingText";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: 'center', right: '10px', zIndex: '40' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'flex', alignItems: 'center', left: '10px', zIndex: '40'}}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // appendDots: dots => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "10px"
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // )

  };

  return (
    <Slider {...settings} className="relative">
      <div className="relative min-h-[350px] h-full w-full">
        <video className="flex h-full absolute top-0 object-cover" src="./home/video.mp4" muted autoPlay loop></video>
        <VanishingText text='vanishing text test' top="200" size="text-2xl"/>
        <VanishingText text='vanishing text test' top="200" size="text-2xl"/>
      </div>
      <div className="min-h-[350px] h-full border-2 border-red-600">
        hola
      </div>
      <div className="min-h-[350px] h-full border-2 border-red-600">
        slide 3
      </div>
    </Slider>
  );
}

export default Carousel