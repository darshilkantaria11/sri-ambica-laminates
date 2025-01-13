import Image from 'next/image';
import Landing from "../../../public/hero.svg";
import Landing2 from "../../../public/hero1.svg";
import Link from 'next/link';

export default function LandingPage() {
    return (
        <div className="relative h-96 flex flex-col lv mt-2 ">
            {/* Background Image */}
            <div className="hidden md:flex relative w-full h-auto">
                <Image
                    src={Landing}
                    alt="Background Image"
                    layout="responsive"  // Ensures the image is responsive and starts from the top
                    width={100}          // Set width and height percentages to control image responsiveness
                    height={60}          // Adjust the height percentage to match the aspect ratio of your image
                    objectFit="contain"  // Ensures the full image is visible without cropping
                    priority
                    className='rounded-xl'
                />
            </div>
            <div className="md:hidden relative w-full h-auto">
                <Image
                    src={Landing2}
                    alt="Background Image"
                    layout="responsive"  // Ensures the image is responsive and starts from the top
                    width={100}          // Set width and height percentages to control image responsiveness
                    height={60}          // Adjust the height percentage to match the aspect ratio of your image
                    objectFit="contain"  // Ensures the full image is visible without cropping
                    priority
                    className='rounded-xl'
                />
            </div>

            {/* Text on the left */}
           
        </div>
    );
}
