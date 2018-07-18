<template>
    <a-form @submit="handleSubmit" :autoFormCreate="(form)=>{this.form = form}" :style="{background:'white',paddingTop:'20px'}">
        <a-form-item
        label='标题'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        fieldDecoratorId='title'
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入标题!' }]}"
        >
        <a-input 
        addonAfter='0/40'
        />
        </a-form-item>
        <a-form-item
        label='产品'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入产品!' }]}"
        >
        <a-select 
        defaultValue="yunwen" 
        >
            <a-select-option value="yunwen">云问机器人系统</a-select-option>
            <a-select-option value='yunwen1'>1</a-select-option>
            <a-select-option value='yunwen2'>2</a-select-option>
        </a-select>
        </a-form-item>
        <a-form-item
        label='项目'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        :fieldDecoratorOptions="{rules: [{ required: true, message: '请输入项目!' }]}"
        >
        <a-select
        defaultValue="male" 
        >
            <a-select-option value='male'>云问机器人系统2018标准开发</a-select-option>
            <a-select-option value='male1'>云问机器人系统2018标准开发1</a-select-option>
            <a-select-option value='male2'>云问机器人系统2018标准开发2</a-select-option>
        </a-select>
        </a-form-item>
        <a-form-item
        label='模块'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        >
        <a-select
            placeholder='请选择模块'
        >
            <a-select-option value='male'>male</a-select-option>
            <a-select-option value='female'>female</a-select-option>
        </a-select>
        </a-form-item>
        <a-form-item
        label='紧急度'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        :style="{textAlign:'left'}"
        >
        <a-radio-group name="radioGroup" :defaultValue="1" >
            <a-radio :value="1">非常紧急</a-radio>
            <a-radio :value="2">紧急 </a-radio>
            <a-radio :value="3">一般</a-radio>
        </a-radio-group>
        </a-form-item>
        <a-form-item
        label='需求详细'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        >
            <a-textarea 
            placeholder="请详细描述你的需求（业务场景或者某个页面的功能），以便产品人员功能容易理解你的需求和建议，谢谢！"
            :autosize="{minRows: 5, maxRows: 5 }"
            />
        </a-form-item>
        <a-form-item
        label='附件'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
        :style="{textAlign:'left'}"
        >
        <a-upload action="//jsonplaceholder.typicode.com/posts/" :multiple="false" >
            <a-button>
                <a-icon type="upload" />选择文件
            </a-button>
        </a-upload>
        </a-form-item>
        <a-form-item
        :wrapperCol="{ span: 12, offset: 5 }"
        >
        <a-button 
        type='primary' 
        htmlType='submit'
        >
        提交
        </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'submission',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
      handleSubmit(){
        //   console.log(this.form.options)
      },
  }
}
</script>

<style scoped>
   
</style>
