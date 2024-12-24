import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { ChevronUpIcon, UserIcon, DocumentTextIcon, Bars3CenterLeftIcon, DocumentDuplicateIcon, PaperAirplaneIcon, PencilSquareIcon, XMarkIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function SkillsPopup({ open = false, setOpen = () => {} }) {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">Agent Skill</h3>
                <XMarkIcon className="h-6 w-6 text-gray-500 cursor-pointer" onClick={() => setOpen(false)} />
              </div>
              <div className="mt-4 shadow-lg rounded-lg p-5 border border-gray-300">
                <div className="flex justify-between">
                  <h3 className="text-base font-semibold">Check on-hand inventory for delays</h3>
                  <ChevronUpIcon className="h-6 w-6 text-gray-500" />
                </div>
                <p className="mt-2 text-sm leading-9">
                  When
                  <button className="text-sky-500 bg-cyan-50 px-1 rounded-full inline-flex ml-1">
                    <UserIcon className="h-4 w-4 text-cyan-500 mt-2 mr-1" />
                    <span> any vendor</span>
                  </button>
                  sends an email with changes to
                  <button className="text-sky-500 bg-cyan-50 px-1 rounded-full inline-flex ml-1">
                    <DocumentTextIcon className="h-4 w-4 text-cyan-500 mt-2 mr-1" />
                    confirmed purchase orders
                  </button>, check if the resulting
                  <button className="text-sky-500 bg-cyan-50 px-1 rounded-full inline-flex ml-1">
                    <Bars3CenterLeftIcon className="h-4 w-4 text-cyan-500 mt-2 mr-1" />
                    on-hand inventory
                  </button> will allow
                  <button className="text-sky-500 bg-cyan-50 px-1 rounded-full inline-flex ml-1">
                    <DocumentDuplicateIcon className="h-4 w-4 text-cyan-500 mt-2 mr-1" />
                    all sales orders
                  </button> to
                  <button className="text-sky-500 bg-cyan-50 px-1 rounded-full inline-flex ml-1">
                    <PaperAirplaneIcon className="h-4 w-4 text-cyan-500 mt-2 mr-1" />
                    ship without delay
                  </button>. If so,
                  <button className="text-sky-500 bg-cyan-50 px-1 rounded-full inline-flex ml-1">
                    <PencilSquareIcon className="h-4 w-4 text-cyan-500 mt-2 mr-1" />
                    update the purchase order
                  </button> to reflect the change.
                </p>

              </div>
              <div className='pb-5 mb-5 mt-5'>
                <div>
                  <div className='flex'>
                    <EnvelopeIcon className="h-4 w-4 text-blue-500 mt-1" />
                    <p className='pl-2'>Enable email access</p>
                  </div>
                  <p className='text-xs'>Allow the agent to access email inboxes to read mail from known vendors</p>
                </div>
                <div>
                  <form>
                    <div className="mt-2 flex">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "
                      />
                      <button className='ml-5 bg-blue-600 text-white rounded-lg text-sm px-5 bg-blue-600 w-1/5'>Allow access</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 gap-2 py-5 sm:flex sm:flex-row-reverse sm:px-6 mt-5 mt-5">
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-gray-300 px-3 py-2  text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Activate
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
