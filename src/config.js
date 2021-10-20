
import fse from "fs-extra"


const init = [
    {
        name:'conf',
        type:'confirm',
        message:'是否初始化一个新项目：'
    },{
        name:'name',
        message:'请输入项目名称：',
        validate:function(val){
            if (!val) {
                return `你忘了输入项目名称哦`
            }
            if (fse.existsSync(val)) {
                return `当前目录已存在同名目录`
            }
            return true
        },
        when:res => Boolean(res.conf)
    },{
        name:'desc',
        message:'请输入项目描述：',
        when:res=>Boolean(res.conf)
    },
    {
        name:'template',
        type:'list',
        message:'🔜 请选择一个框架?',
        choices:[
            {
                key:'a',
                name:'普通通用框架', 
                // value:'git@github.com:Dmt-2020/vue-template.git', //前台通用框架的git地址
                value:'github:Dmt-2020/vue-template#main'  
                //注意地址的格式，不是从GitHub上直接复制下来的格式，而是：
                // GitHub - github:owner/name or simply owner/name[#分支名]
                // GitLab - gitlab:owner/name
                // Bitbucket - bitbucket:owner/name
               
            },
            {
                key:'b',
                name:'中后台通用框架',
                value:'', //中后台的通用框架git地址
            }
        ],
        filter:function(val){
            return val.toLowerCase()
        },
        when:res=>Boolean(res.conf)
    }
]

const create = [
    {
        name:'conf',
        type:'confirm',
        message:'是否创建新项目：'
    },{
        name:'name',
        message:'请输入项目名称：',
        validate:function(val){
            if (!val) {
                return `你忘了输入项目名称哦`
            }
            if (fse.existsSync(val)) {
                return `当前目录已存在同名目录`
            }
            return true
        },
        when:res => Boolean(res.conf)
    },{
        name:'desc',
        message:'请输入项目描述：',
        when:res=>Boolean(res.conf)
    },{
        name:'template',
        type:'list',
        message:'🔜 请选择一个框架?',
        choices:[
            {
                key:'a',
                name:'vue基础模板（路由）',
                // value:'Dmt-2020/vue-template'
                value:'github:Dmt-2020/vue-template#main', //git地址
            },
            {
                key:'b',
                name:'啥也不是...',
                value:'', //框架git地址
            }
        ],
        filter:function(val){
            return val.toLowerCase()
        },
        when:res=>Boolean(res.conf)
    }
]


export {init,create}



//inquirer----prompt

// type：表示提问的类型，包括：input、confirm、 list、rawlist、expand、checkbox、password、editor。
// name: 存储当前输入的值。
// message：问题的描述。
// default：默认值。
// choices：列表选项，在某些type下可用，并且包含一个分隔符(separator)；
// validate：对用户的回答进行校验。
// filter：对用户的回答进行过滤处理，返回处理后的值。
// when：根据前面问题的回答，判断当前问题是否需要被回答。
// pageSize：修改某些type类型下的渲染行数。
// prefix：修改message默认前缀。
// suffix：修改message默认后缀。