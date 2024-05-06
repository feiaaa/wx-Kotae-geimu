import { View, Switch,Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'
import listData from './list.json';
import CustomTable from "../../components/CustomTable/index";
import { useState } from 'react';

interface StateProps {
  tableFlag:Boolean
}
export default function Index<StateProps>() {

  // const [tableFlag,setTableFlag]=useState<Boolean>(false)

  useLoad(() => {
    console.log('Page loaded.')
  })

  // console.log(tableFlag,"==tableFlag",listData)
  return (
    <View className='index'>
      {/* <p>表格展示<Switch checked={tableFlag} 
      onChange={e=>setTableFlag(e)}
      />
      <Text>列表展示</Text></p> */}
      
      {/* {tableFlag?

      // <CustomTable/>
      <Text>111</Text>: */}
      <View>
        {listData.map(item=>(<View >
          <Text> {item.id}-{item.name} </Text>
          <Text> {item.process}-{item.area} </Text>
      
          </View>))}
      </View>
      
      {/* } */}
    </View>
  )
}
