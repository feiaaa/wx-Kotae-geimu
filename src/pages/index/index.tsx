import { View, Switch,Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

import CustomTable from "../../components/CustomTable/index";

interface StateProps {
  table:Boolean
}
export default function Index<StateProps>() {

  const state:StateProps={
    table:false
  }
  const {table}=state;

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      表格展示<Switch checked={table} onChange={e=>this.setState({table:e})}/>
      <Text>111</Text>
      {/* {table?
      <CustomTable/>
      :<Text>111</Text>
      } */}
    </View>
  )
}
