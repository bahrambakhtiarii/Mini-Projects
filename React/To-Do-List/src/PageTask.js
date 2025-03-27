import { Link, useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';



const PageTask = () => {
    const { id } = useParams(); 

    const allTasks = useStoreState((state) => state.allTasks);
    const deleteTask = useStoreActions((actions) => actions.deleteTask);

    const navigate = useNavigate();
    const task = allTasks.find(t => t.id === Number(id)); 

    if (!task) return <h2>Task not found!</h2>; 

    const handleDelete  = (id) => {
      deleteTask(id);  
      navigate('/');
  }
    
    return (
      <main className="PageTask">
        <h2>{task.title}</h2>
        <p className="category"><strong>Category:</strong> {task.category}</p>
        <p className="dedLine"><strong>Deadline:</strong> {task.dedLine}</p>
        <p className="description"><strong>Description:</strong> {task.body}</p>

        <section className="btns-pagetask">
            <button><Link to={`/task/edit/${task.id}`}>Edit Task</Link></button>
            <button onClick={() => handleDelete(task.id)}>Delete Task</button>

        </section>
      </main>
    );

}

export default PageTask;