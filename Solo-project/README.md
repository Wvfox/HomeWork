## Gulp сборка

Сборка взята с канала - [Фрилансер по жизни](https://www.youtube.com/watch?v=jU88mLuLWlk&ab_channel=%D0%A4%D1%80%D1%96%D0%BB%D0%B0%D0%BD%D1%81%D0%B5%D1%80%D0%BF%D0%BE%D0%B6%D0%B8%D1%82%D1%82%D1%8E)

## Сценарии

Запуск сборки в режиме разработчика:

```bash
npm run dev
# or
yarn dev
```

Запуск сборки в режиме продакшена:

```bash
npm run build
# or
yarn build
```

Создание архива проекта в режиме продакшена:

```bash
npm run zip
# or
yarn zip
```

Остановка выполнения сценариев:

```bash
ctrl + C
```

## Перед началом работы

Установка node.js с официального сайта (LTS):

- [Node.js](https://nodejs.org/en)

Установка Git, чтобы иметь возможность пользоваться командной строкой Git-bash:

- [Git](https://git-scm.com/downloads)

Установка GULP в систему:

```bash
npm i gulp-cli -g
```

Установка всех необходимых пакетов:

```bash
npm i
# or
yarn
```

Для алиасов устанавливается расширение в vs code - `Path Autocomplete`, и в файл настроек вставляется следующую запись:

```bash
/* --Path Autocomplete-- */
	"path-autocomplete.pathMappings": {
		"@img": "${folder}/src/img", // alias for images
		"@scss": "${folder}/src/scss", // alias for scss
		"@js": "${folder}/src/js" // alias for js
	}
```

## Архитектура сборки

- dist - каталог с результатом (создается после выполнения сценариев).
- src - каталог с исходниками
- gulpfile.js - корневой конфигурационный файл.
- gulp - каталог функциональных файлов сборки.
- gulp/config - каталог с файлами настроек.
- gulp/tasks - каталог с функциями для выполнения задач.


## Версии при создании сборки

```bash
	"dependencies": {
		"gulp-cli": "^2.3.0"
	},
	"devDependencies": {
		"browser-sync": "^2.29.1",
		"del": "^7.0.0",
		"gulp": "^4.0.2",
		"gulp-autoprefixer": "^8.0.0",
		"gulp-clean-css": "^4.3.0",
		"gulp-file-include": "^2.3.0",
		"gulp-fonter": "^0.3.0",
		"gulp-fonter-fix": "^0.0.1",
		"gulp-group-css-media-queries": "^1.2.2",
		"gulp-if": "^3.0.0",
		"gulp-imagemin": "^8.0.0",
		"gulp-newer": "^1.4.0",
		"gulp-notify": "^4.0.0",
		"gulp-plumber": "^1.2.1",
		"gulp-rename": "^2.0.0",
		"gulp-replace": "^1.1.4",
		"gulp-sass": "^5.1.0",
		"gulp-svg-sprite": "^2.0.3",
		"gulp-ttf2woff2": "^4.0.1",
		"gulp-version-number": "^0.2.4",
		"gulp-webp": "^4.0.1",
		"gulp-webp-html-nosvg": "^1.1.1",
		"gulp-webpcss": "^1.1.1",
		"gulp-zip": "^5.1.0",
		"sass": "^1.62.1",
		"webp-converter": "2.2.3",
		"webpack": "^5.82.0",
		"webpack-stream": "^7.0.0"
	}
```