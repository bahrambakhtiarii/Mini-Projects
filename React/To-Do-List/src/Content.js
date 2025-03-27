import { useMemo } from "react";
import Lin from "./Lin";
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useStoreState } from 'easy-peasy';


const Content = () => {

    const allTasks = useStoreState((state) => state.allTasks);
    const filter = useStoreState((state) => state.filter);

    const filteredTasks = useMemo(() => {
        return allTasks.filter(item => {
            switch (filter) {
                case "all":
                    return true;
                case "completed":
                    return item.status === true;
                case "pending":
                    return item.status === false; 
                case "essential":
                    return item.category === 'essential'; 
                case "normal":
                    return item.category === 'normal'; 
                case "unnecessary":
                    return item.category === 'unnecessary';     
                default:
                    return true;
            }
        });
    }, [allTasks, filter]); 

    return (
        <ul>
            <SortableContext items={filteredTasks} strategy={verticalListSortingStrategy}>
                {filteredTasks.map((item) => (
                    <Lin id={item.id} key={item.id} item={item} />
                ))}
            </SortableContext>
        </ul>
        
    );
};

export default Content;
