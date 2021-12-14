import React from "react";

export default function Footer() {
  return (
    <div className="footer ">
      <div className="bg-gray-100 dark:bg-gray-750">
        <div className="max-w-6xl m-auto text-gray-800 dark:text-gray-500 flex flex-wrap justify-center">
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium">
              Home
            </div>
            <a className="my-3 block" href="/about">
              About us <span className="text-teal-600 text-xs p-1 "></span>
            </a>
            <a className="my-3 block" href="/shop">
              Shop <span className="text-teal-600 text-xs p-1">NEW!</span>
            </a>
          </div>

          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium">
              Read us
            </div>
            <a className="my-3 block" href="/blog">
              Blog <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/authors">
              Authors <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>

          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium">
              MEET US
            </div>
            <a
              className="my-3 block"
              href="https://www.facebook.com/helsinkiwritersgroup/events/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              Events <span className="text-teal-600 text-xs p-1"></span>
            </a>

            <a
              className="my-3 block"
              href="https://us02web.zoom.us/j/87432972956"
              target="_blank"
              rel="noreferrer"
            >
              Zoom link{" "}
            </a>
          </div>

          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 dark:text-gray-400 font-medium">
              Contact us
            </div>
            {/* <a className="my-3 block" href="/contact"> */}
            {/* Email <span className="text-teal-600 text-xs p-1"></span> */}
            {/* </a> */}
            <a
              className="my-3 block"
              href="https://www.facebook.com/helsinkiwritersgroup/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              Facebook <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-2 dark:bg-gray-750">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t dark:border-gray-700	 text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl dark:text-gray-500"
        >
          <div className="m-auto">
            © 2021. Created by Csilla Csépke, Helsinki Writers Group
          </div>
        </div>
      </div>
    </div>
  );
}
