import { createStore, action, thunk, computed } from 'easy-peasy';


const initialTasks = (() => {
    const data = localStorage.getItem("dataTasks");
    if (data && data !== "undefined") {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
            return []; 
        }
    }
    return []; 
})();



export default createStore({

    /****************States****************/

    allTasks: initialTasks,
    setAllTasks: action((state, newTasks) => {
        state.allTasks = newTasks;
        localStorage.setItem("dataTasks", JSON.stringify(newTasks));
    }),

    filter: "all",
    setFilter: action((state, payload) => {
        state.filter = payload;
    }),

    //FOR EDIT TASKS
    editTask: {
        category: '',
        dedline: '',
        body: '',
        title: ''
    },
    setEditTask: action((state, payload) => {
    state.editTask = { ...state.editTask, ...payload }; 
    }),


    initializeEditTask: action((state, task) => {

        state.editTask = {
            category: task.category,
            dedline: task.dedLine,
            body: task.body,
            title: task.title,
        }
    }),

    //FOR FOOTER
    countTask: {
        pending: 0,
        completed: 0,
    },
    editCountTask: action((state , { field, value }) => {
        state.countTask[field] = value;
    }),

    //FOR MAKE NEW TASK

    makeNewTask: {
       category: 'normal',
       dedline: '',
       taskBody: '',
       taskTitle: ''
    },
    setMakeNewTask: action((state , {field, value}) => {
        state.makeNewTask[field] = value
    }),

    /****************Functions****************/

    // filteredTasks: computed((state) => {
    //     switch (state.filter) {
    //         case 'completed':
    //             return state.allTasks.filter(task => task.status === 'completed');
    //         case 'pending':
    //             return state.allTasks.filter(task => task.status === 'pending');
    //         case 'essential':
    //         case 'normal':
    //         case 'unnecessary':
    //             return state.allTasks.filter(task => task.category === state.filter);
    //         default:
    //             return state.allTasks;
    //     }
    // }),

    deleteTask: action((state, id) => {
        state.allTasks = state.allTasks.filter((task) => task.id !== id);
        localStorage.setItem("dataTasks", JSON.stringify(state.allTasks)); 
    }),
    changeStatus: action((state, id) => {
        state.allTasks = state.allTasks.map((task) =>
            task.id === id ? { ...task, status: !task.status } : task
        );
        localStorage.setItem("dataTasks", JSON.stringify(state.allTasks)); 
    })


});