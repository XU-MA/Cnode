Vue.component('top-left-y', {
    props:['json_3'],
    template: `<div class="wrap">
<div class="top" @click="$emit('top-left-bgc')">主页/</div>
<div class="bottom">
<img class="my_img" src="https://avatars3.githubusercontent.com/u/2842176?v=4&s=120" alt="">
<span class="my_span">{{json_3.data.loginname}}</span>
<div>
<p style="font-size: 12px;margin: 5px 0">{{json_3.data.score}}积分</p>
<a href="" style="color: #999999;text-decoration: none;font-size: 12px;margin: 5px 0">3个话题收藏</a>
</div>
<div style="margin-left: 5px">
<a style="display: block" class="a add"><span class="m_span">🏚</span>   http://xcoder.in</a>
<p style="display: block" class="b add"><span class="m_span">📍🎃</span>   Hangzhou</p>
<a style="display: block" class="c add"><span class="m_span">🐼</span>   @XadillaX</a>
<a style="display: block" class="d add"><span class="m_span">🕊</span>   http://weibo.com/xadillax</a>
</div>
<div style="font-size: 12px;color: #999999;padding: 5px 0">注册时间{{(new Date().getFullYear())*1-(json_3.data.create_at.split('').slice(0,4).join(""))*1}}年前</div>
</div> 
</div>`,

});
