const DropDown = ({ title, option, fnc }) => {
  return (
    <div>
      <select
        name=""
        id=""
        defaultValue={1}
        onChange={fnc}
        className="appearance-none w-[10rem] px-4 py-2 pr-8 border border-gray-300 rounded-lg shadow-sm text-[#5505b1] text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value={1} disabled>
          {title}
        </option>
        {option.map((o) => (
          <option value={o} key={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
