Vue.component('top-right',{
    props:['json_3'],
    template:`<div class="t-r">
<div class="top" style="color: black">个人信息</div>
<div class="bottom">
<div>
<img class="t-r-img" :src="json_3.data.avatar_url" alt="" @click="$emit('top-right-bgc')">
<span style="font-size: 12px;vertical-align: top;line-height: 30px;color: #999999">{{json_3.data.loginname}}</span>
</div>
<p style="font-size: 12px; margin: 5px 0">积分：{{json_3.data.score}}</p>
<p style="font-size: 12px; margin: 5px 0">“ 偽宅碼畜一枚。 ”</p>
</div>
</div>`,
})