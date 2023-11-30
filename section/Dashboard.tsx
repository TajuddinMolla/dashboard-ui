'use client'
import React, { useState } from 'react'

export default function Dashboard({ children }: any) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
    return (
        <div className="flex h-screen overflow-y-hidden bg-white">



            <div
                className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden"
                style={{ backdropFilter: 'blur(14px)' }}
            ></div>

            {/* <!-- Sidebar --> */}
            <aside

                className={`${!isSidebarOpen && "-translate-x-full lg:translate-x-0 lg:w-20"} fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none`}
            >

                {/* <!-- sidebar header --> */}
                <div className="flex items-center justify-between flex-shrink-0 p-2">
                    <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap text-center">
                        K<span className={`${!isSidebarOpen && 'lg:hidden'}`}>-WD</span>
                    </span>
                    <button className="p-2 rounded-md lg:hidden">
                        <svg
                            className="w-6 h-6 text-gray-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {/* <!-- Sidebar links --> */}
                <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
                    <ul className="p-2 overflow-hidden">
                        <li>
                            <a
                                href="#"
                                className={`flex items-center p-2 space-x-2 rounded-md hover:bg-gray-100 ${!isSidebarOpen && "justify-center"}`}

                            >
                                <span>
                                    <svg
                                        className="w-6 h-6 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </span>
                                <span className={`${!isSidebarOpen && 'lg:hidden'}`}>Dashboard</span>
                            </a>
                        </li>
                        {/* // <!-- Sidebar Links... --> */}
                    </ul>
                </nav>
                {/* <!-- Sidebar footer --> */}
                <div className="flex-shrink-0 p-2 border-t max-h-14">
                    <button
                        className="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none focus:ring"
                    >
                        <span>
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                        </span>
                        <span className="text-sm {'lg:hidden': !isSidebarOpen}"> Logout </span>
                    </button>
                </div>
            </aside>

            <div className="flex flex-col flex-1 h-full overflow-hidden">
                {/* <!-- Navbar --> */}
                <header className="flex-shrink-0 border-b">
                    <div className="flex items-center justify-between p-2">
                        {/* <!-- Navbar left --> */}
                        <div className="flex items-center space-x-3">
                            <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">K-WD</span>
                            {/* <!-- Toggle sidebar button --> */}
                            <button className="p-2 rounded-md focus:outline-none focus:ring" onClick={() => setIsSidebarOpen(prev => !prev)}>
                                <svg
                                    className="w-4 h-4 text-gray-600"
                                    // className="{'transform transition-transform -rotate-180': isSidebarOpen}"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* <!-- Mobile search box --> */}
                        <div

                            className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden"
                        //   style="backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px)"
                        >
                            <div

                                className="absolute inset-x-0 flex items-center justify-between p-2 bg-white shadow-md"
                            >
                                <div className="flex items-center flex-1 px-2 space-x-2">
                                    {/* <!-- search icon --> */}
                                    <span>
                                        <svg
                                            className="w-6 h-6 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="w-full px-4 py-3 text-gray-600 rounded-md focus:bg-gray-100 focus:outline-none"
                                    />
                                </div>
                                {/* <!-- close button --> */}
                                <button className="flex-shrink-0 p-4 rounded-md">
                                    <svg
                                        className="w-4 h-4 text-gray-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Desktop search box --> */}
                        <div className="items-center hidden px-2 space-x-2 md:flex-1 md:flex md:mr-auto md:ml-5">
                            {/* <!-- search icon --> */}
                            <span>
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search"
                                className="px-4 py-3 rounded-md hover:bg-gray-100 lg:max-w-sm md:py-2 md:flex-1 focus:outline-none md:focus:bg-gray-100 md:focus:shadow md:focus:border"
                            />
                        </div>

                        {/* <!-- Navbar right --> */}
                        <div className="relative flex items-center space-x-3">




                            {/* <!-- avatar button --> */}
                            <div className="relative">
                                <button className="p-1 bg-gray-200 rounded-full focus:outline-none focus:ring">
                                    <img
                                        className="object-cover w-8 h-8 rounded-full"
                                        src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                                        alt="Ahmed Kamel"
                                    />
                                </button>
                                {/* <!-- green dot --> */}
                                <div className="absolute right-0 p-1 bg-green-400 rounded-full bottom-3 animate-ping"></div>
                                <div className="absolute right-0 p-1 bg-green-400 border border-white rounded-full bottom-3"></div>

                                {/* <!-- Dropdown card --> */}
                                {/* <div

                      className="absolute mt-3 transform -translate-x-full bg-white rounded-md shadow-lg min-w-max"
                    >
                      <div className="flex flex-col p-4 space-y-1 font-medium border-b">
                        <span className="text-gray-800">Ahmed Kamel</span>
                        <span className="text-sm text-gray-400">ahmed.kamel@example.com</span>
                      </div>
                      <ul className="flex flex-col p-2 my-2 space-y-1">
                        <li>
                          <a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">Link</a>
                        </li>
                        <li>
                          <a href="#" className="block px-2 py-1 transition rounded-md hover:bg-gray-100">Another Link</a>
                        </li>
                      </ul>
                      <div className="flex items-center justify-center p-4 text-blue-700 underline border-t">
                        <a href="#">Logout</a>
                      </div>
                    </div> */}
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- Main content --> */}
                <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
                    {children}
                </main >
                {/* <!-- Main footer --> */}
                < footer className="flex items-center justify-between flex-shrink-0 p-4 border-t max-h-14" >
                    <div>K-WD &copy; 2020</div>
                    <div className="text-sm">
                        Made by
                        <a
                            className="text-blue-400 underline"
                            href="https://github.com/Kamona-WD"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Ahmed Kamel</a>
                    </div>
                    <div>
                        {/* <!-- Github svg --> */}
                        <a
                            href="https://github.com/Kamona-WD/starter-dashboard-layout"
                            target="_blank"
                            className="flex items-center space-x-1"
                        >
                            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                ></path>
                            </svg>
                            <span className="hidden text-sm md:block">View on Github</span>
                        </a>
                    </div>
                </footer >
            </div >

            {/* <!-- Setting panel button --> */}
            {/* < div >
            <button

              className="fixed right-0 px-4 py-2 text-sm font-medium text-white uppercase transform rotate-90 translate-x-8 bg-gray-600 top-1/2 rounded-b-md"
            >
              Settings
            </button>
          </div >
          < div

            className="fixed inset-y-0 right-0 flex flex-col bg-white shadow-lg bg-opacity-20 w-80"

          >
            <div className="flex items-center justify-between flex-shrink-0 p-2">
              <h6 className="p-2 text-lg">Settings</h6>
              <button className="p-2 rounded-md focus:outline-none focus:ring">
                <svg
                  className="w-6 h-6 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 max-h-full p-4 overflow-hidden hover:overflow-y-scroll">
              <span>Settings Content</span>

            </div>
          </div > */}
        </div >
    )
}
