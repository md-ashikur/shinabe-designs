import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
export default function Product() {
  return (
    <>
      <div className="relative flex">
        <div className="w-20 min-w-20 min-h-full bg-[#ffa500]"></div>
        <div className="relative flex-grow mx-4 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4">
            <div className="bg-[#111111] p-2 rounded-3xl">
              <div className="relative">
                <img src="/man.png" alt="man" />
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 -bottom-[25px]"
                >
                  <circle cx="28" cy="28" r="28" fill="#FFA500" />
                  <path
                    d="M20 41C18.8889 41 17.9444 40.6208 17.1667 39.8625C16.3889 39.1042 16 38.1833 16 37.1V33.2H20V15L22 16.95L24 15L26 16.95L28 15L30 16.95L32 15L34 16.95L36 15L38 16.95L40 15V37.1C40 38.1833 39.6111 39.1042 38.8333 39.8625C38.0556 40.6208 37.1111 41 36 41H20ZM36 38.4C36.3778 38.4 36.6944 38.2754 36.95 38.0262C37.2056 37.7771 37.3333 37.4683 37.3333 37.1V18.9H22.6667V33.2H34.6667V37.1C34.6667 37.4683 34.7944 37.7771 35.05 38.0262C35.3056 38.2754 35.6222 38.4 36 38.4ZM24 24.1V21.5H32V24.1H24ZM24 28V25.4H32V28H24ZM34.6667 24.1C34.2889 24.1 33.9722 23.9754 33.7167 23.7262C33.4611 23.4771 33.3333 23.1683 33.3333 22.8C33.3333 22.4317 33.4611 22.1229 33.7167 21.8737C33.9722 21.6246 34.2889 21.5 34.6667 21.5C35.0444 21.5 35.3611 21.6246 35.6167 21.8737C35.8722 22.1229 36 22.4317 36 22.8C36 23.1683 35.8722 23.4771 35.6167 23.7262C35.3611 23.9754 35.0444 24.1 34.6667 24.1ZM34.6667 28C34.2889 28 33.9722 27.8754 33.7167 27.6262C33.4611 27.3771 33.3333 27.0683 33.3333 26.7C33.3333 26.3317 33.4611 26.0229 33.7167 25.7737C33.9722 25.5246 34.2889 25.4 34.6667 25.4C35.0444 25.4 35.3611 25.5246 35.6167 25.7737C35.8722 26.0229 36 26.3317 36 26.7C36 27.0683 35.8722 27.3771 35.6167 27.6262C35.3611 27.8754 35.0444 28 34.6667 28ZM20 38.4H32V35.8H18.6667V37.1C18.6667 37.4683 18.7944 37.7771 19.05 38.0262C19.3056 38.2754 19.6222 38.4 20 38.4Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="p-2">
                <h5 className="text-[#ffa500] font-semibold text-xl mt-1">
                  Brief
                </h5>
                <Disclosure>
                  <DisclosurePanel className="text-gray-300 mt-2 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium voluptates itaque veniam? Nulla fugiat aliquam
                    ullam, magni incidunt aperiam corporis ipsam odio fuga quia.
                    Ducimus commodi repudiandae tenetur nisi aliquam eaque
                    beatae iste explicabo aut, repellendus sequi? Adipisci
                    assumenda, dolore expedita sapiente voluptate ipsum vero
                    magni temporibus! Asperiores, in odit!
                  </DisclosurePanel>
                  <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                    <div className="flex flex-col">
                      <p className="text-white text-start text-sm mt-1 group-data-[open]:hidden">
                        Once we determine the type of helmet you want/need...
                      </p>
                      <div>
                        <button className="border-[2px] flex items-center text-sm border-[#ffa500] text-[#ffa500] rounded-lg mt-3 px-3 py-2">
                          <span className="group-data-[open]:hidden">
                            Read more
                          </span>
                          <span className="hidden group-data-[open]:inline">
                            Read less
                          </span>
                        </button>
                      </div>
                    </div>
                  </DisclosureButton>
                </Disclosure>
              </div>
            </div>
            <div className="bg-[#111111] p-2 rounded-3xl">
              <div className="relative">
                <img src="/helmet2.png" alt="man" />
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 -bottom-[25px]"
                >
                  <circle cx="28" cy="28" r="28" fill="#FFA500" />
                  <path
                    d="M16.3684 41V34.8611L34.3974 15.8667C34.6711 15.5778 34.9789 15.3611 35.3211 15.2167C35.6632 15.0722 36.0053 15 36.3474 15C36.7123 15 37.0601 15.0722 37.3908 15.2167C37.7215 15.3611 38.0123 15.5778 38.2632 15.8667L40.1789 17.8889C40.4526 18.1537 40.6579 18.4606 40.7947 18.8097C40.9316 19.1588 41 19.5259 41 19.9111C41 20.2722 40.9316 20.6333 40.7947 20.9944C40.6579 21.3556 40.4526 21.6806 40.1789 21.9694L22.1842 41H16.3684ZM19.1053 38.1111H21.0211L34.4658 23.9556L33.5079 22.9083L32.5158 21.8972L19.1053 36.0889V38.1111ZM33.5079 22.9083L32.5158 21.8972L34.4658 23.9556L33.5079 22.9083ZM30.0526 41C31.7404 41 33.3026 40.5546 34.7395 39.6639C36.1763 38.7731 36.8947 37.5333 36.8947 35.9444C36.8947 35.0778 36.6781 34.3315 36.2447 33.7056C35.8114 33.0796 35.2298 32.538 34.5 32.0806L32.4816 34.2111C33.0061 34.4519 33.4167 34.7167 33.7132 35.0056C34.0096 35.2944 34.1579 35.6074 34.1579 35.9444C34.1579 36.4981 33.7417 36.9977 32.9092 37.4431C32.0768 37.8884 31.1246 38.1111 30.0526 38.1111C29.6649 38.1111 29.3399 38.2495 29.0776 38.5264C28.8154 38.8032 28.6842 39.1463 28.6842 39.5556C28.6842 39.9648 28.8154 40.3079 29.0776 40.5847C29.3399 40.8616 29.6649 41 30.0526 41ZM17.1553 29.95L19.2079 27.7833C18.7518 27.5907 18.3925 27.3921 18.1303 27.1875C17.868 26.9829 17.7368 26.7722 17.7368 26.5556C17.7368 26.2667 17.9421 25.9778 18.3526 25.6889C18.7632 25.4 19.6298 24.9546 20.9526 24.3528C22.9596 23.438 24.2939 22.6074 24.9553 21.8611C25.6167 21.1148 25.9474 20.2722 25.9474 19.3333C25.9474 18.0093 25.4456 16.956 24.4421 16.1736C23.4386 15.3912 22.1158 15 20.4737 15C19.4474 15 18.5294 15.1926 17.7197 15.5778C16.9101 15.963 16.2886 16.4324 15.8553 16.9861C15.6044 17.2991 15.5018 17.6481 15.5474 18.0333C15.593 18.4185 15.764 18.7315 16.0605 18.9722C16.357 19.237 16.6877 19.3454 17.0526 19.2972C17.4175 19.2491 17.7254 19.0926 17.9763 18.8278C18.2956 18.4907 18.6491 18.25 19.0368 18.1056C19.4246 17.9611 19.9035 17.8889 20.4737 17.8889C21.4088 17.8889 22.0987 18.0333 22.5434 18.3222C22.9882 18.6111 23.2105 18.9481 23.2105 19.3333C23.2105 19.6704 23.011 19.9773 22.6118 20.2542C22.2127 20.531 21.2947 21.0185 19.8579 21.7167C18.0333 22.5593 16.7675 23.3236 16.0605 24.0097C15.3535 24.6958 15 25.5444 15 26.5556C15 27.3259 15.1939 27.9819 15.5816 28.5236C15.9693 29.0653 16.4939 29.5407 17.1553 29.95Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="p-2">
                <h5 className="text-[#ffa500] font-semibold text-xl mt-1">
                  Design
                </h5>
                <p className="text-white text-sm mt-1">
                  The design phase generally takes 1-2 weeks...
                </p>
                <div>
                  <button className="border-[2px] text-sm border-[#ffa500] text-[#ffa500] rounded-lg mt-3 px-3 py-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#111111] p-2 rounded-3xl">
              <div className="relative">
                <img src="/man2.png" alt="man" />
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 -bottom-[25px]"
                >
                  <circle cx="28" cy="28" r="28" fill="#FFA500" />
                  <path
                    d="M24.1975 30.925L28 28.6175L31.8025 30.925L30.795 26.6025L34.175 23.6775L29.7225 23.32L28 19.225L26.2775 23.32L21.825 23.6775L25.205 26.6025L24.1975 30.925ZM15 41V17.6C15 16.885 15.2546 16.2729 15.7637 15.7637C16.2729 15.2546 16.885 15 17.6 15H38.4C39.115 15 39.7271 15.2546 40.2362 15.7637C40.7454 16.2729 41 16.885 41 17.6V33.2C41 33.915 40.7454 34.5271 40.2362 35.0362C39.7271 35.5454 39.115 35.8 38.4 35.8H20.2L15 41ZM19.095 33.2H38.4V17.6H17.6V34.6625L19.095 33.2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="p-2">
                <h5 className="text-[#ffa500] font-semibold text-xl mt-1">
                  Review/Edit
                </h5>
                <p className="text-white text-sm mt-1">
                  Here you'll have the opportunity to review and make...{" "}
                </p>
                <div>
                  <button className="border-[2px] text-sm border-[#ffa500] text-[#ffa500] rounded-lg mt-3 px-3 py-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#111111] p-2 rounded-3xl">
              <div className="relative">
                <img src="/helmet3.png" alt="man" />
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 -bottom-[25px]"
                >
                  <circle cx="28" cy="28" r="28" fill="#FFA500" />
                  <path
                    d="M20.4737 40C19.4474 40 18.4325 39.7554 17.4289 39.2662C16.4254 38.777 15.6158 38.1321 15 37.3316C15.593 37.3316 16.1974 37.1036 16.8132 36.6478C17.4289 36.1919 17.7368 35.5304 17.7368 34.6631C17.7368 33.5513 18.136 32.6062 18.9342 31.8279C19.7325 31.0496 20.7018 30.6604 21.8421 30.6604C22.9825 30.6604 23.9518 31.0496 24.75 31.8279C25.5482 32.6062 25.9474 33.5513 25.9474 34.6631C25.9474 36.1308 25.4114 37.3871 24.3395 38.4323C23.2675 39.4774 21.9789 40 20.4737 40ZM20.4737 37.3316C21.2263 37.3316 21.8706 37.0703 22.4066 36.5477C22.9425 36.0251 23.2105 35.3969 23.2105 34.6631C23.2105 34.2851 23.0794 33.9682 22.8171 33.7125C22.5548 33.4568 22.2298 33.3289 21.8421 33.3289C21.4544 33.3289 21.1294 33.4568 20.8671 33.7125C20.6048 33.9682 20.4737 34.2851 20.4737 34.6631C20.4737 35.1746 20.411 35.6415 20.2855 36.064C20.1601 36.4865 19.9947 36.8868 19.7895 37.2648C19.9035 37.3093 20.0175 37.3316 20.1316 37.3316H20.4737ZM28.3421 31.9947L24.5789 28.3256L36.8263 16.3843C37.0772 16.1396 37.3908 16.0118 37.7671 16.0007C38.1434 15.9895 38.4684 16.1174 38.7421 16.3843L40.5895 18.1855C40.8632 18.4523 41 18.7636 41 19.1194C41 19.4752 40.8632 19.7865 40.5895 20.0534L28.3421 31.9947Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="p-2">
                <h5 className="text-[#ffa500] font-semibold text-xl mt-1">
                  Painting
                </h5>
                <p className="text-white text-sm mt-1">
                  Each helmet is meticulously hand painted...{" "}
                </p>
                <div>
                  <button className="border-[2px] text-sm border-[#ffa500] text-[#ffa500] rounded-lg mt-3 px-3 py-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#111111] p-2 rounded-3xl">
              <div className="relative">
                <img src="/man3.png" alt="man" />
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 -bottom-[25px]"
                >
                  <circle cx="28" cy="28" r="28" fill="#FFA500" />
                  <path
                    d="M20.4 41C19.0667 41 17.9333 40.526 17 39.5781C16.0667 38.6302 15.6 37.4792 15.6 36.125H11.6L12.32 32.875H16.84C17.2933 32.3604 17.8267 31.9609 18.44 31.6766C19.0533 31.3922 19.7067 31.25 20.4 31.25C21.0933 31.25 21.7467 31.3922 22.36 31.6766C22.9733 31.9609 23.5067 32.3604 23.96 32.875H30.64L34 18.25H16.48L16.64 17.5594C16.8 16.801 17.1667 16.1849 17.74 15.7109C18.3133 15.237 18.9867 15 19.76 15H38L36.52 21.5H41.2L46 28L44.4 36.125H41.2C41.2 37.4792 40.7333 38.6302 39.8 39.5781C38.8667 40.526 37.7333 41 36.4 41C35.0667 41 33.9333 40.526 33 39.5781C32.0667 38.6302 31.6 37.4792 31.6 36.125H25.2C25.2 37.4792 24.7333 38.6302 23.8 39.5781C22.8667 40.526 21.7333 41 20.4 41ZM34.68 29.625H42.4L42.56 28.7719L39.6 24.75H35.8L34.68 29.625ZM33.92 18.5344L34 18.25L30.64 32.875L30.72 32.5906L32.08 26.6594L33.92 18.5344ZM10 30.1531L10.8 26.9031H19.6L18.8 30.1531H10ZM13.2 24.2219L14 20.9719H24.4L23.6 24.2219H13.2ZM20.4 37.75C20.8533 37.75 21.2333 37.5943 21.54 37.2828C21.8467 36.9714 22 36.5854 22 36.125C22 35.6646 21.8467 35.2786 21.54 34.9672C21.2333 34.6557 20.8533 34.5 20.4 34.5C19.9467 34.5 19.5667 34.6557 19.26 34.9672C18.9533 35.2786 18.8 35.6646 18.8 36.125C18.8 36.5854 18.9533 36.9714 19.26 37.2828C19.5667 37.5943 19.9467 37.75 20.4 37.75ZM36.4 37.75C36.8533 37.75 37.2333 37.5943 37.54 37.2828C37.8467 36.9714 38 36.5854 38 36.125C38 35.6646 37.8467 35.2786 37.54 34.9672C37.2333 34.6557 36.8533 34.5 36.4 34.5C35.9467 34.5 35.5667 34.6557 35.26 34.9672C34.9533 35.2786 34.8 35.6646 34.8 36.125C34.8 36.5854 34.9533 36.9714 35.26 37.2828C35.5667 37.5943 35.9467 37.75 36.4 37.75Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="p-2">
                <h5 className="text-[#ffa500] font-semibold text-xl mt-1">
                  Delivery
                </h5>
                <p className="text-white text-sm mt-1">
                  Carefully wrapped and double boxed with plenty...{" "}
                </p>
                <div>
                  <button className="border-[2px] text-sm border-[#ffa500] text-[#ffa500] rounded-lg mt-3 px-3 py-2">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-20 h-full min-w-20 bg-black hidden xl:block"></div>
      </div>
    </>
  );
}
