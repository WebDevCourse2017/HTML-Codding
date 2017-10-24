## Правила роботи з репозиторієм.
Всі свої завдання заливайте в папку з вашим ім’ям та прізвищем в латинській транслітерації. В якості роздільного символу використовуйте нижнє підкреслення.
 
Добре:
```
/Mykhailo_Ivankiv
```

Погано:
``` 
/Mykhailo
/Ivankiv
/mykhailoivankiv
/Іванків_Михайло
```

## Правила структурування файлів, та директорій. 

Назва кореневої папки повинна відповідати назві проекту. Усі назви фаалів, ти директорій писати маленькими літерами, в якості роздільного символу використовуйте нижнє підкреслення.
 
Добре:
```
/facebook
/gmail
/youtube
/black_estate_vineyard
```

Погано:
```
/Home work 1
/Task3
/Gmail
/Facebook_1+ css
/HW1
```

Структура кожного проекту повинна бути наступною:
```
 /facebook
    /images
    /styles
        /* назви css файлів повинні даватись згідго БЕМ методології */
        layout.css
        layout.scss
        
        article.css
        article.scss
        ...
    /data
        index.json
        profile.json
        ...
    index.html
    index.mustache
    
    profile.html
    profile.mustache
    ...
```
Усі фали повинні мати осмислені назви
Добре:
```
/facebook_logo.png
/Michael_Ivankiv_user_pic.jpg
/icons
    message.png
    globe.png
```
Погано:
```
/25-512.png
/1400.png
/wtf.gif
```


## Завдання
#### HTML. Історія винекнення. Проблематика. Принципи стандартизації. Семантика.

Написати HTML сторінки таких ресурсів:
* <a href="https://w3c.github.io/html/">HTML 5.2 W3C</a>
* <a href="http://html5doctor.com/">HTML 5 Doctor</a>
* <a href="http://facebook.com/">Facebook</a>
* <a href="http://gmail.com/">Gmail</a>

Сторінки повинні бути зверстані семантично коректно.  

#### CSS: Проблематика. Загальні принципи. Селектори. Поняття боксу.

Реалізувати сторінку одного з наступних ресурсів: 
* <a href="http://facebook.com/">Facebook</a>
* <a href="http://gmail.com/">Gmail</a>
* <a href="https://www.youtube.com/">Youtube</a>
  
Вимоги, щодо реалізації:
  
HTML повинен бути семантично коректний.
Сторінка, яку ви зверстаєте повинна <a href="http://lurkmore.to/%D0%9A%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BD_%D0%9E%D1%87%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D0%BE%D1%81%D1%82%D1%8C">візуально співпадати з ресурсом, що ви копіюєте.</a>
  