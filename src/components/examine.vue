<template>
 <a-form 
  :autoFormCreate="(form)=>{this.form = form}" 
  :style="{background:'white',padding:'20px',textAlign:'left'}">
    <a-row type="flex" justify="center" :gutter="16">
      </a-col>
      <a-col :span="8">
      <span>提交时间</span>
       <a-date-picker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        v-model="startValue"
        placeholder="开始日期"
        @openChange="handleStartOpenChange"
        locale="zh_CN"
      />
      <a-date-picker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="结束日期"
        v-model="endValue"
        @openChange="handleEndOpenChange"
      />
      </a-col>
      <a-col :span="3">
        <a-select 
        defaultValue="yunwen" 
        >
          <a-select-option value="yunwen">云问机器人系统</a-select-option>
          <a-select-option value='yunwen1'>1</a-select-option>
          <a-select-option value='yunwen2'>2</a-select-option>
        </a-select>
      </a-col>
      <a-col :span="3">
        <a-select
        defaultValue="male" 
        >
          <a-select-option value='male'>云问机器人系统2018标准开发</a-select-option>
          <a-select-option value='male1'>云问机器人系统2018标准开发1</a-select-option>
          <a-select-option value='male2'>云问机器人系统2018标准开发2</a-select-option>
        </a-select>
      </a-col>
      <a-col :span="3">
        <a-select
          placeholder='请选择模块'
        >
          <a-select-option value='male'>male</a-select-option>
          <a-select-option value='female'>female</a-select-option>
        </a-select>
      </a-col>
      <a-col :span="3">
        <a-select
          placeholder='请选择紧急度'
        >
          <a-select-option value='male3'>非常紧急</a-select-option>
          <a-select-option value='female4'>紧急</a-select-option>
          <a-select-option value='female5'>一般</a-select-option>
        </a-select>
      </a-col>
      <a-col :span="3">
        <a-select
          placeholder='请选择状态'
        >
          <a-select-option value='male6'>未处理</a-select-option>
          <a-select-option value='female7'>退回</a-select-option>
          <a-select-option value='female8'>已规划</a-select-option>
        </a-select>
      </a-col>
    </a-row>
    <a-table 
      :columns="columns" 
      :dataSource="data"
      :style="{marginTop:'30px'}"
    >
      <span>1</span>
      <span>1</span>
      <span>1</span>
      <span>1</span>
      <span>1</span>
    </a-table>
</a-form>
</template>

<script>
import moment from 'moment';
export default {
  name: 'examine',
  data () {
    return {
      columns:[{
          title: '序号',
          dataIndex:'name',
        }, {
          title: '标题',
          dataIndex: 'action6',
        },{
          title: '产品名称',
          dataIndex: 'action5',
        },{
          title: '项目名称',
          dataIndex: 'action4',
        },{
          title: '模块名称',
          dataIndex: 'action3',
        },{
          title: '紧急度',
          dataIndex: 'action2',
        },{
          title: '提交日期',
          dataIndex: 'action1',
        },{
          title: '回复状态',
          dataIndex: 'action11',
        },{
          title: '回复人',
          dataIndex: 'action21',
        },{
          title: '回复日期',
          dataIndex: 'action13',
        },{
          title: '回复说明',
          dataIndex: 'action14',
        },{
          title: '操作',
          dataIndex: 'action15',
        }],
      data:[{
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        }, {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        }, {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        }],
        startValue: null,
        endValue: null,
    }
  },
  methods:{
      handleSubmit(){
      },
      handleStartOpenChange(){

      },
      handleEndOpenChange(){
        
      }
  }
}
</script>

<style scoped>
   
</style>
