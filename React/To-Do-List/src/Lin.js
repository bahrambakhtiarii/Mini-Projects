import { Link } from "react-router-dom";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import image2 from './img/drag.png';
import { useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router-dom';





const Lin = ({id, item}) => {

    const deleteTask = useStoreActions((actions) => actions.deleteTask);
    const changeStatus = useStoreActions((actions) => actions.changeStatus);


    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});
    const st = item.status ? "checked" : "unchecked";
    const body = (item.body).length >= 25 ? (item.body).slice(0,25) + '...' :  item.body;

    const navigate = useNavigate();

    const handleDelete  = (id) => {
        deleteTask(id);  
        navigate('/');
    }

    const handleChangeStatus = () => {
        changeStatus(id);  
    };

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        cursor: 'pointer'

    };


    return(
        <li key={item.id} className={item.category}>

            <img src={image2} 
                ref={setNodeRef} 
                {...attributes} 
                {...listeners} 
                style={style}
            />
            <p className={st} onClick={() => handleChangeStatus(item.id)}></p>
            <Link to={`task/${item.id}`}><h3 className="title">{item.title}</h3> </Link>
            <Link to={`task/${item.id}`}><p className="content">{body}</p> </Link>
            <p className="dedLine">{item.dedLine}</p>
            <button className="icon-delet" onClick={() => handleDelete(item.id)}>-</button>  
        </li>
    )
}

export default Lin;