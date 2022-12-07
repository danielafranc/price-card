import React from 'react';
import Button from './Button';
import CheckedIcon from './CheckedIcon';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel'
import {classnames} from 'tailwindcss-classnames';
import { styles } from './buttonStyles';


const CardsComponent = () => {
    return (
        <div className='m-0 p-0 box-border'>
        <div className='flex items-center text-white justify-center gap-[] mt-6 mb-[42px]'>
            <FormControlLabel
          control={
            <Switch label='label' color='default' className='ml-0' />

          }
          label="Mensual"
          labelPlacement="start"

        />
            <p>Anualmente</p>
        </div> 

        <div className='flex flex-row gap-[24px] p-3 justify-center align-center text-left'>
            <div className='w-[397px] h-[702px] rounded-3xl bg-[#16161A] border-[#EFF0F6] border-[1px] p-[40px] flex flex-col'>
                <div>
                <h1 className='text-white font-[Inter] font-bold text-5xl p-0 '>Básico</h1> 
                <p className='text-[#94A1B2] font-[Inter] '>Plan Individual</p>
                </div>
               
               <p className='text-[#94A1B2] mt-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur minus cum, voluptatum aut nesciunt maiores ipsam </p>
               
               <p className='text-white font-bold text-5xl p-0 font-[Inter] mt-4'>$50<span className='text-white  font-bold text-lg'>usd</span><span className='text-[#94A1B2] font-bold text-lg'>/mensual</span> </p>
               <div className='mt-6 mb-4'>
               <p className='text-white font-DM-sans font-bold text-lg mb-4'>¿Qué está incluído?</p>
               <ul className='text-white font-[Inter]'>
               <li className='opacity-25 mt-4  inline-flex align-items'><CheckedIcon/> Acceso de por vida a los cursos que completes </li>
               <li className='opacity-25 mt-4 inline-flex align-items'><CheckedIcon/> Acceso a todos los cursos </li>
               <li className='mt-4 inline-flex align-items'><CheckedIcon/> Acceso a todos los proyectos </li>
               <li className='mt-4 inline-flex align-items'><CheckedIcon/>Acceso a Discord </li>
                </ul>
                </div>
                <Button className={styles.light}/>
                </div>
            
            
                <div className='w-[397px] h-[702px] rounded-3xl bg-[#B69EFF] border-[#7F5AF0] border-[1px] p-[40px] flex flex-col'>
                <div>
                <h1 className='text-white font-[Inter] font-bold text-5xl p-0 '>Pro</h1> 
                <p className='text-[#94A1B2] font-[Inter] '>Plan Individual</p>
                </div>
               
               <p className='text-[#94A1B2] mt-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur minus cum, voluptatum aut nesciunt maiores ipsam </p>
               
               <p className='text-white font-bold text-5xl p-0 font-[Inter] mt-4'>$75<span className='text-white  font-bold text-lg'>usd</span><span className='text-[#94A1B2] font-bold text-lg'>/mensual</span> </p>
               <div className='mt-6 mb-4'>
               <p className='text-white font-DM-sans font-bold text-lg mb-4'>¿Qué está incluído?</p>
               <ul className='text-white font-[Inter]'>
               <li className='opacity-25 mt-4  inline-flex align-items'><CheckedIcon/> Acceso de por vida a los cursos que completes </li>
               <li className='mt-4 inline-flex align-items'><CheckedIcon/> Acceso a todos los cursos </li>
               <li className='mt-4 inline-flex align-items'><CheckedIcon/> Acceso a todos los proyectos </li>
               <li className='mt-4 inline-flex align-items'><CheckedIcon/>Acceso a Discord </li>
                </ul>
                </div>
                <Button className={styles.dark}/>
                </div>

                <div className='w-[397px] h-[702px] rounded-3xl bg-[#16161A] border-[#EFF0F6] border-[1px] p-[40px] flex flex-col'>
                <div>
                <h1 className='text-white font-[Inter] font-bold text-5xl p-0 '>Básico</h1> 
                <p className='text-[#94A1B2] font-[Inter] '>Plan Individual</p>
                </div>
               
               <p className='text-[#94A1B2] mt-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur minus cum, voluptatum aut nesciunt maiores ipsam </p>
               
               <p className='text-white font-bold text-5xl p-0 font-[Inter] mt-4'>$50<span className='text-white  font-bold text-lg'>usd</span><span className='text-[#94A1B2] font-bold text-lg'>/mensual</span> </p>
               <div className='mt-6 mb-4'>
               <p className='text-white font-DM-sans font-bold text-lg mb-4'>¿Qué está incluído?</p>
               <ul className='text-white font-[Inter]'>
               <li className='opacity-25 mt-4  inline-flex align-items'><CheckedIcon/> Acceso de por vida a los cursos que completes </li>
               <li className='opacity-25 mt-4 inline-flex align-items'><CheckedIcon/> Acceso a todos los cursos </li>
               <li className='mt-4 inline-flex align-items'><CheckedIcon/> Acceso a todos los proyectos </li>
               <li className='mt-4 inline-flex align-items'><CheckedIcon/>Acceso a Discord </li>
                </ul>
                </div>
                <Button className={styles.light}/>
                </div>
                </div>

            

        </div>
    );
};

export default CardsComponent;