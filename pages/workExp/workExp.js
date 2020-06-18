Page({
  data: {
    array: [],
    "first_page": 1,
    t_array:["中俄","美日"],
    f_array:["1","2"],
    higher_layer: false,
    changes:[{
      date:"2020-06-08 13:02:12",
      before:"原值：南京",
      now:"修改后：上海",
      },{
      date:"2020-06-08 13:02:12",
      before:"原值：南京",
      now:"修改后：上海",
      },{
      date:"2020-06-08 13:02:12",
      before:"原值：南京",
      now:"修改后：上海",
      }]
  },

  init: function (test, e) {
    var struct = [];
    if (test.type === "workExp") {
      struct = [{
        "value": null,
        "index": "公司名称",
        "placeholder": "请输入公司名称",
        "changed": false,
        "date": false,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "任职岗位",
        "placeholder": "请输入任职岗位",
        "changed": false,
        "date": false,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "开始时间",
        "placeholder": "请选择开始时间",
        "changed": false,
        "date": true,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "结束时间",
        "placeholder": "请选择结束时间",
        "changed": false,
        "date": true,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "变动原因",
        "placeholder": "请输入变动原因",
        "changed": false,
        "date": false,
        "icon_tap": false,
      }];
    } else if (test.type === "family") {
      struct = [{
        "value": null,
        "index": "称谓",
        "placeholder": "请输入称谓",
        "changed": false,
        "date": false,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "姓名",
        "placeholder": "请输入姓名",
        "changed": false,
        "date": false,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "出生日期",
        "placeholder": "请选择出生日期",
        "changed": false,
        "date": true,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "工作单位",
        "placeholder": "请输入工作单位",
        "changed": false,
        "date": false,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "联系电话",
        "placeholder": "请输入",
        "changed": false,
        "date": false,
        "icon_tap": false,
      }];
    } else if (test.type === "edu") {
      struct = [{
        "value": null,
        "index": "毕业学校",
        "placeholder": "请输入毕业学校",
        "changed": false,
        "date": false,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "开始日期",
        "placeholder": "请选择开始日期",
        "changed": false,
        "date": true,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "结束时间",
        "placeholder": "请选择结束日期",
        "changed": false,
        "date": true,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "学历类型",
        "placeholder": "请选择学历类型",
        "changed": false,
        "date": false,
        "selection": true,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "学历",
        "placeholder": "请选择学历",
        "changed": false,
        "date": false,
        "selection": true,
        "icon_tap": false,
      }, {
        "value": null,
        "index": "专业",
        "placeholder": "请输入所学专业",
        "changed": false,
        "date": false,
        "icon_tap": false,
      }];
    }
    this.setData({ array: struct })
  },


  onLoad: function (e) {
    var test = {
      type: "workExp",
      name: "南京中央商场(集团)股份有限公司",
      position: "中心店营业管理部内务主管",
      start_time: "2016-06-06",
      end_time: "2020-06-06",
      reason: "变动原因是巴拉巴拉变身！",
      array: [false, true, false, false, false],
      first_page: 2
    };
    // var test = {
    //   type: "edu",
    //   school: "南京市商业职工中等专业学校",
    //   start_time: "2016-06-06",
    //   end_time: "2020-06-06",
    //   edu_type: "全日制",
    //   edu_rank: "职高",
    //   edu_spe: "营销",
    //   array: [true, false, false, false, false, false],
    //   first_page: 2
    // }
    // var test = {
    //   type: "family",
    //   name: "张三",
    //   relationship: "父亲",
    //   birth: "",
    //   work_space: "南京市江宁区双龙大道",
    //   phone: "13723490987",
    //   array: [false, false, false, true, true],
    //   first_page: 1
    // }
    this.init(test);
    if (test.type === "workExp") {
      if (test.first_page === 2 || test.first_page === 3) {
        var temp = this.data.array;
        temp[0].value = test.name;
        temp[1].value = test.position;
        temp[2].value = test.start_time;
        temp[3].value = test.end_time;
        temp[4].value = test.reason;
        for (var i = 0; i < temp.length; i++) {
          temp[i].changed = test.array[i];
        }
        this.setData({
          array: temp,
        });
      }
      dd.setNavigationBar({
        title: "入司前工作经历"
      })
    } else if (test.type === "edu") {
      if (test.first_page === 2 || test.first_page === 3) {
        var temp = this.data.array;
        temp[0].value = test.school;
        temp[1].value = test.start_time;
        temp[2].value = test.end_time;
        temp[3].value = test.edu_type;
        temp[4].value = test.edu_rank;
        temp[5].value = test.edu_spe;
        for (var i = 0; i < temp.length; i++) {
          temp[i].changed = test.array[i];
        }
        this.setData({
          array: temp,
        });
      }
      dd.setNavigationBar({
        title: "教育经历"
      })
    } else if (test.type === "family") {
      if (test.first_page === 2  || test.first_page === 3) {
        var temp = this.data.array;
        temp[0].value = test.name;
        temp[1].value = test.relationship;
        temp[2].value = test.birth;
        temp[3].value = test.work_space;
        temp[4].value = test.phone;
        for (var i = 0; i < temp.length; i++) {
          temp[i].changed = test.array[i];
        }
        this.setData({
          array: temp,
        });
      }
      dd.setNavigationBar({
        title: "家庭成员"
      })
    }
    this.setData({
      first_page: test.first_page
    });
  },

  input_blur: function (e) {
    let that = this;
    var curr_input = e.detail.value;
    var curr_index = e.currentTarget.dataset.id;
    var temp = this.data.array;
    temp[curr_index].value = curr_input;
    this.setData({
      array: temp
    });
  },

  input_tap: function (e) {
    var that = this;
    var submit_date = this.data.array;
    var curr_index = e.currentTarget.dataset.id;
    console.log(this.data);
    console.log("index: " + curr_index);
    console.log(that.data.array[curr_index].date);
    if (that.data.array[curr_index].date) {
      dd.datePicker({
        format: 'yyyy-MM-dd',
        currentDate: '2020-06-06',
        success: (res) => {
          //console.log(res);
          if (Object.keys(res).length !== 0) {
            submit_date[curr_index].value = res.date;
            that.setData({
              array: submit_date
            });
          }
        },
      });
    }
  },

  iconState: function(e){
    var curr_index = e.currentTarget.dataset.id;
    var temp = this.data.array;
    if(temp[curr_index].icon_tap){
      temp[curr_index].icon_tap = false;
    }else{
      temp[curr_index].icon_tap = true;
    }
    this.setData({
      array: temp,
      higher_layer: false
    });
    for(var i=0; i < temp.length; i++){
      if(temp[i].icon_tap === true){
        this.setData({higher_layer:true})
      }
    }
    console.log(this.data.higher_layer);
  },

  hlayer_tap: function(e){
    var temp = this.data.array;
    for(var i=0; i < temp.length; i++){
      if(temp[i].icon_tap === true){
        temp[i].icon_tap = false;
      }
    }
    this.setData({higher_layer:false, array:temp});
    console.log("higher layer clicked, ", this.data);
  },

  submit: function (e) {
    console.log(this.data.array);
  },

  delete_tap: function (e) {
    console.log(this.data.array);
  }

})