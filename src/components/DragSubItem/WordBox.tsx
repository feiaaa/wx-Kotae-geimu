import { View, Text,Button } from '@tarojs/components'
import { AtButton } from "taro-ui"
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { useState } from 'react';
interface StateProps {
  item:any;
}
export default function WordBox<StateProps>(props) {
    const {tag}=props;

  const [visible,setVisible]=useState<Boolean>(false)

  useLoad(() => {
    console.log('Page loaded.')
  })

  
  return (
    <View className='index'>
      {tag.map((item)=>(<AtButton type='primary' size='small'>{item.name}</AtButton>))}
    </View>
  )
}
