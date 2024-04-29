/* eslint-disable */
import { Text, Video, View } from '@tarojs/components';
import { Component } from '@tarojs/taro';
// styl
import './CustomTable.less';

export default class CustomTable extends Component {
  constructor(props) {
    super(props);
  }

  // 是否加载全局css
  static options = {
    addGlobalClass: true
  };

  // 判断 数组类型
  checkItemType(item) {
    if (/\.(mp4|mov|ogm|wmv|asx|mpg|webm|ogv|mpeg|m4v|avi)$/.test(item)) {
      return 'video'
    } else if (/\.(png|jpg|gif|svg|webp|jpeg|bmp|tiff)$/.test(item)) {
      return 'img'
    } else {
      return 'text'
    }
  }

  // 点击图片看大图
  onTapImage(current, urls) {
    Taro.previewImage({
      urls,
      current
    });
  }

  render() {
    const { columns = [], dataSource = [] } = this.props

    // 重新计算 列表数据 匹配表头
    const newDataSource = dataSource.map(itemTr => {
      return columns.map(itemTd => {
        const newData = Array.isArray(itemTr[itemTd.dataIndex]) ? itemTr[itemTd.dataIndex] : [itemTr[itemTd.dataIndex] || ''];
        return {
          ...itemTd,
          data: newData,
          type: this.checkItemType(newData[0]),
        }
      })
    })

    // 计算每列的宽度
    let tableWidth = 0;
    columns.map(i => tableWidth += parseFloat(i.width))

    return (
      <View className='custom-table m-t-20'>
        <View style={{'width': tableWidth ? tableWidth + 'rpx' : '100%'}}>
          {/* 渲染表头 */}
          <View className='custom-table-header flex-row-between-center fs-26 c-666 bold'>
            {columns.map((item, index) => (
              <View className='flex-row-start-center tableDataItem' style={{'width': item.width ? item.width + 'rpx' : 'auto'}} key={`tableData-columns${index}`}>{item.title}</View>
            ))}
          </View>

          {/* 表格 body */}
          {newDataSource.length > 0 ? newDataSource.map((itemTr, indexTr) => (
            // 模拟tr
            <View key={`dataSource${indexTr}`} className='custom-table-body flex-row-between-start fs-28 c-333'>
              {/* 模拟 td */}
              {itemTr.map((itemTd, idxTd) => (
                <View className={`tableDataItem fs-28`} key={`tableData-itemTd${indexTr}-${idxTd}`} style={{'width': itemTd.width ? itemTd.width + 'rpx' : 'auto'}}>
                  {/* 模拟每个td里面多个图片或者视频 */}
                  {itemTd.data.map((item, idx) => (
                    this.checkItemType(item) === 'img' ? (
                      <Image
                        key={`tableData-itemTd-item-${indexTr}-${idxTd}-${idx}`}
                        className='image-video'
                        src={item}
                        onTap={() => this.onTapImage(item, itemTd.data)}
                      />
                    ) : this.checkItemType(item) === 'video' ? (
                      <Video
                        key={`tableData-itemTd-item-${indexTr}-${idxTd}-${idx}`}
                        className='image-video'
                        src={item}
                      />
                    ) : (
                      <View>{item}</View>
                    )
                  ))}
                </View>
              ))}
            </View>
          )) : (
            <View className='custom-table-body flex-row-center-center fs-28'>暂无数据</View>
          )}
        </View>
      </View>
    )
  }
}

