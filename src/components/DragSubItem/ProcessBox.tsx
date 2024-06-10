import { View, Text,Button } from '@tarojs/components'
import { AtCard } from "taro-ui"
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { useState } from 'react';
import { processBox } from '../../utils/data.js';
interface StateProps {
  item:any;
}
export default function ProcessBox<StateProps>(props) {
    // const {item}=props;
    console.log(processBox,"==processBox");
    

  const [visible,setVisible]=useState<Boolean>(false)

  useLoad(() => {
    console.log('Page loaded.')
  })

  
  return (
    <View className='index'>
        {/* 布局 */}
        {processBox.map((row)=>(
          <View className="at-row" hover-class="hover" >
            {
              (row.children||[]).map((item)=>(
                <View className={`at-col at-col-${item.col}`}>
                  <AtCard
                    note={item.note}
                    extra={item.extra}
                    title={item.title}
                    className='process-box'
                  >
                    {/* 这也是内容区 可以随意定义功能 */}
                    
                  </AtCard>
                </View>
              ))
            }
          </View>
        ))}
        

    </View>
  )
}
