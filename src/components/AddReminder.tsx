import React, { useState } from "react";

interface AddReminderProps {
  onAddreminder: (title: string) => void;
}

function AddReminder(props: AddReminderProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    props.onAddreminder(title);
    setTitle("");
  };

  return (
    <div className="container px-6 pt-6">
      <form onSubmit={handleSubmit}>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block flex-1 border-0 bg-transparent pt-2.5 pb-3.5 pl-6 text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="rounded-full mt-3 bg-indigo-600 pt-2.5 pb-3.5 px-6 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Reminder
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddReminder;
