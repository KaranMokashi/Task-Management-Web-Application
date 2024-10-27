\*\*Steps Involved to Run the Task Management Web App\*\*

IDE used : Ms Visual Studio Code GitHub Link:
https://github.com/A-rvind/Task_Manage_Ve3/

Languauge used : Python to built the API Website pages : React.JS
Database : SQL Alchemy and SQLite

Python and essential tools must installed on VS code/ or system

Python libraries used : Flask, Flask-sqlalchemy , Flask-cors (Pip
install in the Terminal)

React Js: npm i create-react-app . (dot refer to the current folder) npm
start (To run react js)

Please review Video added, it represent all involvement of code to be
run for testing application.

Make a Folder and give favorable name such as task_Management: folder
sequence as followed: Backend app.py \-- Main backend application file
(Flask app entry point) models.py \-- Database models using SQLAlchemy
routes.py \-- API routes for CRUD operations Frontend

Some Auto-generated folder: \_\_pycache\_\_, instance, and I have
created a Python virtual env (optional) but I have created for a smooth
process.

Open the Main folder on the Visual Studio code and run a new Terminal or
(shortcut : ctrl + shift + \`) command to run: \*\* Refer video added if
you have any query regarding this\*\*

cd backend (the path will move to the backend folder)

run the command \-- python app.py

this command will run the API, http://127.0.0.1:5000/

To test this API, you can use POSTMAN software or any other

GET, POST, PUT, DELETE using task id:

To GET : http://127.0.0.1:5000/tasks To GET using id :
http://127.0.0.1:5000/tasks/1 To POST : Here is NOsql, so we have to
give data in JSON. { \"description\": \"This is 5th tasks update\",
\"is_completed\": true, \"title\": \"aa2\" } To PUT : update also need a
JSON { \"description\": \"This is PUT\", \"id\": 5, \"is_completed\":
true, \"title\": \"aa2\" }

To DELETE: http://127.0.0.1:5000/tasks/5 (simple enter the ID at end)

\*\*The video contains all steps\*\* Make sure the Api is running
otherwise it will throw error (Run time error)

folder sequence as followed: Frontend/ Public/ index.html src/
components/ Tasklist.js TaskDetails.js TaskForm.js api.js App.js
index.css index.js

Simple type in VS code terminal npm start

It will open 3000 port localhost. http://localhost:3000/

Here a user can simply click on \-- Add New Task (Large green button) it
will open a form, add all neccessary values and click on create.

it will create a Task and You can view on list
http://localhost:3000/tasks/

To view task, click on task title to view the task.
http://localhost:3000/tasks/2

To edit task , click on edit button. http://localhost:3000/tasks/2 then
click edit button (blue button) and provide updated value, then click on
Update button.

To delete any task, simply click on the delete button (red button)

Following are image represented:


![task add](https://github.com/user-attachments/assets/102e5d42-cde2-48ad-ab78-2dad873b5ca5)

![task 3 edit](https://github.com/user-attachments/assets/6d0a4c07-931b-4ce8-bfa5-3105305e6ca0)

![task4 update](https://github.com/user-attachments/assets/0d28e116-47a5-49ee-80ad-b79c4f017ae3)



