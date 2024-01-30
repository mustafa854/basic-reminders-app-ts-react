import Reminder from "../models/Reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList(props: ReminderListProps) {
  return (
    <>
      <div className="container p-6">
        <ul className="w-full text-sm font-normal text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {props.items.map((item) => (
            <li
              className="w-full px-8 py-4 border-b border-gray-200 dark:border-gray-600"
              key={item.id}
            >
              {item.title}
              <button
                className="border border-red-600 text-red-600 px-4 py-2 ms-2 rounded-full"
                onClick={() => props.onRemoveReminder(item.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ReminderList;
