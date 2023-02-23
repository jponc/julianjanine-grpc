import { useState } from "react";
import { Attendance, Guest } from "../../protos/api_pb";

type Props = {
  guest: Guest;
  onAttendanceChange: (guestId: string, newAttendance: Attendance) => void;
  onDietaryRequirementChange: (
    guestId: string,
    newDietaryRequirement: string
  ) => void;
};

const DIETARY_REQUIREMENTS = [
  "Gluten-free",
  "Penuts allergy",
  "Vegan",
  "Vegetarian",
  "None",
];

export const RSVPItem: React.FC<Props> = ({
  guest,
  onAttendanceChange,
  onDietaryRequirementChange,
}) => {
  const [attendance, setAttendance] = useState<Attendance>(
    guest.getAttendance()
  );

  const [dietaryRequirement, setDietaryRequirement] = useState<string>(
    guest.getDietaryRequirement()
  );

  const handleOnClickAttendance = (a: Attendance) => {
    setAttendance(a);
    onAttendanceChange(guest.getId(), a);
  };

  const handleOnSelectDietaryRequirement = (newDietaryRequirement: string) => {
    if (newDietaryRequirement === "None") {
      setDietaryRequirement("");
      onDietaryRequirementChange(guest.getId(), "");
      return;
    }

    setDietaryRequirement(newDietaryRequirement);
    onDietaryRequirementChange(guest.getId(), newDietaryRequirement);
  };

  const btnClass = `btn dropdown-toggle ${getButtonType(attendance)}`;
  const isAttending = attendance === Attendance.ATTENDANCE_YES;

  return (
    <li
      className="list-group-item"
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h5 className="rsvp-item-name">{guest.getName()}</h5>
      <div style={{ width: "100%" }}>
        <div className="dropdown">
          <button
            className={btnClass}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ width: "100%" }}
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
        {isAttending && (
          <div className="dropdown">
            <button
              className="btn dropdown-toggle btn-light"
              id="dietaryOptionsButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ width: "100%" }}
            >
              {dietaryRequirement === ""
                ? "Select dietary requirement"
                : dietaryRequirement}
            </button>
            <div
              className="dropdown-menu"
              aria-labelledby="dietaryOptionsButton"
            >
              {DIETARY_REQUIREMENTS.map((dietaryRequirement) => (
                <div
                  className="dropdown-item"
                  key={dietaryRequirement}
                  onClick={() =>
                    handleOnSelectDietaryRequirement(dietaryRequirement)
                  }
                >
                  {dietaryRequirement}
                </div>
              ))}
            </div>
          </div>
        )}
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
