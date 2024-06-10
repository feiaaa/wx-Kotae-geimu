import { View, Text,Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import ProcessBox from './ProcessBox';
import { useState } from 'react';
import WordBox from './WordBox';

interface StateProps {
  item:any;
}
export default function DragSubItem<StateProps>(props) {
    const {item}=props;
    console.log(item,"==item");
    

  const [visible,setVisible]=useState<Boolean>(false)

  useLoad(() => {
    console.log('Page loaded.')
  })

  
  return (
    <View className='index'>
        {/* 布局 */}
        <ProcessBox/>
        {/* 拖拽 */}
        <WordBox tag={item.children}/>
    </View>
  )
}
