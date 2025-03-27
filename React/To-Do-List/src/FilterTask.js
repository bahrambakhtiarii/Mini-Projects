import { useStoreState, useStoreActions } from 'easy-peasy';


const FilterTask = () => {
    
    const filter = useStoreState((state) => state.filter);
    const setFilter = useStoreActions((actions) => actions.setFilter);

    return(
        <ul className="filter-task">
            <li 
                className={filter === 'all' ? 'active' : ''}
                onClick={() => setFilter('all')}
                >
                All
            </li>

            <li 
                className={filter === 'completed' ? 'active' : ''}
                onClick={() => setFilter('completed')}
                >
                Completed
            </li>

            <li 
                className={filter === 'pending' ? 'active' : ''}
                onClick={() => setFilter('pending')}
                >
                Pending
            </li>

            <li 
                className={filter === 'essential' ? 'active' : ''}
                onClick={() => setFilter('essential')}
                >   
                Essential
            </li>

            <li 
                className={filter === 'normal' ? 'active' : ''}
                onClick={() => setFilter('normal')}
                >
                Normal
            </li>

            <li 
                className={filter === 'unnecessary' ? 'active' : ''}
                onClick={() => setFilter('unnecessary')}
                >
                Unnecessary
            </li>
        </ul>
    )
}

export default FilterTask;


