import { View, Switch,Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'


export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>关于我们</Text>
      <p>about us</p>
      
    </View>
  )
}
