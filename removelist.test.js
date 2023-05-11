import { deleteTask } from './src/modules/operations.js';

describe('deleteTask', () => {
    beforeEach(() =>{
        const tasks = [
            { description: 'Do laundry', completed: false, index: 1 },
            { description: 'Buy groceries', completed: false, index: 2 },
            { description: 'Clean the house', completed: false, index: 3 },
          ];
          localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    afterEach(() => {
        localStorage.clear();
    });

    test('removes the task at the specified index from the tasks array', () => {
        const tasks = [
          { description: 'Do laundry', completed: false, index: 1 },
          { description: 'Buy groceries', completed: false, index: 2 },
          { description: 'Clean the house', completed: false, index: 3 },
        ];
        const index = 2;
        deleteTask(index, tasks);
    
        expect(tasks).toHaveLength(2);
        expect(tasks[0].description).toBe('Do laundry');
        expect(tasks[1].description).toBe('Clean the house');
    });

    
    test('reindexes the remaining tasks in the tasks array', () => {
        const tasks = [
        { description: 'Do laundry', completed: false, index: 1 },
        { description: 'Buy groceries', completed: false, index: 2 },
        { description: 'Clean the house', completed: false, index: 3 },
        ];
        const index = 1;
        deleteTask(index, tasks);

        expect(tasks).toHaveLength(2);
        expect(tasks[0].index).toBe(1);
        expect(tasks[1].index).toBe(2);
    });
    
    test('delete a task', () =>{
        const tasks = [{
            description: 'Buy Coffee',
            completed: false,
            index: 1,
        }];

        deleteTask(1, tasks);
        expect(tasks.length).toBe(0);
    });

    test('delete a task based on the index', () =>{
        const tasks = [
            {
                description: 'Buy Coffee',
                completed: false,
                index: 1,
            },
            {
                description: 'Buy Coke',
                completed: false,
                index: 2,
            },
        ];

        deleteTask(2, tasks);
        expect(tasks.length).toBe(1);
    });

    test('updates the localStorage with the new tasks array', () => {
        const tasks = [
          { description: 'Do laundry', completed: false, index: 1 },
          { description: 'Buy groceries', completed: false, index: 2 },
          { description: 'Clean the house', completed: false, index: 3 },
        ];
        const index = 2;
        deleteTask(index, tasks);
    
        const tasksFromLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        expect(tasksFromLocalStorage).toEqual(tasks);
    });
})