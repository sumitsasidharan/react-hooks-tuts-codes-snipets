import React from 'react';

const SelectList = ({ options }) => {
   console.log(options);

   return (
      <div className="select_List">
         <label htmlFor="cars">LABEL</label>
         <select name="cars" id="cars" autoFocus>
            <option value="">{options.mainLabel}</option>
            {options.subLists.map((item) => {
               return (
                  <optgroup label={item.subLabel}>
                     {item.values.map((option) => {
                        return <option value={option}>{option}</option>;
                     })}
                  </optgroup>
               );
            })}
         </select>
      </div>
   );
};

export default SelectList;
