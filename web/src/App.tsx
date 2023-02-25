import { Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { RSVPScreen } from "./screens/RSVPScreen";
import { ScheduleScreen } from "./screens/ScheduleScreen";
import { FAQsScreen } from "./screens/FAQsScreen";
import type {} from "@mui/lab/themeAugmentation";
import { DressCodeScreen } from "./screens/DressCodeScreen";
import { IGFeedScreen } from "./screens/IGFeedScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/schedule" element={<ScheduleScreen />} />
      <Route path="/faqs" element={<FAQsScreen />} />
      <Route path="/rsvp/:code" element={<RSVPScreen />} />
      <Route path="/rsvp" element={<RSVPScreen />} />
      <Route path="/dress-code" element={<DressCodeScreen />} />
      <Route path="/ig-feed" element={<IGFeedScreen />} />
    </Routes>
  );
}

export default App;
