<!-- src/components/About.vue -->
<template>
    <div class="about-page">
      <h2 class="text-2xl font-semibold mb-2 flex items-center">
      <i class="fas fa-star mr-2"></i> Key Features
    </h2>
    <ul class="list-disc pl-6">
      <li>
        <strong>Create Tasks:</strong> Quickly add new tasks with a due date and
        an optional icon to represent each task.
      </li>
      <li>
        <strong>Edit Tasks:</strong> Modify existing tasks by clicking on the
        task text or changing the due date.
      </li>
      <li>
        <strong>Toggle Task Completion:</strong> Mark tasks as completed by
        clicking on the check icon. Completed tasks will be moved to the
        "Completed Tasks" section.
      </li>
      <li>
        <strong>Duplicate Tasks:</strong> Easily create a duplicate of a task by
        clicking on the clone icon.
      </li>
      <li>
        <strong>Delete Tasks:</strong> Remove tasks from your list by clicking
        on the trash icon.
      </li>
    </ul>

    <h2 class="text-2xl font-semibold mb-2 mt-8 flex items-center">
      <i class="fas fa-info-circle mr-2"></i> How to Use
    </h2>
    <ol class="list-decimal pl-6">
      <li>
        <strong>Adding a Task:</strong> To add a new task, enter the task name in
        the "What needs to be done?" input field. Then, select a due date
        (optional) using the date picker and choose an icon to represent the
        task from the dropdown menu. Click on the "Add Task" button to save the
        task to your list.
      </li>
      <li>
        <strong>Editing a Task:</strong> To edit a task's name or due date,
        simply click on the respective input field and make the desired changes.
        The task will be automatically updated.
      </li>
      <li>
        <strong>Marking a Task as Completed:</strong> Click on the check icon
        next to the task to mark it as completed. The task will be moved to the
        "Completed Tasks" section.
      </li>
      <li>
        <strong>Duplicating a Task:</strong> Click on the clone icon next to a
        task to create a duplicate of it. The new task will be added to your
        list with the same name, due date, and icon.
      </li>
      <li>
        <strong>Deleting a Task:</strong> Click on the trash icon next to a task
        to delete it. A confirmation modal will appear to ensure you want to
        delete the task. Click on "Delete" to confirm the action.
      </li>
    </ol>
      <div class="created-by text-center mt-16">
      <p>Built by Joel</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutApp",
  };
  </script>
  
  <style scoped>
  /* Add any CSS styles for the About page here */

  .created-by {
    bottom: 30px;
    width: 90%;
    text-align: center;
  }
  </style>
  