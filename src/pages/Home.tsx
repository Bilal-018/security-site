import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaShieldHalved, FaPersonMilitaryPointing, FaUserShield, FaRegCircleCheck, FaRegHandshake, FaWrench, FaShieldDog } from "react-icons/fa6";
import { SiAdguard } from "react-icons/si";
import { MdPrivacyTip } from "react-icons/md";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { BiSolidCctv } from "react-icons/bi";
import { TbCaptureFilled  } from "react-icons/tb";
import cmLogo from "../assets/img/partner-cm.png";
import egLogo from "../assets/img/partner-eg.png"

const Home = () => {

    const guards = [
        {
            heading: 'Personal Guard',
            description: 'Protecting what matters most, one individual at a time.',
            icon: <FaPersonMilitaryPointing />,
        },
        {
            heading: 'Elite Protection',
            description: 'Your safety, our priority. Personalized protection for a secure tomorrow.',
            icon: <SiAdguard />,
        },
        {
            heading: 'Private Security',
            description: 'Empowering your personal freedom, one secure step at a time.',
            icon: <MdPrivacyTip />,
        },
    ];

    const features = [
        { icon: <FaRegCircleCheck />, text: 'Reliable Security' },
        { icon: <FaRegCircleCheck />, text: 'Security Risk Advice' },
        { icon: <FaRegCircleCheck />, text: '24/7 Operations' },
        { icon: <FaRegCircleCheck />, text: 'Competitive Rates' },
    ];

    const services = [
        {
            icon: <GiPoliceOfficerHead />,
            title: 'Security Guards',
            description: 'From roving to concierge security, our guards safeguard your assets, ensuring business security with vigilance at every access point. Trust us to minimize costs, mitigate risks, and eliminate inconvenience, allowing you to focus on your business success.'
        },
        {
            icon: <FaShieldDog />,
            title: 'K9 Security',
            description: 'Unleash the power of our highly trained canine units for unparalleled protection. Our K9 security services offer a swift and effective response to potential threats, enhancing security measures with precision and expertise.'
        },
        {
            icon: <BiSolidCctv />,
            title: 'Electronic Security',
            description: 'Deploy cutting-edge technology to fortify your premises. Our electronic security solutions offer seamless protection, including CCTV surveillance, access control, and alarm systems. Safeguarding your assets with precision and reliability.'
        },
        {
            icon: <TbCaptureFilled  />,
            title: 'Loss Prevention',
            description: 'Our blend of plain clothes and uniformed guards acts as a powerful deterrent against theft, fraud, and criminal activity. Trained to identify risks, our team takes swift action to prevent incidents, ensuring the security of your assets.'
        }
    ];

    return (
        <>
            <div className="bg-hero-home h-[50vh] md:h-[80vh] bg-cover bg-no-repeat">
                <div className='text-white h-full max-w-[1140px] max-xl:px-6 mx-auto'>
                    <div className='lg:w-3/5 h-full flex flex-col justify-center max-xl:items-center gap-y-3 max-xl:mx-auto max-xl:text-center'>
                        <div className='flex items-center gap-x-2 font-semibold md:text-2xl'>
                            <FaShieldHalved className='text-black' />
                            <h4>Trusted Professionals</h4>
                        </div>
                        <h1 className='text-3xl md:text-7xl xl:text-8xl font-semibold'>
                            Protecting You Is Our <span className='text-black lg:text-logoRed italic'>Passion</span>
                        </h1>
                        <p className='text-sm md:text-lg'>At ..., we've earned our reputation as Australia's premier security services provider through our unwavering dedication to excellence and commitment to safeguarding our clients' peace of mind.</p>
                        <button className='border w-max px-6 py-2 border-black hover:bg-black hover:scale-110 transition-all flex items-center gap-x-1 max-md:text-xs'>
                            <BsArrowRightCircleFill className='md:text-sm' />
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-[#242423] py-16 relative'>
                <div className='bg-map h-full absolute top-0 bottom-0 left-0 right-0 bg-cover bg-no-repeat bg-fixed opacity-[0.02]'></div>
                <div className='max-w-[1140px] mx-auto flex items-center max-xl:flex-col-reverse max-md:flex-col gap-y-10 max-xl:px-6'>
                    <div className='flex max-md:flex-col max-md:gap-y-10 xl:w-3/5 gap-x-8 h-max'>
                        {guards.map((guard, index) => (
                            <div key={index} className={`bg-black text-white min-w-48 md:max-w-[33%] text-center px-4 space-y-2 relative py-10 ${index === 1 ? 'bg-opacity-40' : 'bg-opacity-20'}`}>
                                <div className='absolute bg-logoRed w-12 h-12 -top-[10%] left-[45%] md:left-[38%] lg:left-[45%] xl:left-[38%] flex justify-center items-center text-3xl'>
                                    {guard.icon}
                                </div>
                                <h3 className='md:text-xl font-bold'>{guard.heading}</h3>
                                <p className='text-gray-300 max-md:text-sm'>{guard.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className='xl:w-2/5 text-white xl:pl-10 space-y-3 max-xl:text-center'>
                        <div className='flex items-center gap-x-2 font-semibold md:text-2xl max-xl:justify-center'>
                            <FaUserShield className='text-logoRed' />
                            <h4>About Us</h4>
                        </div>
                        <h2 className='text-2xl md:text-5xl font-semibold'>Your <span className='text-logoRed'>Safety</span> Is Our Responsibility</h2>
                        <p className='text-gray-300 pt-3 max-md:text-sm'>At ..., we understand that your safety and security are of utmost importance. That's why we're committed to providing a safe and trustworthy environment for our customers, employees, and partners. Our top priority is to ensure that you feel protected and supported every step of the way. With us, you can have peace of mind knowing that your safety is our responsibility.</p>
                        <div className='flex flex-wrap gap-x-10 gap-y-3 py-3 max-lg:w-1/2 max-lg:justify-center max-xl:w-[40%] mx-auto'>
                            {features.map((feature, index) => (
                                <div key={index} className='flex items-center gap-x-2 text-logoRed max-md:text-sm'>
                                    {feature.icon}
                                    <p className='text-gray-300'>{feature.text}</p>
                                </div>
                            ))}
                        </div>
                        <button className='max-md:flex max-md:mx-auto max-xl:hidden border w-max px-6 py-2 border-logoRed hover:bg-logoRed hover:scale-110 transition-all flex items-center gap-x-1 max-md:text-xs relative z-10'>
                            <BsArrowRightCircleFill className='md:text-sm' />
                            <span>Learn More</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='max-w-[1140px] max-xl:px-6 mx-auto py-24 md:flex max-md:space-y-10'>
                <div className='md:w-2/5 max-md:flex flex-col items-center'>
                    <div className='flex items-center gap-x-4 font-semibold md:text-2xl'>
                        <FaRegHandshake className='text-logoRed md:text-3xl' />
                        <span>Our Partners</span>
                    </div>
                    <h2 className='text-2xl md:text-5xl font-semibold mt-2'>Our <span className='text-logoRed'>Partners</span> In The World</h2>
                </div>

                <div className='md:w-3/5 flex max-md:flex-col items-center justify-between max-md:gap-y-10'>
                    <div className='w-1/3 flex justify-center'>
                        <img src={egLogo} className='grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-700' alt="partner-eg" />
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <img src={cmLogo} className='grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-700' alt="partner-cm" />
                    </div>
                    <div className='w-1/3 flex justify-center'>
                        <img src={egLogo} className='grayscale hover:grayscale-0 hover:scale-110 transition-transform duration-700' alt="partner-eg" />
                    </div>
                </div>
            </div>

            <div className='max-w-[1140px] max-xl:px-6 mx-auto py-24'>
                <div className='flex items-center justify-center gap-x-4 font-semibold md:text-2xl'>
                    <FaWrench className='text-logoRed md:text-3xl' />
                    <span>Our Services</span>
                </div>
                <h2 className='text-2xl md:text-5xl font-semibold text-center mt-2'>You Are Our <span className='text-logoRed'>Priority</span></h2>
                <p className='text-gray-500 py-5 max-md:text-sm lg:w-1/2 text-center mx-auto'>Our mission at Expect Group is to proactively prevent malicious activities and security breaches for businesses of all sizes and locations</p>
                <div className='flex flex-wrap max-xl:gap-x-4 justify-center xl:justify-between gap-y-10'>
                    {services.map((item, index) => (
                        <div key={index} className='shadow-lg px-7 pb-5 pt-10 lg:max-w-[480px] xl:max-w-[560px] space-y-3'>
                            <div className='text-logoRed text-3xl flex items-center gap-x-2'>
                                {item.icon}
                                <h3 className='text-base md:text-xl font-bold'>{item.title}</h3>
                            </div>
                            <p className='text-gray-500 max-md:text-sm'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home