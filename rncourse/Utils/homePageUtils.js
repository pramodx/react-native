const moment = require('moment')

export const jobDayDisplayFormat = startDate =>
  moment.utc(startDate).local().startOf('seconds').fromNow()

export const rateDisplayHelper = rate => {
  switch (rate.type) {
    case 'QUOTE':
      return 'Contact to quote'
    case 'FIXED':
      return `${currencyFormat(rate.max)} fixed rate`
    case 'HOUR':
      return `${currencyFormat(rate.max)} per hour`
    default:
      return 'Contact to quote'
  }
}

export const employmentTypeMapper = {
  SUBBIE: 'Subbie',
  PART_TIME: 'Part time',
  APPRENTICE: 'Apprentice',
}

export const jobStartDateMapper = {
  ASAP: 'Starts next',
}

export const jobTimeFrame = {
  NEXT_FEW_WEEKS: 'few weeks',
  NEXT_FEW_DAYS: 'few days',
}

const currencyFormat = num => {
  return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
