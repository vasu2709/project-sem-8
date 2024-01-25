import React from "react"

type Props = {}

const Searchbar = (props: Props) => {
  return (
    <div className="max-w-md mx-auto lg:w-96">
      <form
        role="search"
        method="get"
        className="relative flex items-center overflow-hidden"
      >
        <input
          type="search"
          className="search-field border-[1px] border-transparent focus-within:border-transparent focus:ring-greenDark-50 transition-all duration-100 outline-none p-2 flex-grow rounded-none pr-10 h-12"
          placeholder="Search ..."
          value=""
          name="s"
        />
        <button type="submit" className="absolute top-0 right-0 h-full p-2">
          <i className="far fa-search"></i>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
          className="absolute top-0 right-0 h-full fill-current text-black pointer-events-none mr-3"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </form>
    </div>
  )
}

export default Searchbar
