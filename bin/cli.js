#! /usr/bin/env node     //声明执行环境
import inquirer from "inquirer"
import myChalk from "chalk"
import { program } from "commander"
import  {init,create} from "../src/config.js"  //用来导入inquirer.prompt的配置项，即脚本命令中的create、init等
import createProject from '../src/create.js'

const { red } = myChalk  //用来渲染出带有颜色的字体提示
/** 创建项目 */
program
   .version('0.0.1')
   .option('-C, --chdir <path>', 'change the working directory')
   .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
   .option('-T, --no-tests', 'ignore test hook')
program
    .command('init')
    .description('generate a new project from a template')
    .action(function(){
        inquirer.prompt(init).then(answer => {
            if(answer.conf){
                createProject(answer)
            }else{
                red(`🆘 您已经终止此操作 🆘`)
            }
        }).catch(err=>{
            red(`❌ 程序出错 ❌`)
            process.exit(1);
        })
})
program
    .command('create')
    .description('create a project')
    .action(function(){
        inquirer.prompt(create).then(answer => {
            if(answer.conf){
                createProject(answer)
            }else{
                red(`🆘 您已经终止此操作 🆘`)
            }
        }).catch(err=>{
            red(`❌ 程序出错 ❌`)
            process.exit(1);
        })
})
program
    .command('delete')
    .description('delete a template')
    .action(function(){
        inquirer.prompt(question).then(answer => {
            if(answer.conf){
                createProject(answer)
            }else{
                red(`🆘 您已经终止此操作 🆘`)
            }
        }).catch(err=>{
            red(`❌ 程序出错 ❌`)
            process.exit(1);
        })
})

program
    .command('list')
    .description('list all the templates')
    .action(function(){
        inquirer.prompt(question).then(answer => {
            if(answer.conf){
                createProject(answer)
            }else{
                red(`🆘 您已经终止此操作 🆘`)
            }
        }).catch(err=>{
            red(`❌ 程序出错 ❌`)
            process.exit(1);
        })
})

//解析命令行参数（必需）
program.parse(process.argv);

//解析命令行的指令，必须要加上，不然打印不出信息
// program.parse(process.argv)