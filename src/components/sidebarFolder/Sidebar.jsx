import React, { useContext, useEffect, useState } from "react";
import { BsListUl } from "react-icons/bs";
import { CgCalendarNext } from "react-icons/cg";
import { FcTodoList } from "react-icons/fc";
import { GrStatusInfo } from "react-icons/gr";
import { IoIosToday, IoMdAdd } from "react-icons/io";
import ModalCom from "../ui/ModalCom";
import { MdDateRange } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
// datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// time picker
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import moment from "moment";
import Today from "../today/Today";

// import AllStatus from "../main/status/AllStatus";
import Status from "../main/status/Status";
import { TodoContext } from "../../App";
import Next7Days from "../next7Days/Next7Days";

const Sidebar = () => {
  // const [todos, setTodos] = useState([]);
  const { todos, setTodos } = useContext(TodoContext);
  const [showModal, setShowModel] = useState(false);
  const [name, setName] = useState("");
  const [date, setdate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [error, setError] = useState("");
  const [showUI, setShowUI] = useState("");
  const [fitersTodos, setFiltersTodos] = useState(todos);

  console.log(showModal);
  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("click");
    if (name && time) {
      setError(""); // clear error
      setShowModel(false); // close modal only if valid
      setName(""); // reset form
      setTime("10:00");
      const newTodo = { name, date, time };
      setTodos([
        ...todos,
        {
          id: Math.ceil(Math.random() * 1000),
          names: name,
          times: moment(time, "HH:mm:ss").format("HH:mm a"),
          dates: moment(date).format("MM/DD/YYYY"),
          checked: false,
        },
      ]);
      setTime("");
      setName("");
      setShowModel(false);
    } else {
      setError("Please provide both name and time!"); // ✅ show error
    }
  };
  useEffect(() => {
    const currentDate = new Date();
    if (showUI === "today") {
      setFiltersTodos(
        todos.filter(
          (todo) => todo?.dates === moment(currentDate).format("MM/DD/YYYY")
        )
      );
    }
    if (showUI === "next7") {
      const next7Days = moment(currentDate).add(7, "days");
      setFiltersTodos((todo) =>
        moment(todo?.dates, "MM/DD/YYYY").isBetween(
          moment(currentDate).subtract(1, "days")
        )
      );
    }
  }, [showUI, todos]);

  // console.log("todos", todos);
  return (
    <div className="flex ">
      <div className="left-0 h-[calc(100vh-100px)]  w-80 bg-[#E1D8D9] text-white shadow-lg flex flex-col p-4 cursor-pointer">
        <p className="text-[#9C9696] text-2xl  flex justify-center">
          <FcTodoList />
          Todos of
        </p>
        <button
          className="p-2 hover:bg-[#18a7d7] flex items-center justify-center gap-2 bg-[#527589] mt-6 rounded-b-sm cursor-pointer"
          onClick={() => setShowModel(true)} // simple arrow function
        >
          <IoMdAdd className="text-black font-bold" />
          <span>Make A Todo</span>
        </button>
        <div>
          <div>
            <a
              className="text-black   text-2xl mt-6 flex justify-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setShowUI("today");
              }}
            >
              <IoIosToday />
              today
            </a>
            <a
              className="text-black   text-2xl mt-6 flex justify-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setShowUI("next7");
              }}
            >
              <CgCalendarNext />
              next 7 days
            </a>
            <a
              className="text-black   text-2xl mt-6 flex justify-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setShowUI("all");
              }}
            >
              <BsListUl />
              show all
            </a>
            <a
              className="text-black   text-2xl mt-6 flex justify-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                setShowUI("status");
              }}
            >
              <GrStatusInfo />
              status
            </a>
          </div>

          {showModal && (
            <ModalCom showModel={showModal} setShowModel={setShowModel}>
              <h4 className="font-bold text-sm flex text-black justify-center">
                Add a New Todo
              </h4>
              <h5 className="mt-4 font-medium flex justify-center underline text-black">
                Enter new name
              </h5>
              <form
                onSubmit={(e) => {
                  e.stopPropagation();
                  handleSubmit(e);
                }}
              >
                <div>
                  <input
                    className="w-full px-3 py-1 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your todo name"
                  />
                </div>
                <div
                  className="flex py-4 gap-10
              "
                >
                  <p
                    className="text-black flex gap-3  justify-start
                 "
                  >
                    <MdDateRange></MdDateRange>Pick a date
                  </p>
                  <DatePicker
                    className="text-black"
                    selected={date}
                    onChange={(date) => setdate(date)}
                  />
                </div>
                <div>
                  <p
                    className="text-black flex gap-3  justify-start
                 "
                  >
                    <AiOutlineFieldTime></AiOutlineFieldTime>Pick a time
                    <TimePicker
                      onChange={(time) => setTime(time)}
                      value={time}
                      selected={time}
                      amPmAriaLabel
                      closeClock={true}
                      hourPlaceholder="hh"
                      disableClock={true}
                      format="h:m:a"
                      minutePlaceholder="mm"
                      secondPlaceholder="ss"
                      clearIcon={true}
                    />
                  </p>
                </div>
                {error && (
                  <div>
                    <p className="text-red-700 mt-2 text-center">{error}</p>
                  </div> // ✅ error inside modal
                )}
                <div>
                  <button type="submit" className="bg-[#527589] w-full p-2 ">
                    Add Todo
                  </button>
                </div>
              </form>
            </ModalCom>
          )}
        </div>
      </div>
      <div className="flex w-full justify-center items-center ">
        {showUI === "today" && (
          <Today todos={fitersTodos} setTodos={setTodos} />
        )}
        {showUI === "next7" && <Next7Days />}
        {showUI === "all" && <Today todos={todos} setTodos={setTodos} />}
        {showUI === "status" && <Status />}
      </div>
    </div>
  );
};
export default Sidebar;
