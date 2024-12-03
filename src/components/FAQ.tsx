import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function FAQ() {
  return (
    <>
      <div className="relative flex">
        <div className="w-20 min-w-20 min-h-full bg-[#ffa500]"></div>
        <div className="relative flex-grow mx-4 mb-4">
          <h2 className="text-center text-white text-2xl md:text-4xl mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    Lorem ipsum dolor sit amet?
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium voluptates itaque veniam? Nulla fugiat aliquam
                  ullam, magni incidunt aperiam corporis ipsam odio fuga quia.
                  Ducimus commodi repudiandae tenetur nisi aliquam eaque beatae
                  iste explicabo aut, repellendus sequi? Adipisci assumenda,
                  dolore expedita sapiente voluptate ipsum vero magni
                  temporibus! Asperiores, in odit!
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    Lorem ipsum dolor sit amet?
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium voluptates itaque veniam? Nulla fugiat aliquam
                  ullam, magni incidunt aperiam corporis ipsam odio fuga quia.
                  Ducimus commodi repudiandae tenetur nisi aliquam eaque beatae
                  iste explicabo aut, repellendus sequi? Adipisci assumenda,
                  dolore expedita sapiente voluptate ipsum vero magni
                  temporibus! Asperiores, in odit!
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    Lorem ipsum dolor sit amet?
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium voluptates itaque veniam? Nulla fugiat aliquam
                  ullam, magni incidunt aperiam corporis ipsam odio fuga quia.
                  Ducimus commodi repudiandae tenetur nisi aliquam eaque beatae
                  iste explicabo aut, repellendus sequi? Adipisci assumenda,
                  dolore expedita sapiente voluptate ipsum vero magni
                  temporibus! Asperiores, in odit!
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
        <div className="w-20 min-h-full min-w-20 bg-black hidden xl:block"></div>
      </div>
    </>
  );
}
