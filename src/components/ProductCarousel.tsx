import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
export default function ProductCarousel() {
  return (
    <>
      <div className="relative flex h-96">
        <div className="w-20 min-w-20 min-h-full bg-[#ffa500]"></div>
        <div
          className="relative flex-grow  text-white bg-red-400 pb-20"
          style={{
            backgroundImage: `url(${"/man-4.png"})`,
          }}
        >
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}>
                <div className="h-96 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-center items-center">
                    <img
                      src={"/helmet-4.png"}
                      alt="helmet"
                      className="h-40 md:h-80"
                    />
                  </div>
                  <div className="flex items-center">
                    <div
                      className="flex justify-between"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="space-y-4">
                        <p className="text-xs">Helmet Portfolio</p>
                        <p className="text-2xl">Bubba Wallace</p>
                        <button className="px-3 py-2 rounded-md bg-[#ffa500]">
                          View Detials
                        </button>
                      </div>
                      <div className="flex flex-col gap-3 lg:pe-20">
                        <ButtonNext className="text-white  bg-[#ffa500] py-3 px-4 rounded-full">
                          ▶
                        </ButtonNext>
                        <ButtonBack className="text-[#ffa500] bg-white py-3 px-4 rounded-full">
                          ◀
                        </ButtonBack>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="h-96 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-center items-center">
                    <img
                      src={"/helmet-4.png"}
                      alt="helmet"
                      className="h-40 md:h-80"
                    />
                  </div>
                  <div className="flex items-center">
                    <div
                      className="flex justify-between"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="space-y-4">
                        <p className="text-xs">Helmet Portfolio</p>
                        <p className="text-2xl">Bubba Wallace</p>
                        <button className="px-3 py-2 rounded-md bg-[#ffa500]">
                          View Detials
                        </button>
                      </div>
                      <div className="flex flex-col gap-3 lg:pe-20">
                        <ButtonNext className="text-white  bg-[#ffa500] py-3 px-4 rounded-full">
                          ▶
                        </ButtonNext>
                        <ButtonBack className="text-[#ffa500] bg-white py-3 px-4 rounded-full">
                          ◀
                        </ButtonBack>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="h-96 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-center items-center">
                    <img
                      src={"/helmet-4.png"}
                      alt="helmet"
                      className="h-40 md:h-80"
                    />
                  </div>
                  <div className="flex items-center">
                    <div
                      className="flex justify-between"
                      style={{
                        width: "100%",
                      }}
                    >
                      <div className="space-y-4">
                        <p className="text-xs">Helmet Portfolio</p>
                        <p className="text-2xl">Bubba Wallace</p>
                        <button className="px-3 py-2 rounded-md bg-[#ffa500]">
                          View Detials
                        </button>
                      </div>
                      <div className="flex flex-col gap-3 lg:pe-20">
                        <ButtonNext className="text-white  bg-[#ffa500] py-3 px-4 rounded-full">
                          ▶
                        </ButtonNext>
                        <ButtonBack className="text-[#ffa500] bg-white py-3 px-4 rounded-full">
                          ◀
                        </ButtonBack>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}
