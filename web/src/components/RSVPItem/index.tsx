import { useState } from "react";
import { Attendance, Guest } from "../../protos/api_pb";

type Props = {
  guest: Guest;
  onAttendanceChange: (guestId: string, newAttendance: Attendance) => void;
};

export const RSVPItem: React.FC<Props> = ({ guest, onAttendanceChange }) => {
  const [attendance, setAttendance] = useState<Attendance>(
    guest.getAttendance()
  );

  const handleOnClickAttendance = (a: Attendance) => {
    setAttendance(a);
    onAttendanceChange(guest.getId(), a);
  };

  const btnClass = `btn dropdown-toggle ${getButtonType(attendance)}`;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {guest.getName()}
      <div className="dropdown">
        <button
          className={btnClass}
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {getAttendanceName(attendance)}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {Object.values(Attendance)
            .filter(
              (a) =>
                a !== Attendance.ATTENDANCE_PENDING &&
                a !== Attendance.ATTENDANCE_TENTATIVE
            )
            .map((a) => {
              return (
                <div
                  className="dropdown-item"
                  key={a}
                  onClick={() => handleOnClickAttendance(a as Attendance)}
                >
                  {getAttendanceName(a as Attendance)}
                </div>
              );
            })}
        </div>
      </div>
    </li>
  );
};

const getAttendanceName = (attendance: Attendance): string => {
  switch (attendance) {
    case Attendance.ATTENDANCE_PENDING:
      return "Pending";
    case Attendance.ATTENDANCE_NO:
      return "Not Attending";
    case Attendance.ATTENDANCE_TENTATIVE:
      return "Tentative";
    case Attendance.ATTENDANCE_YES:
      return "Attending";
  }
};

const getButtonType = (attendance: Attendance): string => {
  switch (attendance) {
    case Attendance.ATTENDANCE_PENDING:
      return "btn-secondary";
    case Attendance.ATTENDANCE_NO:
      return "btn-danger";
    case Attendance.ATTENDANCE_TENTATIVE:
      return "btn-warning";
    case Attendance.ATTENDANCE_YES:
      return "btn-success";
  }
};
