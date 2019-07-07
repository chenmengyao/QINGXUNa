<template>
    <div class="login-page page">
      <div class="login-image-box">
        <div class="login-image" style="background-image: url(/images/loginbg.jpg);">
          <div class="login-con">
            <div class="login-con-tab display-flex-row">
              <span @click="changtype(1)" :class="{active:ruleForm.type==1}">教练员</span>
              <span @click="changtype(2)" :class="{active:ruleForm.type==2}">家长/球员</span>
              <span @click="changtype(3)" :class="{active:ruleForm.type==3}">机构</span>
              <span @click="changtype(4)" :class="{active:ruleForm.type==4}">管理员</span>
            </div>
            <!--登录-->
              <div class="display-flex-row logon-input">
                <div class="iconbox">
                  <img src="/images/usericon.png"/>
                </div>
                <input type="text"  v-model="ruleForm.name" placeholder="手机号"/>
              </div>
              <div class="display-flex-row logon-input">
                <div class="iconbox">
                  <img src="/images/keyicon.png"/>
                </div>
                <input type="password" v-model="ruleForm.pasword" placeholder="密码"/>
              </div>
              
              <button  @click="onSumbit">登录</button>
              <!-- <div class="display-flex-row login-href">
                <a href="#" class="login-admin">平台管理登录</a>
                <a href="#" class="forgetPassword">忘记密码</a>
                <a href="#">微信扫一扫</a>
              </div> -->
              
            <!--微信扫一扫
            <div class="login-wx-scan display-flex-column">
              <img src="/images/loginewm.jpg" />
              <span>账户密码登录</span>
            </div>-->

          </div>
        </div>
      </div>

    </div>

</template>

<script>
  import { login } from '../../../api/module/login'
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        ruleForm: {
          name : '12345678900',
          pasword: 'test',
          type: 4
        },
      }
    },

    computed: {

    },

    methods: {
      ...mapMutations('Login', [
        'setLoginStatus'
      ]),

      onSumbit () {
        if (!this.checkForm()) return false

        const { type } = this.ruleForm
        login(this.ruleForm).then(res => {
          const { code, data } = res
          if (code === 200) {
            const { userView } = data
            const { statusId, pic, nikename, id } = userView

            // 权限设置
            userView.userType = type
            this.setLoginStatus(userView)

            // 存到客户端缓存
            sessionStorage.setItem('statusId', statusId)
            sessionStorage.setItem('headPic', pic)
            sessionStorage.setItem('nikename', nikename)
            sessionStorage.setItem('id', id)
            sessionStorage.setItem('userType', type)

            // 判断跳转
            switch (type) {
              case 4:
                this.$router.push('/')
                break;
              case 1:
                this.$router.push('/coach/index')
                break;
              case 2:
                this.$router.push('/parent/index')
                break;
              default:
            }
            
          }
        })
      },

      checkForm () {
        const { name, pasword } = this.ruleForm
        if (!name) {
          this.$message({
            message: '请输入用户名或手机号',
            type: 'error'
          })
          return false
        }

        if (!pasword) {
          this.$message({
            message: '请输入密码',
            type: 'error'
          })
          return false
        }

        return true
      },

      changtype (num) {
        console.log(num)
        this.ruleForm.type = num
      }
    },


    created () {

    }
  }
</script>
<style scoped>
input:focus{
  outline: none;
}
/*登录*/
.login-page{
  padding-top: 80px;
}
.login-page .login-image-box{
  margin: 0 auto;
    width: 100%;
    height: 609px;
    max-width: 1920px;
}
.login-page .login-image{
    height: 100%;
    width: 100%;
    text-align: center;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.login-page .login-image .login-con{
  background: #fff;
  padding: 37px 26px 54px 26px;
  margin-right: 170px;
}
.login-page .login-con-tab{
  align-items: center;
  -webkit-align-items: center;
}
.login-page .login-con-tab span{
  font-size: 16px;
  color: #333;
  margin-right: 18px;
  cursor: pointer;
}
.login-page .login-con-tab span:last-child{
  margin-right: 0;
}
.login-page .login-con-tab span.active{
  font-size: 18px;
  font-weight: bold;
}
.login-page .logon-input{
  
  border: 1px solid #BDBDBD;
  margin: 20px 0;
}
.login-page .logon-input .iconbox{
  width: 44px;
  height: 44px;
  background: #DDDDDD;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content:center;
  -webkit-align-content: center;
}

.login-page .logon-input input{
  flex: 1;
  border: none;
  text-indent: 10px;
  font-size: 14px;
  color: #999999;
}

.login-page .login-con button{
  background: #E60012;
  height: 44px;
  line-height: 44px;
  border-radius: 2px;
  -moz-border-radius: 2px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border: none;
  width: 100%;
}
.login-page .login-con .login-href{
  margin-top: 40px;
}
.login-page .login-con .login-href a{
  font-size: 12px;
  color: #666;
}

.login-page .login-con .login-href a.login-admin{
  color: #3C7AC5;
  margin-right: 117px;
}
.login-page .login-con .login-href a.forgetPassword{
  margin-right: 20px;
}
.login-page .login-con .login-wx-scan{
  align-items: center;
  -webkit-align-items: center;
  
}
.login-page .login-con .login-wx-scan span{
  font-size: 12px;
  color: #3C7AC5;
  cursor: pointer;
}
.login-page .login-con .login-wx-scan img{
  width: 218px;
  height: 218px;
  margin-top: 26px;
  margin-bottom: 12px;
}
</style>