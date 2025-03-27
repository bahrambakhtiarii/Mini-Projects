import { useEffect } from "react";
import { useStoreState, useStoreActions } from 'easy-peasy';


const Footer = () => {

    const allTasks = useStoreState((state) => state.allTasks);

    const countTask = useStoreState((state) => state.countTask);
    const editCountTask = useStoreActions((actions) => actions.editCountTask);


    const all =  allTasks.length;

    useEffect(() => {
        let newPending = 0;
        let newCompleted = 0;

        allTasks.forEach(task => {
            task.status ? newCompleted++ : newPending++;
        })
        editCountTask({field: 'pending' , value: newPending });
        editCountTask({ field: 'completed', value: newCompleted });
    },[allTasks, editCountTask])
    
    return(
        <footer>
            <p>All Task: {all}</p>
            <p>Completed: {countTask.completed}</p>
            <p>Pending: {countTask.pending}</p>
        </footer>
    )
}

export default Footer;

