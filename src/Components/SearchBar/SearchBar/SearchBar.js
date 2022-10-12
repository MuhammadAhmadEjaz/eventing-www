import {
  CalendarMonthOutlined,
  CalendarTodayOutlined,
  Search,
} from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useEffect } from "react";
import "./SearchBar.scss";
import Calendar from "react-calendar";
import { useState } from "react";

function SearchBar(props) {
  //useState
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(false);
  //useEffect
  useEffect(() => {
    console.log(calendarValue);
  }, [calendarValue]);
  return (
    <div className="search-bar">
      <Paper
        component="form"
        className="search-bar-paper"
        // sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <InputBase fullWidth placeholder="Cari Photographer, Katering, dsb" />
        <IconButton
          aria-label="calendar"
          type="button"
          className="calendar-button"
          onClick={()=>{setCalendarVisible(!calendarVisible)}}
        >
          <CalendarMonthOutlined className="calendar-logo" />
        </IconButton>
        <IconButton aria-label="Search" type="button" className="search-button" >
          <Search />
        </IconButton>
      </Paper>
      <div className="calendar-outer" style={{display:calendarVisible?('block'):('none')}}>
        <Calendar onChange={setCalendarValue} value={calendarValue} />
      </div>
    </div>
  );
}

export default SearchBar;
