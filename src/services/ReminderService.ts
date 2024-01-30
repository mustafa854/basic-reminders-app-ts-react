import axios from "axios";
import Reminder from "../models/Reminder";

class ReminderService {
  async getReminders() {
    const response = await axios.get<Reminder[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  }

  async addReminder(title: string) {
    const response = await axios.post<Reminder>(
      "https://jsonplaceholder.typicode.com/todos",
      { title: title }
    );
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.data;
  }
}

export default new ReminderService();
