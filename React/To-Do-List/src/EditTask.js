import { useParams, useNavigate } from "react-router-dom";
import {useEffect} from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';



const EditTask = () =>{
    const navigate = useNavigate();
    const {id} = useParams();
    

    const allTasks = useStoreState((state) => state.allTasks);
    const setAllTasks = useStoreActions((actions) => actions.setAllTasks);

    const editTask = useStoreState((state) => state.editTask);
    const setEditTask = useStoreActions((actions) => actions.setEditTask);

    const initializeEditTask = useStoreActions((actions) => actions.initializeEditTask);
    
    const task = allTasks.find(t => t.id === Number(id)); 

    useEffect(()=>{
        if (task) {
            initializeEditTask(task);
        }
    },[initializeEditTask, id])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const editedTask = {
            id: task.id,
            title: editTask.title,
            body: editTask.body,
            dedLine: editTask.dedline,
            category: editTask.category,
            status: task.status
            }
    
        const updatedTasks = allTasks.map((task) => 
            task.id === Number(id) ? editedTask : task
        );
        
    
        setAllTasks(updatedTasks);
        navigate('/'); 
    };
    


    return(
        <form className="edit-task" onSubmit={handleSubmit}>

            <section>
                <label name="title" id="writetitle">Title:</label>
                <input 
                    type="text"
                    value={editTask.title}
                    onChange={(e) => setEditTask({ title: e.target.value })} 
                    required

                />
                <label htmlFor="category">Category</label>


                <select 
                    name="category" 
                    id="category"
                    value={editTask.category}
                    onChange={(e) => setEditTask({ category: e.target.value })}
                    required
                >
                    <option value="essential">Essential</option>
                    <option value="normal">Normal</option>
                    <option value="unnecessary">Unnecessary</option>
                </select>


                <label name="dedLine" id="chosededline">DeadLine:</label>
                <input 
                    type="date"
                    value={editTask.dedline}
                    onChange={(e) => setEditTask({ dedline: e.target.value })} 
                    required

                />
            </section>

            
            <textarea 
                value={editTask.body}
                onChange={(e) => setEditTask({ body: e.target.value })} 
                required
                rows="5" 
                placeholder="write..."
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default EditTask;