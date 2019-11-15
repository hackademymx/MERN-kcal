import format from 'date-fns/format'
import esLocale from 'date-fns/locale/es'

export const transformDate = (item, type) => {
  const { year, month, day } = item

  switch (type) {
    case 'byDay':
      const convertbyDay = new Date(`${year}, ${month}, ${day}`)
      return format(convertbyDay, 'dd MMMM yyyy', { locale: esLocale })
    case 'byMonth':
      const convertByMonth = new Date(`${year}, ${month}`)
      return format(convertByMonth, 'MMMM yyyy', { locale: esLocale })
    case 'byYear':
      return year
  }
}