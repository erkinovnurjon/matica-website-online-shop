import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="m-0 bg-[aqua]">
            <div className=" container mx-auto px-8 ">
                  <div className=" flex justify-between items-center">
                        <div>
                             <Link to={"/"}>
                                <img className=" rounded-[50%] w-16 p-0" src="https://i.pinimg.com/564x/bc/d7/58/bcd758bf2844620a3f5dac1ff3209add.jpg" alt="" />
                             </Link>
                        </div>
                        <div>
                              <ul className=" flex items-center gap-8 text-lg">
                                    <li className=" hover:text-blue-500 transition-all">
                                          <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className=" hover:text-blue-500 transition-all">
                                          <Link to={"/login"}>Login</Link>
                                    </li>
                                    <li className=" hover:text-blue-500 transition-all">
                                          <Link to={"/about"}>About</Link>
                                    </li>
                              </ul>
                        </div>
                        <div>
                              <Link to={"/login"}>
                              
                                  <img  className=" rounded-[50%] w-16 p-0" src="https://i.pinimg.com/564x/51/10/80/51108072c6b0953746839af01e0bd1a6.jpg" alt="" />
                              </Link>
                        </div>
                  </div>

            </div>
      </div>
    </>
  )
}

export default Header