
const todoList = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test suite", () => {
  // Before starting all tests
  beforeAll(() => {
    add({
      title: "My todo(Akash)",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  //add function
  test("Inserting a new todo", () => {
    const todoLength = all.length;
    add({
      title: "My todo(Akash)",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(todoLength + 1);
  });

  //markAsComplete function
  test("Mark todo as complete", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  //overdue function
  test("Todos are overdue", () => {
    add({
      title: "Overdue test",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(1);
  });

  //dueToday function
  test("Today's-Due-todos", () => {
    
    expect(dueToday().length).toBe(2);
  });

  //dueLater function
  test("Due-later-todos", () => {
    add({
      title: "Test-due-later",
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 1)
      ).toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(1);
  });
});