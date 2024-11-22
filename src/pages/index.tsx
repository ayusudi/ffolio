import { FileInput, Label } from "flowbite-react";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";

import Image from "next/image";
const HelveticaNowDisplay = localFont({
  src: [
    {
      path: "./fonts/HelveticaNowDisplay-Black.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Bold.woff",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Regular.woff",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNowDisplay-Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function Home() {
  return (
    <div
      className={`${HelveticaNowDisplay.className} ${roboto.variable} h-screen flex flex-col items-center justify-center`}
    >
      <form
        action=""
        className="shadow-xl w-[732px] p-10 bg-white shadow flex flex-col gap-5 items-center rounded-xl border border-[#A8A8A8]"
      >
        <h1
          className="text-center font-bold text-[32px]"
          style={{ letterSpacing: "5%ß" }}
        >
          UPLOAD RESUME
        </h1>
        <div className="flex w-full items-center justify-center flex-col">
          <Label
            htmlFor="dropzone-file"
            className="flex h-[203px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-[#F6F6F6] hover:bg-gray-100 "
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5 gap-4">
              <div className="bg-white rounded-lg p-2 border-2 border-[#E0E0E0]">
                <Image alt="upload" src="/upload.png" width={40} height={40} />
              </div>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 flex gap-1.5">
                <span className="italic">Drag and drop or</span>
                <span className="text-[#574EB6] underline">Choose a file</span>
              </p>
            </div>
            <FileInput id="dropzone-file" className="hidden" />
          </Label>
          <div className="flex justify-between w-full p-0.5">
            <p className="text-sm text-[#7F7F7F]">
              Supported formats: PDF, DOCS.{" "}
            </p>
            <p className="text-sm text-[#7F7F7F]">
              Maximum size supported: 10MB
            </p>
          </div>
        </div>
        <p className="font-roboto font-bold text-[13px]">OR</p>
        <h1 className="text-center font-semibold text-[32px] ">Fill a form</h1>
        <button
          type="button"
          className="hover:bg-gray-100 bg-[#F6F6F6] border border-[#E0E0E0] w-full flex items-center justify-center rounded-lg h-[64px]"
        >
          Fill a short 7 step form
        </button>
      </form>
    </div>
  );
}
