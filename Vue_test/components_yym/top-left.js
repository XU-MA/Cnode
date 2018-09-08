Vue.component('top-left', {

    props:['json'],
    template: `<div style="padding: 10px; box-sizing: border-box;background-color: white">
<p class="my_p" @click="$emit('top-right-bgc')"> ·发布于 {{3}} 个月前  ·作者 {{json.data.author.loginname}}  ·{{json.data.visit_count}} 次浏览  ·来自 分享</p>
<hr style="background-color: #999999">
<div v-html="json.data.content" style="margin-top: 5px">
{{json.data.content}}

</div>
</div>`,



});
