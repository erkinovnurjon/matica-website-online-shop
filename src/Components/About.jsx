const About = () => {
  return (
    <>
      <div className=" container mx-auto px-8 p-4">

        <div className=" flex justify-between"> 
          <div className=" w-[30%]">
            <img className=" w-[400px]" src="https://i.pinimg.com/736x/60/92/54/60925416cb199cf75baf1217b95d793b.jpg" alt="" />
          </div>
          <div className=" w-[70%] pt-20">

            <h1 className=" text-6xl font-medium">Enabling individuals to securely access online services</h1>

            <div className="mt-10 bg-slate-800 h-[2px] w-full"></div>
            <p className=" pt-10 text-2xl font-normal"><strong>Online authentication,</strong> identity, and eligibility solutions can increase security, ease of use, and accessibility to online services. They are central to efficiency and can improve an individual’s ability to operate securely in an increasingly digital world. They can be used to enable citizens to access critical activities such as healthcare, education, or the right to work.</p>
          </div>


        </div>
        <div className=" my-15 flex justify-between"> 
          <div className=" w-[60%] pt-20">

            <h1 className=" text-2xl font-medium">Keep your credentials safe and secure with Matica’s Digital ID software</h1>

            <div className="mt-10 bg-slate-800 h-[1px] w-full"></div>
            <p className=" pt-10 text-xl font-normal"><strong>Digital identity </strong> (Digital ID) and security are crucial in today’s world, and at Matica, we ensure that all your personal data is securely encrypted to the point of issuance and is kept safe thereafter.

As the world converges from physical to digital identity, there is a requirement to bridge the gap from traditional identity credentials to online authentication, authorization, and access rights.

Digital identity provides a simple yet efficient way to help citizens identify who they are without the need for physical documents. Digital identity harbors personal data, such as our age or nationality, either as a unique online credential or as an electronic representation of an existing physical identification such as a driver’s license.</p>
          </div>

          <div className=" w-[40%]">
            <img className=" w-[500px]" src="https://i.pinimg.com/564x/fc/1c/a8/fc1ca8a71637946338c656c6af8c26c9.jpg" alt="" />
          </div>

        </div>
      </div>
      
    </>
  )
}

export default About