# Join

A Kanban-inspired task manager for creating and organizing tasks with drag and
drop.

👉 **[Open the app](https://benjaminblarr.de/join/)**

![Join Preview](public/assets/images/preview.png)

## About

Join lets users create tasks, sort them into the four columns of a Kanban
board, assign them to contacts and move them by dragging. Tasks, contacts and
accounts live in Supabase, so a registered user sees the same board on every
device.

The login page offers a guest login, so the app can be explored without
registering. It loads a set of demo tasks and contacts, and nothing a guest
changes is saved.

Built as a group project with four developers. I worked across the whole
application rather than owning a single area, from the board and the task forms
through to the contact management and the responsive layout.

## Features

- Kanban board with drag and drop across four columns
- Search that filters the board by task title and description
- Create, edit and delete tasks with subtasks, priority, due date and a
  category, either User Story or Technical Task
- Summary page with the task count per column, the number of urgent tasks and
  the next deadline
- Contact management, tasks assigned to one or more contacts
- Sign up, log in and a guest login
- Responsive down to mobile, with a separate layout for narrow screens

## Built with

**Frontend**

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" height="40" alt="angular logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo" />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" height="40" alt="sass logo" />
</p>

Angular 20 with standalone components, signals and zoneless change detection.
Drag and drop comes from the Angular CDK.

**Backend**

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" height="40" alt="supabase logo" />
</p>

Supabase handles authentication and stores tasks and contacts.

## Getting Started

Requires Node.js 20.19+, 22.12+ or 24+.

```bash
git clone https://github.com/B-Blarr/Join.git
cd Join
npm install
npm start
```

`npm start` runs the development server and opens the app at
`http://localhost:4200/join/`. A global installation of the Angular CLI is not
needed.

The app talks to the same Supabase project as the live version, so there are
no keys to set up and no local database. An account created locally is a real
account in that project.

## Credits

Built together with [serhat-ozcakir](https://github.com/serhat-ozcakir),
[vadim-cebanu](https://github.com/vadim-cebanu) and
[hello90343](https://github.com/hello90343). The team repository is
[serhat-ozcakir/Join](https://github.com/serhat-ozcakir/Join), this repository
is my fork of it.
