import format from 'date-fns/format'

// UTC: Coordinated Universal Time o Universal Time Coordinated
// https://time.is/es/UTC
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
// https://www.w3schools.com/js/js_date_methods.asp
const getUTCDate = (dateString = Date.now()) => {
  const date = new Date(dateString)
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  )
}

export const UTCDate = (date, dateFormat) => {
  return format(getUTCDate(date), dateFormat)
}