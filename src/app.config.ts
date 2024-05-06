export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/about/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    borderStyle:'white',
    list:[{
      //  "iconPath": "images/index.png",
      //  "selectedIconPath": "images/index-hvr.png",
       "pagePath": "pages/index/index",
        "text": "背词"
    },{
      "pagePath": "pages/about/index",
      "text": "关于"
  }],
  }
})
