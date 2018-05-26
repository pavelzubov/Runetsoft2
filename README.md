 # Тестовое задание на верстку

## Комментарии к тестовому заданию

Я не очень понял зачем нужно было в рамках задания делать страницу "Грамматическая ошибка" с отдельным json-файлом entry.json.
Я посчитал, что логичнее будет сделать возможность редактировать и создавать типы ошибок прямо из страницы "Типы ошибок" и данные для каждого типа брать из массива directory.json.
Поэтому по клику по ссылке в таблице или кнопке создания нового типа появляется аналогичная страница, и она изменяет таблицу типов ошибок. Плюс на ней сделана валидация.

Но на всякий случай я всё-таки сделал формирование страницы из entry.json. Его можно посмотреть отдельно на странице `/edittype` (в `\app\errors-types\edit2` лежит код).

Там же я реализовал свое видение реализации формы выбора единицы измерения (в обычном варианте изменения/создания типа ошибки я использовал простой селект).
Касательно этого элемента я тоже не очень понял, что имеется в виду в макете.
Подозреваю, что это `<select size="1" multiple>`, но у меня не было идей, как его кастомизировать подобным образом. Потому сделал его обычным input и небольшим скриптом перебирающим массив единиц измерения. Надеюсь это не будет сильным минусом)

Реализацию хлебных корошек посчитал слишком объемной по времени для тестового задания. В принципе ничего сложного, могу сделать. А пока просто вручную прописал.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

