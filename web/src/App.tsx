import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { RSVPScreen } from "./screens/RSVPScreen";
import { ScheduleScreen } from "./screens/ScheduleScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/schedule" element={<ScheduleScreen />} />
      <Route path="/rsvp/:id" element={<RSVPScreen />} />
      <Route path="/rsvp" element={<RSVPScreen />} />
    </Routes>
  );
}

export default App;
