import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"


const Footer = () => {
  return (
      <footer className='bg-[#111860] text-white py-24 px-10'>
        
        <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-20 gap-12 max-w-[1200px] mx-auto'>  
        <div>
            <h2 className='text-base font-[600] tracking-widest mb-16'>ABOUT WORDSMITH</h2>
            <p className='text-[#888CB0] leading-7'>Fugiat quas eveniet voluptatem natus. Placeat error temporibus magnam sunt optio aliquam. Ut ut occaecati placeat at. Fuga fugit ea autem. Dignissimos voluptate repellat occaecati minima dignissimos mollitia consequatur. Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa error temporibus magnam est voluptatem.</p>
        </div>


        <div>
        <h2 className='text-base font-[600] tracking-widest mb-16'>OUR NEWSLETTER</h2>
        <p className='text-[#888CB0] leading-7'>Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim exercitationem ipsam. Culpa consequatur occaecati.

        </p>
        <div className='flex mt-8'>
        <input type="text" placeholder='Email Address' className='w-full lg:px-16 px-5 bg-[#0d1248] placeholder:text-white outline-none' />
        <div className='bg-black lg:px-7 px-3 py-4'>Send</div>
        </div>
        </div>

        </div>

        

        <div className="flex justify-between lg:flex-row flex-col items-center  mt-20 max-w-[1200px] lg:mx-auto gap-7">

        <div className="flex gap-6">
            <FaFacebook size={30}/>
            <FaTwitter size={30}/>
            <FaInstagram size={30}/>
            <FaYoutube size={30}/>
            <FaLinkedin size={30}/>
        </div>

        <div>
            <p className="text-[#888CB0] text-base leading-7">Copyright ©2024 All rights reserved | This template is made with ❤ by</p>
            <h2 className="text-center font-[600]">Moiz Ahmed Shaikh ❤</h2>
        </div>


        </div>


    </footer>
  )
}

export default Footer