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
        <div className="w-16 min-w-16 min-h-full bg-[#ffa500]"></div>
        <div className="relative flex-grow mx-8 mb-8">
          <h2 className="text-center text-white text-2xl md:text-4xl mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    How to buy
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  <p>
                    1. Chat us at{" "}
                    <strong className="font-semibold">WhatsApp</strong>
                  </p>
                  <p>
                    2. Pick your favorite helmet designs at{" "}
                    <strong className="font-semibold">Instagram</strong>,{" "}
                    <strong className="font-semibold">Facebook</strong>, or this{" "}
                    <strong className="font-semibold">Website</strong> for
                    reference
                  </p>
                  <p>
                    3. Specify the helmet brand & size you are willing to use
                  </p>
                  <p>
                    4. We will check your helmet availability within 24 hours
                  </p>
                  <p>
                    5. At this point, we will negotiate about time, how long it
                    takes to work, shipping cost, and the{" "}
                    <strong className="font-semibold">first payment</strong>{" "}
                    until we reach a deal
                  </p>
                  <p>
                    6. If the helmet is available, you can transfer the First
                    Payment via Paypal, Bank Transfer, or Western Union
                  </p>
                  <p>
                    7.<strong className="font-semibold"> No refund</strong>.
                    Make sure your helmet brand & size fit your head (You can do
                    fitting at your local store first)
                  </p>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    Design
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  <p>
                    1. After we receive your payment, we will start your designs
                    within 2-7 days.
                  </p>
                  <p>
                    2. Designs will be created only once with 3 minor revisions.
                  </p>
                  <p>
                    3. If you agree with the designs, we can continue to the
                    next step.
                  </p>
                  <p>
                    4. If you don't agree, we can re-design with an extra
                    charge.
                  </p>
                  <p>
                    5. For designs, there is{" "}
                    <strong className="font-semibold">no refund</strong> .
                  </p>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    Manual Works{" "}
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  <p>1. Manual works will take 14-30 days.</p>
                  <p>
                    2. You can't interrupt this phase, so make sure your design
                    is fixed.
                  </p>
                  <p>3. We will send you progress photos weekly.</p>
                  <p>4. You can't CANCEL or UNDO manual works.</p>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    Finishing
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  <p>1. We have 2 options for finishing progress:</p>
                  <p>2. Regular Factory Polish (included)</p>
                  <p>3. Nano Coating 3 layers (Extra charge)</p>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <div className="bg-[#111111] px-8 py-4 rounded-lg">
              <Disclosure>
                <DisclosureButton className="group py-2 flex w-full items-center justify-between">
                  <span className="md:text-xl text-white group-data-[hover]:text-white/80">
                    Shipping (From Indonesia)
                  </span>
                  <ChevronDownIcon className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="text-gray-300 pb-2 mt-2">
                  <p>
                    1. We have 2 options for shipping (You can pick your trusted
                    carriers instead and send us the AWB through):
                  </p>
                  <p>
                    2. All helmets (with box) have approximately 42cm x 32cm x
                    32cm dimensions, weighing 8000 grams (8kg) in volume.
                  </p>
                  <p>
                    3. Regular with{" "}
                    <strong className="font-semibold">Post Indonesia</strong>{" "}
                    (Cheaper) - Estimated delivery time: 7-14 days
                  </p>
                  <p>
                    4. Express with{" "}
                    <strong className="font-semibold">EMS International</strong>{" "}
                    (approximately 50% more expensive) - Estimated delivery
                    time: 3-4 days
                  </p>
                  <p>
                    5. A tracking number will be sent to you within 24 hours
                    after the{" "}
                    <strong className="font-semibold">repayment</strong>.
                  </p>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
        </div>
        <div className="w-16 min-h-full min-w-16 bg-black hidden xl:block"></div>
      </div>
    </>
  );
}
