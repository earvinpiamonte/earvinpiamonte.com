import React from "react"

const Modal = ({
  title,
  body,
  footer,
  modalVisibility,
  setModalVisibility,
  className,
}) => {
  return (
    <div
      className={`bg-black bg-opacity-75 fixed h-screen w-screen z-10 py-32 px-4 ${className} ${
        !modalVisibility ? "hidden" : ""
      }`}
    >
      <div className="mx-auto max-w-lg bg-white rounded-lg">
        <div className="px-4 py-4 relative">
          {title && <h4 className="font-bold">{title}</h4>}
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              className="bg-transparent"
              onClick={() => {
                setModalVisibility(false)
              }}
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="px-4 py-4">{body}</div>
        <div className="px-4 py-4">{footer}</div>
      </div>
    </div>
  )
}

export default Modal
