import { addTask} from './src/modules/operations.js';

describe("Add a task", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test("add a task", () => {
        const tasks = [];
        const description = "Buy clothes";
        addTask(description, tasks);

        expect(tasks).toHaveLength(1);

        const [ task ] = tasks;

        expect(task.description).toBe(description);
        expect(task.completed).toBe(false);
        expect(task.index).toBe(1);
    });

    test('adds a new task to the end of the tasks array', () => {
        const tasks = [{ description: 'Do laundry', completed: false, index: 1 }];
        const description = 'Buy groceries';
        addTask(description, tasks);
    
        expect(tasks).toHaveLength(2);
    
        const newTask = tasks[1];
        expect(newTask.description).toBe(description);
        expect(newTask.completed).toBe(false);
        expect(newTask.index).toBe(2);
      });

      test('updates the localStorage with the new tasks array', () => {
        const tasks = [{ description: 'Do laundry', completed: false, index: 1 }];
        const description = 'Buy groceries';
        addTask(description, tasks);
    
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        expect(tasksFromLocalStorage).toEqual(tasks);
      });
})