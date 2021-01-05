const dayjs = require('dayjs')
const moment = require('moment-timezone')

dayjs.extend(require('dayjs/plugin/utc'))
dayjs.extend(require('dayjs/plugin/timezone'))

const dayjsMain = () => {
    const newyorkTime = dayjs.tz('2020-02-01 12:00', 'America/New_York')
    console.log(newyorkTime.unix())

    const tokyoTime = dayjs.tz('2020-02-01 12:00', 'Asia/Tokyo')
    console.log(tokyoTime.unix())
}

const momentMain = () => {
    const newyorkTime = moment.tz('2020-02-01 12:00', 'America/New_York')
    console.log(newyorkTime.unix())

    const tokyoTime = moment.tz('2020-02-01 12:00', 'Asia/Tokyo')
    console.log(tokyoTime.unix())
}

console.log('--- dayjs ---')
dayjsMain()

console.log('--- moment ---')
momentMain()