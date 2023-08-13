import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
       <div className="m-0 bg-[aqua]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col sm:flex-row justify-between items-center py-2 sm:py-4">
      <div>
        <Link to={"/"}>
          <img className="rounded-[50%] w-10 sm:w-12 p-0" src="https://i.pinimg.com/564x/bc/d7/58/bcd758bf2844620a3f5dac1ff3209add.jpg" alt="" />
        </Link>
      </div>
      <div className="mt-2 sm:mt-0">
        <ul className="flex items-center gap-2 sm:gap-4 text-xs sm:text-base">
          <li className="hover:text-blue-500 transition-all">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-500 transition-all">
            <Link to={"/login"}>Login</Link>
          </li>
          <li className="hover:text-blue-500 transition-all">
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to={"/login"}>
          <img className="rounded-[50%] w-10 sm:w-12 p-0" src="https://i.pinimg.com/564x/51/10/80/51108072c6b0953746839af01e0bd1a6.jpg" alt="" />
        </Link>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Header