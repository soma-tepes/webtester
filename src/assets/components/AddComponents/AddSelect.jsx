import React from 'react'

const AddSelect = ({optionValueSelect,setOptionValueSelect,endpoints}) => {
  return (
    <div className="addFormSelect">
    <div>
      <h2> <span>Select Form Link !</span></h2>
    </div>
    <div>
      <select className="addOption"  value={optionValueSelect} onChange={(e) => setOptionValueSelect(e.target.value)} >
        <option  value={0}>Select Option!</option>
        {
          endpoints.map((e,i) =>
            <option value={e}>List URL {i+1}</option>
          )}
      </select>

    </div>
  </div>
  )
}

export default AddSelect