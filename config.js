let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
    BASE_URL = '192.168.1.1:8090' // qe环境
} else {
    BASE_URL = 'https://www.baidu.com' // 生产环境
}
const config = {
	base_url: BASE_URL,
	appId: 'wx0bea786c5df17c83',
	appKey: 'f6771891e27ae9351b850844a2a37d98'
}

export { config }