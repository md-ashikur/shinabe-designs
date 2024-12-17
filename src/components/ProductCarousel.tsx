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
  { id: 0, name: "Bubba Wallace", image: "/helmet/Bubba-Wallace-1.png" },
  { id: 1, name: "Morris Chen Hub Auto", image: "/helmet/Morris-Chen-Hub-Auto-10.png" },
  { id: 2, name: "Noah Lisle", image: "/helmet/Noah-Lisle-9.png" },
  { id: 3, name: "Rick Kelly", image: "/helmet/Rick-Kelly-2020-8.png" },
  { id: 4, name: "Scott McLaughlin", image: "/helmet/Scott-McLaughlin-7.png" },
  { id: 5, name: "Stephen Grove", image: "/helmet/Stephen-Grove-6.png" },
  { id: 6, name: "Tony Walls", image: "/helmet/Tony-Walls-5.png" },
  { id: 7, name: "Travis Buckley", image: "/helmet/Travis-Buckley-4.png" },
  { id: 8, name: "Tyler Everingham", image: "/helmet/Tyler-Everingham-3.png" },
  { id: 9, name: "Will Rodgers", image: "/helmet/Will-Rodgers-2.png" },
];

export default function ProductCarousel() {
  return (
    <div id="portfolio" className="relative flex h-96 max-w-[1400px] mx-auto overflow-hidden">
      {/* Side Panel */}
      <div className="w-16 min-w-16 min-h-full bg-[#ffa500]"></div>

      {/* Carousel Container */}
      <div
        className="relative flex-grow bg-red-400 text-white pb-16"
        style={{ backgroundImage: `url(${"/man-4.png"})`, backgroundSize: "cover" }}
      >
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={10}
          infinite
        >
          {/* Slider */}
          <Slider>
            {products.map((item) => (
              <Slide key={item.id} index={item.id}>
                <div className="lg:h-96 grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                  {/* Image Section */}
                  <div className="flex justify-center items-center">
                    <img src={item.image} alt="helmet" className="h-40 md:h-80" />
                  </div>
                  {/* Content Section */}
                  <div className="flex items-center">
                    <div className="flex justify-between w-full px-6">
                      <div>
                        <p className="lg:text-xl mb-2">Helmet Portfolio</p>
                        <p className="lg:text-4xl text-2xl">{item.name}</p>
                        <button className="px-4 py-2 mt-6 rounded-md bg-[#ffa500]">
                          Order Helmet
                        </button>
                      </div>
                      {/* Navigation Buttons */}
                      <div className="flex flex-col gap-3 items-center relative lg:right-28">
                        <ButtonNext className="text-white bg-[#ffa500] h-12 w-12 flex justify-center items-center rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="size-6"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </ButtonNext>
                        <ButtonBack className="text-[#ffa500] bg-white h-12 w-12 flex justify-center items-center rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="size-6"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                          </svg>
                        </ButtonBack>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>

          {/* Pagination */}
          <div className="absolute bottom-4 right-[20%] flex gap-2">
            {products.map((item) => (
              <Dot
                key={item.id}
                slide={item.id}
                className="h-3 w-3 rounded-full  transition-all hover:bg-[#ffa500]"
              />
            ))}
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
