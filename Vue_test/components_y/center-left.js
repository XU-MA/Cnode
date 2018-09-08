Vue.component('center-left-y', {
    props:['json_3'],
    template: `<div class="wrap">
<div class="top" style="color: black;">最新创建的话题</div>
<div class="bottom">
<div v-for="(item,index) in 5" style="border-bottom:1px solid #f3f3f3;padding: 5px 0;overflow: hidden">
<img style="width: 30px;height: 30px;" src="https://avatars3.githubusercontent.com/u/2842176?v=4&s=120" alt="">
<span class="font_">*/*</span>
<span class="font_" style="color: #0088CC">{{json_3.data.recent_topics[index].title}}</span>
<span style="float: right">{{1}}世纪前</span>
<!--<span>{{new.data('json.data.recent_topics[index].last_reply_at.split('').slice(0,10).join("")+json.data.recent_topics[index].last_reply_at.split('').slice(12,19).join("")')}}</span>-->
</div>
<div style="font-size: 12px;margin-left: 5px;padding: 5px 0">
查看更多>>
</div>
<!--<div style="font-size: 12px;color: #999999">注册时间{{(new Date().getFullYear())*1-(json.data.create_at.split('').slice(0,4).join(""))*1}}年前</div>-->
</div> 
</div>`,

});