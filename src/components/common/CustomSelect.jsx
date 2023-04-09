import './CustomSelect.css'

function CustomSelect({ onChange, ariaLabel, options, selectedValue }) {
  return (
    <div className='select'>
      <select
        onChange={(e) => {
          onChange(e.target.value)
        }}
        className='custom-select'
        aria-label={ariaLabel}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            selected={selectedValue === option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className='focus'></span>
    </div>
  )
}

export default CustomSelect
