<template>

		<div class="P-parents page">
			<div class="content">
				<div class="parents-crumb">
					<a href="" class="back-btn " @click="$router.go(-1)"></a>
					课程详情
				</div>
				<div class="coach-detail-con">
					<p>{{dataForm.name}}</p>
					<img :src="'http://139.155.113.181/file'+dataForm.imgs" />
					<pre v-html="dataForm.doc"></pre>
					<p>{{dataForm.address}}</p>
					<!-- 基本技术 -->
				</div>

				<div class="platform-video" style="margin-bottom:20px">
					<!-- <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player> -->
					<!-- <video :src="" poster="/images/coach.jpg"></video> -->
					<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
					<!-- <div class="play" @click=""><img src="/images/play_icon.png"></div> -->
				</div>
				<div class="table">
    <ul class="title">
        <li class="liStyle">
            日期
        </li>
        <li v-for='i in addTable' class="liStyle">
            {{i.time}}
        </li>
    </ul>
    <div class="df">
        <div>
            <ul v-for='i in addTable[0].day'>
                <li class="liStyle">
                    {{i.name}}
                </li>
            </ul>
        </div>
        <div class="t_body df">
            <ul v-for='i in addTable'>
                <li v-for='j in i.day' class="liStyle">
                    <!-- {{j.reason}} -->
                    {{j.reason}}
                    <!-- <input type="text" v-model="j.reason"/> -->
                </li>
            </ul>
        </div>
    </div>
    </div>
				<!-- <div class="tablebox">
							<el-table
						    :data="tableData"
						    :header-cell-style="{background:'#F7F7F7',color:'#333333'}"
						    stripe
						    style="width: 100%">
						    <el-table-column
						      type=""
						      width="55">
						    </el-table-column>
						    <el-table-column
						      prop="date"
						      label="时间"
						      width="180">
						    </el-table-column>
						    <el-table-column
						      prop="date1"
						      label="7月1日"
						      width="">
						    </el-table-column>
						    <el-table-column
						      prop="date2"
						      label="7月2日">
						    </el-table-column>
						    <el-table-column
						      prop="date3"
						      label="7月3日">
						    </el-table-column>
						    <el-table-column
						      prop="date4"
						      label="7月4日">
						    </el-table-column>
						    <el-table-column
						      prop="date5"
						      label="7月5日">
						    </el-table-column>
						    <el-table-column
						      prop="date6"
						      label="7月6日">
						    </el-table-column>
						    <el-table-column
						      prop="date7"
						      label="7月7日">
						    </el-table-column>
						  </el-table>
						  <div class="note">
								备注:
							</div>
				  </div> -->








			</div>
		</div>

</template>

<script>
import { mapActions } from 'vuex'
	export default {
	  data() {
	  	return {
				dataForm:{},
				 playerOptions: {
                 playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                 autoplay: false, //如果true,浏览器准备好时开始回放。
                 muted: false, // 默认情况下将会消除任何音频。
                 loop: false, // 导致视频一结束就重新开始。
                 preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                    type: "",
                    src: "" //视频url地址
                }],
                // poster: "../../static/image/thumb_1_1380_460_20181009043014983386.jpg", //你的封面地址
                // width: document.documentElement.clientWidth,
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
										volumeControl: false, // 声音控制键
					          playToggle: false, // 暂停和播放键
					          progressControl: false, // 进度条
					          fullscreenToggle: true // 全屏按钮
                }
						},
	  		addTable: {}
	  	}
		},
		created(){
			this.getDetail()
		},
		computed: {
      id () {
				console.log(this.$route.query,555)
				return this.$route.query
      }
		},
		methods:{
			...mapActions('coachTraining', [
        'getTeaching'
      ]),

      getDetail () {
				if(this.$route.query&&this.$route.query.id){
					this.getTeaching({id:this.$route.query.id}).then(res => {
						const { code, data } = res
						if (code === 200) {
							console.log(data)
							this.dataForm = data || {}
							this.addTable=data.times
							this.playerOptions.sources[0].src='http://139.155.113.181/file'+this.dataForm.video
						}
					})
				}else{
					return
				}
        
      }
		}
	}
</script>

<style scoped>
.table{
	  width: 860px;
    height: 482px;
    margin: 0 auto;
}
.table .title {
        display: flex;
    }
    
    .df {
        display: flex;
        background:none;
    }

    .liStyle {
        border: 1px solid;
        width: 120px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
	@import url("P-parents.css");
</style>