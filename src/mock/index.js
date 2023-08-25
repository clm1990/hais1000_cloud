import Mock from "mockjs";
function randomColor() {
    return '#' + Math.random().toString(16).substr(2, 6).toUpperCase()
}

const first = [
    {
      label: '项目信息',
      path: '/home',
      icon: 'el-icon-s-home',
      meta: {
        i18n: 'dashboard',
      },
    },
    // {
    //   label: '硬件配置',
    //   path: '/device',
    //   iconBgColor: randomColor(),
    //   icon: 'el-icon-setting',
    //   children: [
    //     {
    //       label: '节点管理',
    //       path: 'MFUManage',
    //       icon: 'el-icon-setting',
    //       iconBgColor: randomColor(),
    //       component: 'views/MFUManage/MFUManage',
    //       meta: {
    //         i18n: 'MFUManage',
    //       },
    //     },
    //     // {
    //     //   label: 'MFU管理',
    //     //   path: 'controller',
    //     //   iconBgColor: randomColor(),
    //     //   icon: 'iconfont icon-guize ',
    //     //   component: 'views/controller/index',
  
    //     // },
    //     // {
    //     //   label: 'LoRa网关管理',
    //     //   path: 'gateway',
    //     //   icon: 'iconfont icon-luyouqi',
    //     //   iconBgColor: randomColor(),
    //     //   component: 'views/gateway/gateway',
    //     //   meta: {
    //     //   },
    //     // },
    //     {
    //       label: '设备管理',
    //       path: 'machine',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/machine/machine',
    //       meta: {
    //       },
    //     },
    //   ]
    // },
    // {
    //   label: '点管理',
    //   path: '/pointManage',
    //   iconBgColor: randomColor(),
    //   icon: 'el-icon-setting',
    //   component: 'views/pointManage/pointManage',
    //   meta: {
    //     i18n: 'pointManage',
    //   },
    //   children: []
    // },
    // {
    //   label: '展示配置',
    //   path: '/view',
    //   iconBgColor: randomColor(),
    //   icon: 'el-icon-setting',
    //   children: [
    //     {
    //       label: '区域管理',
    //       path: 'areaManage',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/areaManage/areaManage',
    //       meta: {
    //         i18n: 'areaManage',
    //       },
    //     },
    //     {
    //       label: '资产管理',
    //       path: 'assetsManage',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/assetsManage/assetsManage',
    //       meta: {
    //         i18n: 'assetsManage',
    //       },
    //     },
    //     // {
    //     //   label: '视图管理',
    //     //   path: 'viewManage',
    //     //   icon: 'iconfont icon-zhunbeiliangchan',
    //     //   iconBgColor: randomColor(),
    //     //   component: 'views/viewManage/viewManage',
    //     //   meta: {
    //     //     i18n: 'viewManage',
    //     //   },
    //     // },
    //   ]
    // },
    // {
    //   label: '高级配置',
    //   path: '/advanced',
    //   iconBgColor: randomColor(),
    //   icon: 'el-icon-setting',
    //   children: [
    //     {
    //       label: '电表配置',
    //       type: 'chongqing',
    //       path: 'meterConfiguration',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/meterConfiguration/meterConfiguration',
    //       meta: {
    //         i18n: 'meterConfiguration',
    //       },
    //     },
    //     {
    //       label: '性能诊断系数配置',
    //       type: 'chongqing',
    //       path: 'coefficients',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/coefficients/coefficients',
    //       meta: {
    //         i18n: 'meterConfiguration',
    //       },
    //     },
    //     {
    //       label: '电表管理',
    //       type: 'other',
    //       path: 'meterManagement',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/meterManagement/meterManagement',
    //       meta: {
    //         i18n: 'meterManagement',
    //       },
    //     },
    //     {
    //       label: '点模板配置',
    //       type: 'other',
    //       path: 'pointTemplateConfiguration',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/pointTemplateConfiguration/pointTemplateConfiguration',
    //       meta: {
    //         i18n: 'pointTemplateConfiguration',
    //       },
    //     },
    //     {
    //       label: '统计分析配置',
    //       type: 'other',
    //       path: 'statisticalConfiguration',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/statisticalConfiguration/index',
    //       meta: {
    //         i18n: 'statisticalConfiguration',
    //       },
    //     },
    //     {
    //       label: '报警模板配置',
    //       path: 'warnModeConfig',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/warnModeConfig/warnModeConfig',
    //       meta: {
    //         i18n: 'warnModeConfig',
    //       },
    //     },
    //     {
    //       label: '报警配置',
    //       path: 'warnConfig',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/warnConfig/warnConfig',
    //       meta: {
    //         i18n: 'warnConfig',
    //       },
    //     },
    //     {
    //       label: '联动配置',
    //       path: 'linkageSet',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/linkageSet/linkageSet',
    //       meta: {
    //         i18n: 'linkageSet',
    //       },
    //     },
    //     {
    //       label: 'AI策略配置',
    //       path: 'policySet',
    //       icon: 'el-icon-setting',
    //       iconBgColor: randomColor(),
    //       component: 'views/policySet/policySet',
    //       meta: {
    //         i18n: 'policySet',
    //       },
    //     },
    //     {
    //       label: '点修正配置',
    //       path: 'pointCorrection',
    //       icon: 'el-icon-setting',
    //       iconBgColor: randomColor(),
    //       component: 'views/pointCorrection/index',
  
    //     },
    //     // {
    //     //   label: '点映射配置',
    //     //   path: 'pintMapping',
    //     //   icon: 'iconfont icon-jinggai',
    //     //   iconBgColor: randomColor(),
    //     //   component: 'views/pintMapping/index',
  
    //     // },
    //     {
    //       label: '节能管理',
    //       path: 'saveManage',
    //       component: 'views/saveManage/saveManage',
    //       icon: 'el-icon-setting',
    //       iconBgColor: randomColor(),
    //       meta: {
    //         i18n: 'saveManage',
    //       },
    //       children: [],
    //     },
    //   ]
    // },
    // {
    //   label: '系统配置',
    //   path: '/sys',
    //   iconBgColor: randomColor(),
    //   icon: 'el-icon-setting',
    //   children: [
    //     {
    //       label: '项目信息',
    //       path: 'sysConfig',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/sysConfig/sysConfig',
    //       meta: {
    //         i18n: 'sysConfig',
    //       },
    //     },
    //     {
    //       label: '文件管理',
    //       path: 'fileManage',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/fileManage/fileManage',
    //       meta: {
    //         i18n: 'fileManage',
    //       },
    //     },
    //     {
    //       label: '备份还原',
    //       path: 'backups',
    //       iconBgColor: randomColor(),
    //       icon: 'el-icon-setting',
    //       component: 'views/backups/backups',
    //       meta: {
    //         i18n: 'backups',
    //       },
    //     },
    //     {
    //       label: '用户管理',
    //       path: 'userManage',
    //       component: 'views/userManage/userManage',
    //       icon: 'el-icon-setting',
    //       iconBgColor: randomColor(),
    //       meta: {
    //         i18n: 'userManage',
    //       },
    //       children: [],
    //     },
  
  
    //   ]
    // },
    // {
    //   label: '库管理',
    //   path: '/lib',
    //   iconBgColor: randomColor(),
    //   icon: 'el-icon-setting',
    //   children: [
  
    //     {
    //       label: '类库管理',
    //       path: 'libManage',
    //       icon: 'el-icon-suitcase-1',
    //       iconBgColor: randomColor(),
    //       component: 'views/libManage/libManage',
    //       meta: {
    //         i18n: 'libManage',
    //       },
    //     },
  
    //     {
    //       label: '设备类型',
    //       path: 'deviceType',
    //       component: 'views/typeConfig/deviceType',
    //       icon: 'iconfont icon-yingjian',
    //       iconBgColor: randomColor(),
    //     },
    //     {
    //       label: '资产类型',
    //       path: 'assetType',
    //       component: 'views/typeConfig/assetType',
    //       icon: 'iconfont icon-huowudui',
    //       iconBgColor: randomColor(),
    //     },
    //     {
    //       label: '策略类型',
    //       path: 'policyType',
    //       component: 'views/typeConfig/policyType',
    //       icon: 'iconfont icon-lianjieliu ',
    //       iconBgColor: randomColor(),
    //     },
    //   ]
    // },
  ]

Mock.mock("/getmenu", "get", ()=>{
    return {
        data: first,
        success :true,
    }
})