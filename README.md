Шаблон для быстрого старта разработки реактовских приложений. 

Скопировать в папку проекта, npm install

Содержит ESLint


ESLint решил устанавливать локально. 

После npm install надо сконфигурировать линтер. Для этого запустить команду
./node_modules/.bin/eslint --init

Во время установки он попросит выбрать набор правил. Выбираю обычно airbnb. 

Формат конфигурационного файла выбрать json.

После установки добавитьв конфиг .eslintrc.json следующее правило
"rules": {
    "react/jsx-filename-extension": [
        1,
        {
            "extensions": [
                ".js",
                ".jsx"
            ]
        }
    ]
}

Это чтобы линтер не ругался на js файлы, если в них используется синтаксис jsx. Можно не добавлять это правило, просто везде где используется синтаксис jsx сохранять файлы с расширением .jsx 


После того как всё установилось запустить git init.


Пакет prop-types - это реактовский пакет для проверки типов в пропсах. Подробнее по ссылке
https://reactjs.org/docs/typechecking-with-proptypes.html#___gatsby






