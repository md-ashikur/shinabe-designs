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
                    What customization options are available for helmets?
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  We offer a wide range of customization options for our
                  helmets, including personalized designs, colors, graphics,
                  logos, and decals. You can choose from various finishes such
                  as matte, gloss, or satin. Additionally, we provide options
                  for adding custom padding, straps, and visors for comfort and
                  style. To create your perfect helmet, simply share your ideas
                  or artwork, and our design team will help bring it to life!
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    How long will it take to receive my customized helmet?
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  The production time for a customized helmet typically ranges
                  from 7 to 14 business days, depending on the complexity of the
                  design and the customization options chosen. Once your order
                  is completed, we will ship it to you, and you can expect
                  delivery within 5-7 business days, depending on your location.
                  You will receive tracking information as soon as your helmet
                  is on its way.
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    Can I return or exchange a customized helmet?
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  Due to the personalized nature of our helmets, we do not
                  accept returns or exchanges for customized items unless there
                  is a manufacturing defect or mistake in the customization. We
                  encourage customers to carefully review their design choices
                  and size before placing an order. If you have any concerns
                  about your helmet after receiving it, please contact our
                  customer support team, and we will assist you with any issues.
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
