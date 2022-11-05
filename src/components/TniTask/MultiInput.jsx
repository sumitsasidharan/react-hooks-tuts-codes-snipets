import React from 'react';
import { IoCopySharp, IoCopy } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import SelectList from './SelectList';
import { selectListArray } from '../../demoData';

import './MultiInput.css';

const MultiInput = () => {
   return (
      <div className="multiInput_Wrapper">
         <div className="selectList_Wrapper">
            {selectListArray.map((item) => {
               return <SelectList key={item.id} options={item} />;
            })}
         </div>

         {/* Copy Icon */}
         <div className="copyIcon_Wrapper">
            <IoCopySharp size="1.5em" color="red" />
         </div>

         {/* Duplicate Icon */}
         <div className="copyIcon_Wrapper">
            <IoCopy size="1.5em" color="blue" />
         </div>

         {/* DISABLE TOGGLE */}
         <div className="disable_Toggle">
            <label className="switch">
               <input type="checkbox" />
               <span className="slider round"></span>
            </label>
         </div>

         {/* Delete Icon */}
         <div className="copyIcon_Wrapper">
            <TiDelete size="2em" color="red" />
         </div>
      </div>
   );
};

export default MultiInput;
