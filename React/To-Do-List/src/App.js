import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Content from "./Content";
import NewTask from "./NewTask";
import EditTask from "./EditTask";
import Missing from "./Missing";
import PageTask from "./PageTask";
import FilterTask from "./FilterTask";
import {Route, Routes } from 'react-router-dom';
import {closestCenter, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useStoreActions, useStoreState } from "easy-peasy";


function App() {

  const allTasks = useStoreState((state) => state.allTasks);
  const setAllTasks = useStoreActions((actions) => actions.setAllTasks);
  

//Start Creat Drag And Drop
  const getTaskPos = id => allTasks.findIndex(task => task.id === id);
  const handleDragEnd = event => {
    const {active, over} = event

    if (active.id === over.id) return;

    setAllTasks((allTasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(allTasks, originalPos, newPos);
      });
  }
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
//End Drag And Drop 

  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={
          <div>
            <FilterTask />
            <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
              <Content />
            </DndContext>
            
          </div>
        }/>
        <Route path="/tasks/new" element={<NewTask />} />
        <Route path="/task/edit/:id" element={<EditTask />} />
        <Route path="/task/:id" element={<PageTask />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      
      <Footer />
   </div>
  );
}

export default App;
