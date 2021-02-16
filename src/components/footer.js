import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="bg-gray-100">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-center">
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Home
            </div>
            <a className="my-3 block" href="/about">
              About Us <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Partners <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>

          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
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
            <div className="text-xs uppercase text-gray-500 font-medium">
              MEET US
            </div>
            <a
              className="my-3 block"
              href="https://www.facebook.com/helsinkiwritersgroup/events/?ref=page_internal"
            >
              Events <span className="text-teal-600 text-xs p-1"></span>
            </a>

            <a
              className="my-3 block"
              href="https://helsinki.zoom.us/j/61067209350
"
            >
              Zoom link{" "}
            </a>
          </div>

          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Contact us
            </div>
            <a className="my-3 block" href="/contact">
              Email <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a
              className="my-3 block"
              href="https://www.facebook.com/helsinkiwritersgroup/?ref=page_internal"
            >
              Facebook <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 pt-2 ">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      md:flex-row max-w-6xl"
        >
          <div className="m-auto">© Copyright 2021. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
}
