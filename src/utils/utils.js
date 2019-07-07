
export const province = [
  { label: '吉林省' }
]

export const city = [
  { label: '吉林市' }
]

export const area = [
  { label: '吉林区' }
]

// 申请机构
export const Agency = [
  { value: 1, label: '机构1'},
  { value: 2, label: '机构2'},
  { value: 3, label: '机构3'},
]

// 服装尺码
export const fz = [
  { value: 1, label: 'xs'},
  { value: 2, label: 's'},
  { value: 3, label: 'm'},
]

// 学历
export const education = [
  { value: 1, label: '小学' },
  { value: 2, label: '中学' },
  { value: 3, label: '大学' }
]

// 语言能力
export const languageCompetence = [
  { value: 1, label: '一般' },
  { value: 2, label: '可以' },
  { value: 3, label: '不错' }
]

// 教练等级
export const coachLeavelList = [
  { value: 1, label: '一般' },
  { value: 2, label: '可以' },
  { value: 3, label: '不错' }
]

// 在读年级
export const classList = [
  { value: 1, label: '一年级' },
  { value: 2, label: '二年级' },
  { value: 3, label: '三年级' }
]

// 校验数字
export function isNumber (rule, value, callback) {
  console.log(value)
  if (isNaN(value)) {
    callback(new Error('只能输入数值'));
  }
  callback()
}

// export function formatTime (number, format) {
//   let time = new Date(number)
// 			let newArr = []
// 			let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
// 			newArr.push(time.getFullYear())
// 			newArr.push((formatNumber(time.getMonth() + 1)))
// 			newArr.push(formatNumber(time.getDate()))

// 			newArr.push(formatNumber(time.getHours()))
// 			newArr.push(formatNumber(time.getMinutes()))
// 			newArr.push(formatNumber(time.getSeconds()))

// 			for (let i in newArr) {
// 				format = format.replace(formatArr[i], newArr[i])
// 			}
// 			return format;
// }

// 对象深拷贝
export function deepCopy (src, dest) {
  dest = dest || {}

  for (let item in src) {
    if ((typeof src[item] === 'object') && src[item] !== null) {
      dest[item] = src[item].constructor === Array ? [] : {}
      deepCopy(src[item], dest[item])
    } else {
      dest[item] = src[item]
    }
  }

  return dest
}

export function forDate (number, format) {
  let obj ={
    formatNumber:function (n) {
      n = n.toString()
      return n[1] ? n : '0' + n;
    }
  }
  let time = new Date(number)
  let newArr = []
  let formatArr = ['Y', 'M', 'D', 'h', 'm', 's']
  newArr.push(time.getFullYear())
  newArr.push(obj.formatNumber(time.getMonth() + 1))
  newArr.push(obj.formatNumber(time.getDate()))

  newArr.push(obj.formatNumber(time.getHours()))
  newArr.push(obj.formatNumber(time.getMinutes()))
  newArr.push(obj.formatNumber(time.getSeconds()))

  for (let i in newArr) {
    format = format.replace(formatArr[i], newArr[i])
  }
  return format;
}

