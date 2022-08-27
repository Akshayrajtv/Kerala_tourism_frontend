import React from 'react'

import BoraBora from '../assets/img1.jpg';
import BoraBora2 from '../assets/img2.jpg';
import Maldives from '../assets/img3.jpg';
import Maldives2 from '../assets/img4.jpg';
import Maldives3 from '../assets/img2.jpg';
import KeyWest from '../assets/img5.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={BoraBora} text='Thekkady' />
    <SelectsCard bg={BoraBora2} text='Kovalam' />
    <SelectsCard bg={Maldives} text='Padmanabhaswamy Temple' />
    <SelectsCard bg={Maldives2} text='Athirapilly WaterFalls' />
    <SelectsCard bg={Maldives3} text='Kovalam' />
    <SelectsCard bg={KeyWest} text='Lulu Mall' />
    
        
    </div>
  )
}

export default Selects