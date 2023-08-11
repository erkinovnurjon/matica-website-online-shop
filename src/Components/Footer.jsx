import { Link } from "react-router-dom"

const Footer = () => {
  return (
    (
      <div className=" bg-blue-950 w-full h-22">
        <div className=" container mx-auto px-8 p-4">
          <div className=" flex justify-between items-center">
            <div>
              <Link to={"/"}>
                <img className=" rounded-[50%] w-16 p-0" src="https://i.pinimg.com/564x/bc/d7/58/bcd758bf2844620a3f5dac1ff3209add.jpg" alt="" />
              </Link>
            </div>
            <div className=" flex gap-4">
              <input className=" bg-blue-900 px-2 p-1 transition-all shadow-2xl rounded outline-none hover:bg-white hover:text-blue-950" type="email" placeholder="ENTER YOUR EMAIL" />
              <button className=" bg-blue-900 text-blue-400 px-2 p-1 transition-all shadow-2xl rounded outline-none hover:bg-white hover:text-blue-950" type="submit">SEND</button>
            </div>
            <div className=" flex gap-4">
              
                <img className=" w-10 rounded-[50%] p-0" src="https://i.pinimg.com/564x/17/7e/e2/177ee2dd5b45a8a40fc276970d1deb01.jpg" alt="" />
                <img className=" w-10 rounded p-0" src="https://i.pinimg.com/564x/14/cc/ca/14ccca742b5376a92b67a75c6c5b090a.jpg" alt="" />
                <img className=" w-10 rounded-[50%] p-0" src="https://i.pinimg.com/564x/05/da/34/05da3431471058c803afacb2f5483f7b.jpg" alt="" />
                <img className=" w-10 rounded-[50%] p-0" src="https://i.pinimg.com/564x/dd/a4/ed/dda4ed64a67ac5d80e8eac27dfbe677e.jpg" alt="" />
                
            </div>
            <div>
              <p className=" text-blue-400">© 2023 Copyright Matica Technologies Group SA - all rights reserverd</p>
            </div>
          </div>

        </div>
      </div>
    )
  )
}

export default Footer