🚀 Як запустити проєкт
Клонуйте репозиторій:

Bash
git clone <посилання_на_ваш_репозиторій>
Перейдіть у папку проєкту:

Bash
cd lesson60
Встановіть залежності:

Bash
npm install
Запустіть сервер:

Bash
node app.js
Сервер працюватиме за адресою: http://localhost:3000

🛠 Доступні маршрути (Endpoints)
Головна сторінка
GET / — Повертає текст "Get root route"

Користувачі (/users)
Метод   Маршрут    Опис
GET	/users	Отримати всіх користувачів
POST	/users	Створити нового користувача
GET	/users/:userId	Отримати користувача за ID
PUT	/users/:userId	Оновити дані користувача
DELETE	/users/:userId	Видалити користувача


Метод,Маршрут,Опис
GET,/articles,Отримати всі статті
POST,/articles,Створити нову статтю
GET,/articles/:articleId,Отримати статтю за ID
PUT,/articles/:articleId,Оновити статтю
DELETE,/articles/:articleId,Видалити статтю
