import { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";

const Drawer: React.FC<{
  drawer: boolean;
  setDrawer: (value: boolean) => void;
}> = ({ drawer, setDrawer }) => {
  return (
    <Transition appear show={drawer} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setDrawer(!drawer)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex flex-row-reverse">
            <div className="fixed">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-500"
                enterFrom="opacity-0 translate-x-7"
                enterTo="opacity-100 translate-x-0"
                leave="ease-in duration-500"
                leaveFrom="opacity-100 translate-x-0"
                leaveTo="opacity-0 translate-x-7"
              >
                <Dialog.Panel className="min-h-screen transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">drawer</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
