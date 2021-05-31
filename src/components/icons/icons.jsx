import * as React from "react"
import { Transition } from '@headlessui/react'

const TwitterIcon = ({url}) => {
  return(
	<a href={url} target="_blank" rel="noreferrer" >
      <svg viewBox="0 0 612 612" width={24} className="mx-auto"> <path d="M612 116.258a250.714 250.714.0 01-72.088 19.772c25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334.0-125.551 56.217-125.551 125.513.0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101.0 43.559 22.181 81.993 55.835 104.479A125.556 125.556.0 0124.629 232.21v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107.0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134.0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948.0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z" fill="#1da1f2" /></svg>
    </a>
  )
}

const FacebookIcon = ({url}) => {
  return(
    <a href={url} target="_blank" rel="noreferrer" >
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#0d6efd" className="bi bi-facebook mx-auto" viewBox="0 0 16 16">
	    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
	  </svg>
	</a>
  )
}

const GithubIcon = ({url}) => {
  return(
    <a href={url} target="_blank" rel="noreferrer" >
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#212529" className="bi bi-github mx-auto" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
	</a>
  )
}

const LinkedinIcon = ({url}) => {
  return(
    <a href={url} target="_blank" rel="noreferrer" >
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="#0e76a8" className="bi bi-linkedin mx-auto" viewBox="0 0 16 16">
	    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
	  </svg>
	</a>
  )
}

const BurguerMenu = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const btnClass = isOpen ? 'hidden' : ''
  return(
    <div>
      <button className={`${btnClass} lg:hidden cursor-pointer  z-20`} type="button" onClick={ () => {setIsOpen(!isOpen)} }>
        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="#212529" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
	  </button>
	  
	  <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0 invisible"
        enterTo="opacity-100 visible"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100 visible"
        leaveTo="opacity-0 invisible"
		className="fixed top-0 left-0 min-h-screen w-full"
		onClick={() => setIsOpen(false)}
      ></Transition>
	  
	  <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0 invisible"
        enterTo="opacity-100 visible"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100 visible"
        leaveTo="opacity-0 invisible"
		className="absolute top-6 right-4 z-20 cursor-pointer"
		onClick={() => setIsOpen(false)}
      >
	    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
		  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
		</svg>
	  </Transition>
	  
	  <Transition
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-75"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
		  className="text-center min-h-screen bg-gray-500 absolute right-0 top-0 w-80 bg-opacity-50 backdrop-filter backdrop-blur-sm"
        >
		{children}
      </Transition>
	</div>
  )
}

export { TwitterIcon, FacebookIcon, GithubIcon, LinkedinIcon, BurguerMenu }