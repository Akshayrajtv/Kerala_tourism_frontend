import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>Habibi.. Come to Kerala!</h2>
          <p className='py-4'>
          Loudly sold by the state tourism department as “God’s Own Country”, Kerala has become a must-do destination and a perfect stop for nature lovers, adventure seekers, honeymooners, families and backpackers. As exciting as Goa but less much of the commercialize, Kerala entices with her sun and sand, blue backwater lagoons, magnificent historical monuments, tea and coffee gardens, spice plantations, lush forests and much more….

          <br/>Tourism in Kerala is flourishing, as every third international travelers visiting India also visit Kerala for its most of the spectacular features: its ecological wonders, classical art forms, colorful festivals, delectable fresh local cuisine, temples and archeological sites, to name a few which makes it unique. Here tourists can browse around all what Kerala has to offer and no wonder struck by its major attractions that are spread across squares of miles. An evening reclining on a serene Kovalam beach or on the splendid backwaters of Kumarakom & Kuttanad or enjoy the therapeutic massages at Ayurvedic health centersto taste the authentic South Indian cuisine do really amazed and get camera-crazy at historical monuments of Thrissur and Thiruvananthapuram (Trivandrum). So no wonder fly to the land of sun and sand and spend days on the India's cleanest and most literate state Kerala and treasure an experience for lifetime.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Thekkady</option>
                      <option>Kovalam</option>
                      <option>Venginikkara</option>
                      <option>Padmanabhaswamy Temple</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;