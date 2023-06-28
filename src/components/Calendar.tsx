import {
  DatePicker,
  DatePickerControl,
  DatePickerInput,
  DatePickerTrigger,
  DatePickerContent,
  DatePickerPrevTrigger,
  DatePickerViewTrigger,
  DatePickerNextTrigger,
  DatePickerGrid,
  DatePickerRowHeader,
  DatePickerColumnHeader,
  DatePickerRowGroup,
  DatePickerRow,
  DatePickerDayCell,
  DatePickerDayCellTrigger,
  DatePickerMonthCell,
  DatePickerMonthCellTrigger,
  DatePickerYearCell,
  DatePickerYearCellTrigger,
} from "@ark-ui/react";
import { CalendarIcon } from "../assets";

export const Calendar = () => {
  return (
    <DatePicker>
      {(api) => (
        <>
          <DatePickerControl className="w-full max-w-[320px] relative">
            {/* <span>View mode: {api.view}</span> */}
            <DatePickerInput className="w-full h-[50px] bg-[rgba(255,255,255,0.15)] text-sm text-white placeholder:text-white px-4 border-[2px] border-solid border-white rounded-xl" />
            <DatePickerTrigger className="absolute right-2 top-3">
              <img src={CalendarIcon} alt="icon" className=" text-white" />
            </DatePickerTrigger>
          </DatePickerControl>

          {/* ACTUAL CALENDAR */}
          <DatePickerContent className="w-[17rem] h-content min-h-[17rem] bg-white rounded-md p-1 z-40 absolute">
            <div className="flex gap-1 space-x-8 justify-center">
              <DatePickerPrevTrigger>Prev</DatePickerPrevTrigger>
              <DatePickerViewTrigger className="font-medium">
                {api.view === "day" && api.visibleRangeText.start}
                {api.view === "month" && api.visibleRange.start.year}
                {api.view === "year" &&
                  `${api.getDecade().start} - ${api.getDecade().end}`}
              </DatePickerViewTrigger>
              <DatePickerNextTrigger>Next</DatePickerNextTrigger>
            </div>

            {api.view === "day" && (
              <DatePickerGrid>
                <DatePickerRowHeader className="flex justify-center mt-1">
                  {api.weekDays.map(
                    (day: { long: string; narrow: string }, index: number) => (
                      <DatePickerColumnHeader
                        key={`${day.long}${index}`}
                        aria-label={day.long}
                        className="w-8 h-8 mr-1 text-center font-medium"
                      >
                        {day.narrow}
                      </DatePickerColumnHeader>
                    )
                  )}
                </DatePickerRowHeader>
                <DatePickerRowGroup className="mt-2">
                  {api.weeks.map((week: string[], id: number) => (
                    <DatePickerRow key={`week${id}`} className="flex mt-2">
                      {/* rome-ignore lint/suspicious/noExplicitAny: Cannot find type definitions */}
                      {week.map((day: any, id: number) => (
                        <DatePickerDayCell
                          key={`${day.day}${id}`}
                          value={day}
                          className="mr-1"
                        >
                          <DatePickerDayCellTrigger
                            type="button"
                            className="w-8 h-8 data-[selected]:bg-[#333] data-[selected]:text-white data-[selected]:rounded-full p-[4px] data-[outside-range]:text-white data-[outside-range]:cursor-"
                          >
                            {day.day}
                          </DatePickerDayCellTrigger>
                        </DatePickerDayCell>
                      ))}
                    </DatePickerRow>
                  ))}
                </DatePickerRowGroup>
              </DatePickerGrid>
            )}

            {api.view === "month" && (
              <DatePickerGrid>
                <DatePickerRowGroup>
                  {api
                    .getMonthsGrid({ columns: 4, format: "short" })
                    .map((months: never[], row: number) => (
                      <DatePickerRow key={`row${row}`}>
                        {months.map(
                          (
                            month: { value: number; label: string },
                            index: number
                          ) => (
                            <DatePickerMonthCell
                              key={`${month.label}${index}`}
                              value={month.value}
                            >
                              <DatePickerMonthCellTrigger>
                                {month.label}
                              </DatePickerMonthCellTrigger>
                            </DatePickerMonthCell>
                          )
                        )}
                      </DatePickerRow>
                    ))}
                </DatePickerRowGroup>
              </DatePickerGrid>
            )}
            {api.view === "year" && (
              <DatePickerGrid>
                <DatePickerRowGroup>
                  {api
                    .getYearsGrid({ columns: 4 })
                    .map((years: never[], row: number) => (
                      <DatePickerRow key={`row${row}`}>
                        {years.map(
                          (
                            year: { value: number; label: string },
                            index: number
                          ) => (
                            <DatePickerYearCell
                              key={`${year.value}${index}`}
                              value={year.value}
                            >
                              <DatePickerYearCellTrigger>
                                {year.label}
                              </DatePickerYearCellTrigger>
                            </DatePickerYearCell>
                          )
                        )}
                      </DatePickerRow>
                    ))}
                </DatePickerRowGroup>
              </DatePickerGrid>
            )}
          </DatePickerContent>
        </>
      )}
    </DatePicker>
  );
};
