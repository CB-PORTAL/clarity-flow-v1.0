import React from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onTaskUpdate: (id: string, updates: Partial<Task>) => void;
  onTaskDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ 
  tasks, 
  onTaskUpdate,
  onTaskDelete 
}) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;
    
    // Handle task reordering logic here
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={onTaskUpdate}
            onDelete={onTaskDelete}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default TaskList;