import { Contact } from './supabase';
import { Task } from './features/board/models/task.model';

function futureDate(daysFromNow: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromNow);
  return d.toISOString().split('T')[0];
}

export const DEMO_CONTACTS: Contact[] = [
  { id: 'demo-c-1', name: 'Anna Wagner',   email: 'anna.wagner@example.com',   phone: '+49 1511 2345 6781' },
  { id: 'demo-c-2', name: 'David Braun',   email: 'david.braun@example.com',   phone: '+49 1511 2345 6782' },
  { id: 'demo-c-3', name: 'Elena Schmidt', email: 'elena.schmidt@example.com', phone: '+49 1511 2345 6783' },
  { id: 'demo-c-4', name: 'Luca Bauer',    email: 'luca.bauer@example.com',    phone: '+49 1511 2345 6784' },
  { id: 'demo-c-5', name: 'Max Hoffmann',  email: 'max.hoffmann@example.com',  phone: '+49 1511 2345 6785' },
  { id: 'demo-c-6', name: 'Sofia Müller',  email: 'sofia.mueller@example.com', phone: '+49 1511 2345 6786' },
  { id: 'demo-c-7', name: 'Tom Fischer',   email: 'tom.fischer@example.com',   phone: '+49 1511 2345 6787' },
];

export function getDemoTasks(): Task[] {
  return [
    {
      id: 'demo-t-1',
      title: 'Implement user authentication',
      description: 'Set up login, registration and session management for the application.',
      status: 'todo',
      type: 'User Story',
      priority: 'high',
      assignees: [
        { id: 'demo-c-6', initials: 'SM', name: 'Sofia Müller' },
        { id: 'demo-c-4', initials: 'LB', name: 'Luca Bauer' },
      ],
      subtasks: [
        { id: 'demo-s-1', title: 'Design login form', done: true },
        { id: 'demo-s-2', title: 'Implement session handling', done: false },
        { id: 'demo-s-3', title: 'Add password reset flow', done: false },
      ],
      createdAt: new Date().toISOString(),
      dueDate: futureDate(14),
    },
    {
      id: 'demo-t-2',
      title: 'Design database schema',
      description: 'Plan and document the relational schema for all core entities.',
      status: 'todo',
      type: 'Technical Task',
      priority: 'medium',
      assignees: [
        { id: 'demo-c-5', initials: 'MH', name: 'Max Hoffmann' },
      ],
      subtasks: [
        { id: 'demo-s-4', title: 'Define entities and relations', done: false },
        { id: 'demo-s-5', title: 'Write migration scripts', done: false },
      ],
      createdAt: new Date().toISOString(),
      dueDate: futureDate(10),
    },
    {
      id: 'demo-t-3',
      title: 'Build dashboard UI',
      description: 'Create the main dashboard with charts, statistics and navigation.',
      status: 'inProgress',
      type: 'User Story',
      priority: 'high',
      assignees: [
        { id: 'demo-c-3', initials: 'ES', name: 'Elena Schmidt' },
        { id: 'demo-c-1', initials: 'AW', name: 'Anna Wagner' },
      ],
      subtasks: [
        { id: 'demo-s-6', title: 'Layout and navigation', done: true },
        { id: 'demo-s-7', title: 'Charts and statistics', done: false },
        { id: 'demo-s-8', title: 'Responsive adjustments', done: false },
      ],
      createdAt: new Date().toISOString(),
      dueDate: futureDate(7),
    },
    {
      id: 'demo-t-4',
      title: 'Write unit tests',
      description: 'Cover all service methods and key components with unit tests.',
      status: 'inProgress',
      type: 'Technical Task',
      priority: 'low',
      assignees: [
        { id: 'demo-c-7', initials: 'TF', name: 'Tom Fischer' },
      ],
      subtasks: [],
      createdAt: new Date().toISOString(),
      dueDate: futureDate(21),
    },
    {
      id: 'demo-t-5',
      title: 'Review API endpoints',
      description: 'Audit all REST endpoints for security, naming conventions and error handling.',
      status: 'awaitFeedback',
      type: 'Technical Task',
      priority: 'medium',
      assignees: [
        { id: 'demo-c-2', initials: 'DB', name: 'David Braun' },
        { id: 'demo-c-6', initials: 'SM', name: 'Sofia Müller' },
      ],
      subtasks: [
        { id: 'demo-s-9',  title: 'Auth endpoints',   done: true },
        { id: 'demo-s-10', title: 'Data endpoints',   done: true },
        { id: 'demo-s-11', title: 'Error responses',  done: false },
      ],
      createdAt: new Date().toISOString(),
      dueDate: futureDate(3),
    },
    {
      id: 'demo-t-6',
      title: 'Update documentation',
      description: 'Bring README and API docs up to date with the latest changes.',
      status: 'awaitFeedback',
      type: 'Technical Task',
      priority: 'low',
      assignees: [
        { id: 'demo-c-4', initials: 'LB', name: 'Luca Bauer' },
      ],
      subtasks: [],
      createdAt: new Date().toISOString(),
      dueDate: futureDate(5),
    },
    {
      id: 'demo-t-7',
      title: 'Setup project structure',
      description: 'Initialize repo, configure linting, CI/CD pipeline and folder structure.',
      status: 'done',
      type: 'Technical Task',
      priority: 'high',
      assignees: [
        { id: 'demo-c-5', initials: 'MH', name: 'Max Hoffmann' },
        { id: 'demo-c-7', initials: 'TF', name: 'Tom Fischer' },
      ],
      subtasks: [
        { id: 'demo-s-12', title: 'Configure ESLint and Prettier', done: true },
        { id: 'demo-s-13', title: 'Set up CI/CD pipeline',         done: true },
      ],
      createdAt: new Date().toISOString(),
    },
    {
      id: 'demo-t-8',
      title: 'Create wireframes',
      description: 'Design initial wireframes for all main screens and user flows.',
      status: 'done',
      type: 'User Story',
      priority: 'medium',
      assignees: [
        { id: 'demo-c-3', initials: 'ES', name: 'Elena Schmidt' },
      ],
      subtasks: [
        { id: 'demo-s-14', title: 'Login and onboarding', done: true },
        { id: 'demo-s-15', title: 'Board view',           done: true },
        { id: 'demo-s-16', title: 'Contacts view',        done: true },
      ],
      createdAt: new Date().toISOString(),
    },
  ];
}
