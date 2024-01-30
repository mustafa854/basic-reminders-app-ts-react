import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import ReminderService from "./services/ReminderService";
import AddReminder from "./components/AddReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const fetchReminders = async () => {
    const response = await ReminderService.getReminders();
    setReminders(response);
  };

  const addreminder = async (title: string) => {
    const response = await ReminderService.addReminder(title);
    setReminders([...reminders, response]);
  };

  const removeReminder = async (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  return (
    <>
      <AddReminder onAddreminder={addreminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </>
  );
}

export default App;
