# Тестовое задание для компании АО "Айтем"

## Для запуска проекта

```
cd item-expert
npm install
npm run serve
```

## В проекте реализовано:

* SPA приложение, использующее Vue-router для навигации и Vuex для управления состоянием
* Запрос валют
* Поиск по наименованию
* Конвертация валют

### Комментарии по проекту

* В настоящее время большинство бесплатных API для получения актуальных курсов валют не предоставляют полный функционал для реализации проекта (ограничено количество запросов, запрос возможен только по одной валюте USD, конвертация доступна только в платном тарифе).
  
* Так как есть ограничения на количество запросов, реализовано кэширование данных, чтобы при разработке/тестировании не
  израсходовались все запросы.
* Найденный сервис для запроса валют по API имел встроенню конвертацию только при платной подписке. Поэтому реализовано получение данных через Rates.
* В связи с ограниченностью API параметр BASE менять не представляется возможным (возвращает ошибку при запросе),
  поэтому было использовано значение cBASE, отсюда есть нюансы в работе конвертации.
  При вводе в левый инпут и выборе валюты, значение в правом пересчитывается, однако при обратной ситуации запрос
  происходит не всегда корректно.