import { View, Switch,Text,Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import listData from '../../utils/list.json';
import DragSubItem from "../../components/DragSubItem/index";
import { useState } from 'react';

interface StateProps {
  Item:{
    name:string,
    id:string,
  },
}
export default function Index<StateProps>() {

  const [item,setItem]=useState<any>(undefined);

  useLoad(() => {
    console.log('Page loaded.')
  })

  const jumpToSubItem=(item)=>{
    setItem(item);
    console.log(item,"=item")
  }
  
  return (
    <View className='index'>
    {
      listData.map(item=>(
          <Button
          onClick={()=>{jumpToSubItem(item)}}
          > {item.id}.{item.area} </Button>))
      
    }
    {item &&<DragSubItem
      
      item={item}
    />}
    
    </View>
  )
}
