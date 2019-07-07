<template>

<div class="organ-page page">
			<div class="banner">
				<div class="banner-image" style="background-image: url('/images/coach_training_banner.jpg')">
				</div>
			</div>
			<div class="content organ-content">
				<div class="organ-crumb">
					<a href="" class="back-btn"></a>
					教练员详情
					<div class="organ-crumb-right">
						<button class="organ-red" @click="editData">编辑资料</button>
					</div>
				</div>
				<div class="organ-group-con">
					<p class="organ-detail-title">深圳市青年足球训练营</p>
					<img src="/images/youth-instituttons.jpg" style="margin:20px auto;display: block" />
					<div class="brief-introduction">
						<div class="brief-title">深圳市青年足球训练营简介</div>
						<div class="brief-detail"> {{dataForm.info}}
						</div>
						<div class="brief-address">
							<p>地址：{{dataForm.address}}</p>
							<p>联系方式：{{dataForm.infoPhone}}</p>
						</div>
					</div>
					<div class="brief-introduction wheel-planting">
                        <div class="brief-title">深圳市青年足球训练营简介</div>
                        <div class="wheel-content">
                            <swiper :options="swiperOption">
                                <swiper-slide v-for="item in piclist">
                                <img :src="item.imgs" class="imgWidth">
                                    <p style="width:100%;text-align:center;">{{item.name}}</p>
                                </swiper-slide>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </div>
                    </div>
                    <div class="brief-introduction">
                        <div class="brief-title">训练视频</div>
                        <div class="platform-video" style="margin-bottom:20px">
                            <video src="" poster="/images/home_4.jpg"></video>
                            <div class="play"><img src="/images/play_icon.png"></div>
                    	</div>
                    </div>
                    <div class="brief-introduction">
                        <div class="brief-title">机构信息</div>
                        <div class="organization-content">
                          <p>在招队伍：12-18青训队伍</p>
                          <p>联系邮箱：13585889223@163.com</p>
                          <p>地址：广东省深圳市龙岗区大运体育中心207</p>
                        </div>
                    </div>
                    <div class="brief-introduction wheel-planting">
                        <div class="brief-title">机构课程</div>
                        <div class="wheel-content">
                            <swiper :options="swiperOption">
                                <swiper-slide v-for="item in piclist">
                                <img :src="item.imgs" class="imgWidth">
                                    <p style="width:100%;text-align:center;">{{item.name}}</p>
                                </swiper-slide>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </div>
                    </div>
                    <div class="brief-introduction wheel-planting">
                        <div class="brief-title">教练团队</div>
                        <div class="wheel-content">
                            <swiper :options="swiperOption">
                                <swiper-slide v-for="item in piclist">
                                <img :src="item.imgs" class="imgWidth">
                                    <p style="width:100%;text-align:center;">{{item.name}}</p>
                                </swiper-slide>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </div>
                    </div>
                    <div class="brief-introduction wheel-planting">
                        <div class="brief-title">赛事荣誉</div>
                        <div class="wheel-content">
                            <swiper :options="swiperOption">
                                <swiper-slide v-for="item in piclist">
                                <img :src="item.imgs" class="imgWidth">
                                    <p style="width:100%;text-align:center;">{{item.name}}</p>
                                </swiper-slide>
                                <div class="swiper-button-prev" slot="button-prev"></div>
                                <div class="swiper-button-next" slot="button-next"></div>
                            </swiper>
                        </div>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    

				</div>

			</div>
		</div>

</template>

<script>
    import { mapActions , mapState } from 'vuex'
	export default {
	  data() {
	  	return {
              key: "value",
              dataForm: {},
      swiperOption: {
        speed: 1000,
        slidesPerView: 3,
        spaceBetween:100,
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

        piclist: [
          {imgs: '1', name: '123123'}
        ],
	  	}
      },
      
      computed: {
          ...mapState('Login', [
              'userStatus'
          ])
      },

      methods: {
          ...mapActions('organ', [
              'wodejianjie'
          ]),

          editData () {
              this.$router.push('/organ/edit')
          },

          getData () {
              let id = Number(this.userStatus.id)
              this.wodejianjie({id}).then(res => {
                  const { code, data} = res
                  if (code === 200 && data) {
                      this.dataForm = data
                  }
              })
          }
      },

      created () {
          this.getData()
      }
	}
</script>

<style scoped>
	@import url("porgan.css");
</style>