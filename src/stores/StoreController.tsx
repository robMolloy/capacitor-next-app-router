"use client";

import { useTestStore } from "./testStore";

export const StoreController = () => {
  const testStore = useTestStore();
  return (
    <div>
      zustand stores will not persist state when going from page router to app
      router pages
      <br />
      <br />
      <div className="flex justify-center">
        <button
          className="bg-gray-200 py-2 px-4"
          onClick={() => testStore.increment(-1)}
        >
          -
        </button>
        <div className="py-2 px-4">{testStore.data}</div>
        <button
          className="bg-gray-200 py-2 px-4"
          onClick={() => testStore.increment()}
        >
          +
        </button>
      </div>
    </div>
  );
};
