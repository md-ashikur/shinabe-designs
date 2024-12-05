import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface PType {
  id: number;
  name: string;
  image: string;
}

const products: PType[] = [
  {
    id: 0,
    name: "Bubba Wallace",
    image: "/helmet/Bubba-Wallace-1.png",
  },
  {
    id: 1,
    name: "Morris Chen Hub Auto",
    image: "/helmet/Morris-Chen-Hub-Auto-10.png",
  },
  {
    id: 2,
    name: "Noah Lisle",
    image: "/helmet/Noah-Lisle-9.png",
  },
  {
    id: 3,
    name: "Rick Kelly",
    image: "/helmet/Rick-Kelly-2020-8.png",
  },
  {
    id: 4,
    name: "Scott McLaughlin",
    image: "/helmet/Scott-McLaughlin-7.png",
  },
  {
    id: 5,
    name: "Stephen Grove",
    image: "/helmet/Stephen-Grove-6.png",
  },
  {
    id: 6,
    name: "Tony Walls",
    image: "/helmet/Tony-Walls-5.png",
  },
  {
    id: 7,
    name: "Travis Buckley",
    image: "/helmet/Travis-Buckley-4.png",
  },
  {
    id: 8,
    name: "Tyler Everingham",
    image: "/helmet/Tyler-Everingham-3.png",
  },
  {
    id: 9,
    name: "Will Rodgers",
    image: "/helmet/Will-Rodgers-2.png",
  },
];
export default function ProductCarousel() {
  return (
    <>
      <div className="relative flex h-96">
        <div className="w-20 min-w-20 min-h-full bg-[#ffa500]"></div>
        <div
          className="relative xl:hidden flex-grow  text-white bg-red-400 pb-20"
          style={{
            backgroundImage: `url(${"/man-4.png"})`,
          }}
        >
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={130}
            totalSlides={10}
          >
            <Slider>
              {products?.map((item) => (
                <Slide index={item.id}>
                  <div className="h-96 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-center items-center">
                      <img
                        src={item.image}
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
                          <p className="text-2xl">{item.name}</p>
                          <button className="px-3 py-2 rounded-md bg-[#ffa500]">
                            Order Helmet
                          </button>
                        </div>
                        <div className="flex flex-col gap-3 lg:pe-20">
                          <ButtonNext className="text-white  bg-[#ffa500] h-12 w-12 flex justify-center items-center rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </ButtonNext>
                          <ButtonBack className="text-[#ffa500] bg-white h-12 w-12 flex justify-center items-center rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                              />
                            </svg>
                          </ButtonBack>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <div className="flex gap-3 justify-center text-white">
              {products?.map((item) => (
                <Dot slide={item.id} className="h-4 w-4 rounded-full"></Dot>
              ))}
            </div>
          </CarouselProvider>
        </div>
        <div
          className="relative hidden xl:block flex-grow  text-white bg-red-400 pb-20"
          style={{
            backgroundImage: `url(${"/man-4.png"})`,
          }}
        >
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={29}
            totalSlides={10}
          >
            <Slider>
              {products?.map((item) => (
                <Slide index={item.id}>
                  <div className="h-96 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-center items-center">
                      <img
                        src={item.image}
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
                          <p className="text-2xl">{item.name}</p>
                          <button className="px-3 py-2 rounded-md bg-[#ffa500]">
                            Order Helmet
                          </button>
                        </div>
                        <div className="flex flex-col gap-3 lg:pe-20">
                          <ButtonNext className="text-white  bg-[#ffa500] h-12 w-12 flex justify-center items-center rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </ButtonNext>
                          <ButtonBack className="text-[#ffa500] bg-white h-12 w-12 flex justify-center items-center rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                              />
                            </svg>
                          </ButtonBack>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
            <div className="flex gap-3 justify-center text-white">
              {products?.map((item) => (
                <Dot slide={item.id} className="h-4 w-4 rounded-full"></Dot>
              ))}
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}
