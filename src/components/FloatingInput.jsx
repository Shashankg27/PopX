const FloatingInput = ({ label, required = false, type = "text", name, value, placeholder }) => (
  <div className="relative w-full">
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder} // keep this to trigger 'peer' behavior
      required={required}
      value={value}
      className="peer w-full px-3 pt-5 pb-2 text-sm bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-[#6c25ff] focus:ring-1 focus:ring-[#6c25ff]"
    />
    <label
      htmlFor={name}
      className="absolute left-1 px-1 bg-[#F7F8F9] text-sm text-[#6c25ff] scale-90 -translate-y-3 transition-all peer-focus:text-[#6c25ff]"
    >
      {label}{required && <span className="text-red-500">*</span>}
    </label>
  </div>
);


  
export default FloatingInput;