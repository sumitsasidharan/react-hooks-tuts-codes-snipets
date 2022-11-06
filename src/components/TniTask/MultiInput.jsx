import React, { useState } from 'react';
import { IoCopySharp, IoCopy } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import SelectList from './SelectList';
// import { selectListArray } from '../../demoData';

import './MultiInput.css';

const MultiInput = ({
   selectListArray,
   listId,
   deleteList,
   allSelectedOptions,
   setAllSelectedOptions,
   showMessage,
}) => {
   // const [disableFilter, setDisableFilter] = useState(false);

   const handleDisableFilter = (e) => {
      setAllSelectedOptions((prev) => {
         return {
            ...prev,
            disableFilter: e.target.checked,
         };
      });

      const showMsg = e.target.checked ? 'Filter Disabled!' : 'Filter Enabled!';
      showMessage(showMsg);
   };

   return (
      <div className="multiInput_Wrapper">
         <div className="selectList_Wrapper">
            {selectListArray.map((item) => {
               return (
                  <SelectList
                     key={item.id}
                     options={item}
                     setAllSelectedOptions={setAllSelectedOptions}
                  />
               );
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
               <input
                  type="checkbox"
                  value={allSelectedOptions.disableFilter}
                  onChange={handleDisableFilter}
               />
               <span className="slider round"></span>
            </label>
         </div>

         {/* Delete Icon */}
         <div onClick={() => deleteList(listId)} className="deleteIcon_Wrapper">
            <TiDelete size="2em" color="red" />
         </div>
      </div>
   );
};

export default MultiInput;
