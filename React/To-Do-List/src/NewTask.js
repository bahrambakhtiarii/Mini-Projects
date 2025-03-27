import { useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';


const NewTask = () => {


    const allTasks = useStoreState((state) => state.allTasks);
    const setAllTasks = useStoreActions((actions) => actions.setAllTasks);

    const makeNewTask = useStoreState((state) => state.makeNewTask);
    const setMakeNewTask = useStoreActions((actions) => actions.setMakeNewTask);

    const navigate = useNavigate();

    const handleSubmit  = (e) => {
        e.preventDefault();

        const nid = Date.now();

        const newTask = {
            id: nid,
            title: makeNewTask.taskTitle,
            body: makeNewTask.taskBody, 
            dedLine: makeNewTask.dedline, 
            category: makeNewTask.category, 
            status: false
        };

        setAllTasks([...allTasks, newTask]);
        setMakeNewTask({field: 'taskBody', value: '' });
        setMakeNewTask({field: 'dedline', value: '' });
        setMakeNewTask({field: 'category', value: '' });
        setMakeNewTask({field: 'taskTitle', value: '' });
       
        navigate('/');

    }
    
    return(
        <form className="add-task" onSubmit={handleSubmit }>

            <section>
                <label name="title" id="writetitle">Title:</label>
                <input 
                    type="text"
                    value={makeNewTask.taskTitle}
                    onChange={(e) => setMakeNewTask({field: 'taskTitle', value: e.target.value})} 
                    required

                />
                <label htmlFor="category">Category</label>


                <select 
                    name="category" 
                    id="category"
                    value={makeNewTask.category}
                    onChange={(e) => setMakeNewTask({field: 'category', value: e.target.value})}
                    required
                >
                    <option value="normal">Normal</option>
                    <option value="essential">Essential</option>
                    <option value="unnecessary">Unnecessary</option> 
                    
                </select>


                <label name="dedLine" id="chosededline">DeadLine:</label>
                <input 
                    type="date"
                    value={makeNewTask.dedline}
                    onChange={(e) => setMakeNewTask({field: 'dedline', value: e.target.value})}
                    required

                />
            </section>

            
            <textarea 
                value={makeNewTask.taskBody}
                onChange={(e) => setMakeNewTask({field: 'taskBody', value: e.target.value})}
                required
                rows="5" 
                placeholder="write..."
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewTask;