import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/56239a47-3b9d-4a93-b461-06b75434b4c1",
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, "Your message is sent!", form);
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <div>
      <form className="w-full max-w-lg" onSubmit={handleOnSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              className="block  tracking-wide text-gray-700 text-m font-bold mb-2"
              htmlFor="inputName"
              id="name"
            >
              Name
              <input
                type="text"
                name="name"
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="inputName"
                placeholder="Enter your name"
                required="required"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              id="email"
              className="block  tracking-wide text-gray-700 text-m font-bold mb-2"
              htmlFor="inputEmail"
              required="required"
            >
              Email address
              <input
                type="email"
                name="email"
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              className="block  tracking-wide text-gray-700 text-m font-bold mb-2"
              htmlFor="inputSubject"
              id="subject"
            >
              {" "}
              Subject
              <input
                type="text"
                name="subject"
                className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="inputSubject"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              id="message"
              className="block  tracking-wide text-gray-700 text-m font-bold mb-2"
              htmlFor="inputMessage"
            >
              Message
              <textarea
                type="text"
                name="message"
                className="no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                placeholder="Enter message"
                id="message"
              />
            </label>
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              className="shadow bg-black hover:bg-black-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              disabled={serverState.submitting}
            >
              Submit
            </button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
}
