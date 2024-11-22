"use client";

import { Sidebar } from "flowbite-react";
import {
  HiOutlineStar,
  HiOutlineHome,
  HiOutlineDocumentText,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiPhotograph,
} from "react-icons/hi";

export default function Component() {
  return (
    <Sidebar
      theme={{
        root: {
          inner: "min-h-screen px-1 flex flex-col",
          base: "border border-l-2 border-[#E5E5E5] ",
          collapsed: {
            on: "w-20 ",
            off: "w-20 ",
          },
        },
        item: {
          content: { base: "" },
          active: "bg-[#A399FF]",
          icon: {
            base: "m-auto w-[28px] h-[28px]",
            active: "m-auto w-[28px] h-[28px] text-white",
          },
          listItem: "flex items-center justify-center",
        },
        itemGroup: {
          base: "flex flex-col gap-1",
        },
        logo: {
          base: "flex flex-shrink items-center justify-center py-4 mt-[30px]",
          collapsed: {
            off: "",
          },
          img: "h-[32px] w-[32px]",
        },
      }}
      aria-label="Sidebar with logo branding example"
    >
      <Sidebar.Logo
        href="#"
        img="/globe.svg"
        imgAlt="Flowbite logo"
      ></Sidebar.Logo>
      <Sidebar.Items className="flex-grow flex flex-col justify-between pb-[30px]">
        <Sidebar.ItemGroup>
          <Sidebar.Item active={true} href="#" icon={HiOutlineStar} />
          <Sidebar.Item href="#" icon={HiOutlineHome} />
          <Sidebar.Item href="#" icon={HiOutlineDocumentText} />
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <div className="flex flex-col gap-10">
            <div>
              <Sidebar.Item href="#" icon={HiOutlineQuestionMarkCircle} />
              <Sidebar.Item href="#" icon={HiOutlineCog} />
            </div>
            <Sidebar.Item href="#" icon={HiPhotograph} />
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
