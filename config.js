const config = {
    // 公众号配置
    app_id: "wx4447a7071a212ae6", // 公众号appId
    app_secret: "2adc42df2b73bacf485958a03b218b9a", // 公众号appSecret
    user: "ofrbA6kT-0ebQcKMoryXx_2rU-II", // 接收公众号消息的微信号
    template_id: "EUPlh5WG3jaApAkX1pw8Vlu8pIaE3VKTlgX3pM-VK64", // 模板 id
    // 天气信息配置（接口申请地址：https://tianqiapi.com/）
    wea_appid: "29297454",
    wea_appsecret: "EKb5zO01",
    // 信息配置
    city: "武汉", // 所在城市
    love_date: "2023-3-9", // 在一起的日期，年月日以"-"分隔
    loveStr: "", // 如果填写,则以填写内容为主，如果不填写则自动获取土味情话语句
}
module.exports = config