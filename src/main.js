// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import moment from 'moment';
import 'moment/locale/zh-cn';
import Button from 'vue-antd-ui/lib/button'
import 'vue-antd-ui/dist/antd.css'
import router from './router'
import {
  Layout,
  Menu,
  Form,
  Input,
  InputNumber,
  Select,
  Radio,
  Upload,
  Icon,
  DatePicker,
  TimePicker,
  Row,
  Col,
  Table,
  LocaleProvider,
  message
} from 'vue-antd-ui' 


moment.locale('zh-cn');

Vue.config.productionTip = false;
Vue.component(Button.name, Button)
Vue.component(Layout.name, Layout)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)
Vue.component(Input.name, Input)
Vue.component(Input.Group.name, Input.Group)
Vue.component(Input.Search.name, Input.Search)
Vue.component(Input.TextArea.name, Input.TextArea)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Select.name, Select)
Vue.component(Select.Option.name, Select.Option)
Vue.component(Select.OptGroup.name, Select.OptGroup)
Vue.component(Radio.name, Radio)
Vue.component(Radio.Group.name, Radio.Group)
Vue.component(Radio.Button.name, Radio.Button)
Vue.component(Upload.name, Upload)
Vue.component(Upload.Dragger.name, Upload.Dragger)
Vue.component(Icon.name, Icon)
Vue.component(DatePicker.name, DatePicker)
Vue.component(DatePicker.MonthPicker.name, DatePicker.MonthPicker)
Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker)
Vue.component(DatePicker.WeekPicker.name, DatePicker.WeekPicker)
Vue.component(TimePicker.name, TimePicker)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Table.name, Table)
Vue.component(Table.Column.name, Table.Column)
Vue.component(Table.ColumnGroup.name, Table.ColumnGroup)
Vue.component(LocaleProvider.name, LocaleProvider)

Vue.prototype.$message = message

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
