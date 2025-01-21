export interface Task {
    id: string;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    status: 'todo' | 'in-progress' | 'completed';
    createdAt: Date;
    aiSuggestion?: string;
  }
  
  export interface DragEndEvent {
    active: { id: string };
    over: { id: string } | null;
  }