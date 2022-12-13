import React from 'react';
import Button from './Button';
import CheckedIcon from './CheckedIcon';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel'
import { styles } from './buttonStyles';
import { useState } from 'react';

const CardsComponent = () => {
   
   const mensual = {
    title: 'mensual',
    basico: 50,
    Pro: 75, 
    Empresas: 99 
   };

   const anual  = {
    title: 'anual',
        basico: 360,
        Pro: 540,
        Empresas: 713,
        
   };

    const [Price, setPrice] = useState(mensual);
    const onSwitchChange = (event) => {
        event.preventDefault();
        setPrice(anual)
    }


    return (
        <div className='max-w-[1240px] px-6 m-auto'>
        <div className='flex items-center text-white justify-center gap-4 mt-6 mb-[42px]'>
            <FormControlLabel
          control={
            <Switch label='label'
             color='default'
             onChange={onSwitchChange}
             />

          }
          label="Mensual"
          labelPlacement="start"

        />
            <p className='ml-4'>Anualmente (-40%) </p>
        </div> 
        <div className='flex sm:flex-col sm:gap-6 sm:items-center sm:justify-center sm:p-2 lg:flex-row md:flex-row md:m-6 p-3 justify-center align-center text-left md:px-6'>
            <div className='w-[397px] h-[702px] rounded-3xl bg-[#16161A] border-[#EFF0F6] border-[1px] p-[40px] flex flex-col'>
                <div>
                <h1 className='text-white font-[Inter] font-bold text-5xl p-0 '>Básico</h1> 
                <p className='text-[#94A1B2] font-[Inter] '>Plan Individual</p>
                </div>
               
               <p className='text-[#94A1B2] mt-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur minus cum, voluptatum aut nesciunt maiores ipsam </p>
               
               <p className='text-white font-bold text-5xl p-0 font-[Inter] mt-4'>${Price.basico}<span className='text-white  font-bold text-lg'>usd</span><span className='text-[#94A1B2] font-bold text-lg'>/{Price.title}</span> </p>
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
            
            
                <div className='w-[397px] h-[702px] rounded-3xl bg-[#B69EFF] border-[#7F5AF0] border-[1px] p-[40px] flex flex-col shadow-2xl hover:shadow-violet-900 ] '>
                <div>
                <h1 className='text-[#0E172C] font-[Inter] font-bold text-5xl p-0 '>Pro</h1> 
                <p className='text-[##0E172C] font-[Inter] '>Plan Individual</p>
                </div>
               
               <p className='text-[##0E172C] mt-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur minus cum, voluptatum aut nesciunt maiores ipsam </p>
               
               <p className='text-[#0E172C] font-bold text-5xl p-0 font-[Inter] mt-4'>${Price.Pro}<span className='text-[#0E172C]  font-bold text-lg'>usd</span><span className='text-[#0E172C] font-bold text-lg'>/{Price.title}</span> </p>
               <div className='mt-6 mb-4'>
               <p className='text-[#0E172C] font-DM-sans font-bold text-lg mb-4'>¿Qué está incluído?</p>
               <ul className='text-[#0E172C] font-[Inter]'>
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
                <h1 className='text-white font-[Inter] font-bold text-5xl p-0 '>Empresas</h1> 
                <p className='text-[#94A1B2] font-[Inter] '>Plan para 5 miembros</p>
                </div>
               
               <p className='text-[#94A1B2] mt-6' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, pariatur minus cum, voluptatum aut nesciunt maiores ipsam </p>
               
               <p className='text-white font-bold text-5xl p-0 font-[Inter] mt-4'>${Price.Empresas}<span className='text-white  font-bold text-lg'>usd</span><span className='text-[#94A1B2] font-bold text-lg'>/{Price.title}</span> </p>
               <div className='mt-6 mb-4'>
               <p className='text-white font-DM-sans font-bold text-lg mb-4'>¿Qué está incluído?</p>
               <ul className='text-white font-[Inter]'>
               <li className='mt-4  inline-flex align-items'><CheckedIcon/> Acceso de por vida a los cursos que completes </li>
               <li className='mt-4 inline-flex align-items'><CheckedIcon/> Acceso a todos los cursos </li>
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