import React, { useState } from "react";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@hassanmojab/react-modern-calendar-datepicker";
import { FaSearch, FaPlus, FaMinus } from "react-icons/fa";

// --

const SearchBox = () => {
  const [selectedGoDay, setSelectedGoDay] = useState(null);
  const [showCalenderGo, setShowCalenderGo] = useState(false);
  const [showPassengerCounter, setShowPassengetCounter] = useState(false);
  const [selectedBackDay, setSelectedBackDay] = useState(null);
  const [showCalenderBack, setShowCalenderBack] = useState(false);
  const [passengerCount, setPassengerCount] = useState(0);

  // ------------- passenger counter handler
  const addPassenger = () => {
    setPassengerCount((prevCount) => prevCount + 1);
  };
  const minusPassenger = () => {
    if (passengerCount === 0) {
      console.log(true, "0");
      return setPassengerCount(0);
    }
    setPassengerCount((prevCount) => prevCount - 1);
  };
  // -------------
  return (
    <form className="w-4/5 md:max-w-2xl mx-auto mt-28 md:mt-14 relative">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 items-center justify-between bg-white rounded-lg px-8 py-6 md:py-4">
        <div className="flex flex-col items-center border-b md:border-b-0 pb-3 md:pb-0 cursor-pointer space-y-1 w-2/3 md:w-auto">
          <h4 className="text-gray-600 text-sm">اقامتگاه، هتل و یا مقصد</h4>
          <small className="text-gray-400">انتخاب مقصد</small>
        </div>

        <div className="cursor-pointer flex flex-col  border-b md:border-b-0 pb-3 md:pb-0 space-y-1 w-2/3 md:w-auto text-center">
          <div
            onClick={() => {
              if (showCalenderBack) {
                setShowCalenderBack(false);
              }
              setShowCalenderGo((prevState) => !prevState);
            }}
          >
            <h4 className="text-gray-600 text-sm">تاریخ ورود</h4>
            <small className="text-gray-400">
              {selectedGoDay
                ? `${selectedGoDay.year}-${selectedGoDay.month}-${selectedGoDay.day}`
                : "وارد کنید"}
            </small>
          </div>
          {showCalenderGo && (
            <div className="absolute top-36 right-5 md:top-20 md:right-32">
              <Calendar
                value={selectedGoDay}
                onChange={setSelectedGoDay}
                shouldHighlightWeekends
                locale="fa" // add this
              />
            </div>
          )}
        </div>
        <div className="cursor-pointer flex flex-col  border-b md:border-b-0 pb-3 md:pb-0 space-y-1 w-2/3 md:w-auto text-center">
          <div
            onClick={() => {
              if (showCalenderGo) {
                setShowCalenderGo(false);
              }
              setShowCalenderBack((prevState) => !prevState);
            }}
          >
            <h4 className="text-gray-600 text-sm">تاریخ خروج</h4>
            <small className="text-gray-400">
              {selectedBackDay
                ? `${selectedBackDay.year}-${selectedBackDay.month}-${selectedBackDay.day}`
                : "وارد کنید"}
            </small>
          </div>
          {showCalenderBack && (
            <div className="absolute top-56 right-5 md:top-20 md:right-64">
              <Calendar
                value={selectedBackDay}
                onChange={setSelectedBackDay}
                shouldHighlightWeekends
                locale="fa" // add this
              />
            </div>
          )}
        </div>
        <div className="flex flex-col cursor-pointer space-y-1 border-b pb-3 md:pb-0 w-2/3 items-center md:w-auto md:border-b-0 text-center">
          <div
            onClick={() => setShowPassengetCounter((prevState) => !prevState)}
          >
            <h4 className="text-gray-600 text-sm">تعداد نفرات</h4>
            <small className="text-gray-400">
              {passengerCount !== 0 ? `${passengerCount} نفر` : "انتخاب کنید"}
            </small>
          </div>
          {showPassengerCounter && (
            <div className="absolute bottom-10 md:top-20 bg-white py-3 px-4 rounded-md  flex items-center border border-gray-100 shadow-md">
              <h4 className="text-gray-500 text-sm">تعداد نفرات</h4>
              <div className="flex items-start mr-8 ">
                <button
                  type="button"
                  className="flex-shrink-0 bg-gray-800 rounded-full p-0.5 flex items-center justify-center"
                  onClick={addPassenger}
                >
                  <FaPlus className="w-3 h-3 text-white" />
                </button>
                <span className="text-sm text-gray-500 px-2">
                  {passengerCount}
                </span>
                <button
                  type="button"
                  className="flex-shrink-0 bg-gray-800 rounded-full p-0.5 flex items-center justify-center"
                  onClick={minusPassenger}
                >
                  <FaMinus className="w-3 h-3 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="bg-gray-100 p-2 rounded-full hover:scale-95 transition-all duration-200 ease-out">
          <FaSearch className="w-4 h-4 text-gray-400 cursor-pointer md:block hidden" />
          <button className="w-2/3 text-sm px-8 md:hidden" type="button">
            جستجو
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
