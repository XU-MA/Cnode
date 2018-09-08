Vue.component('bottom-left', {
    props:['json'],
    template: `<div style="margin-top: 20px;background-color: white">
<div v-for="(item,index,key) in json.data.replies" style="border-bottom: 1px solid #cccccc;box-sizing: border-box;padding: 5px">
<div>
<img :src="json.data.replies[index].author.avatar_url" alt="" style="width: 30px;height: 30px;">
<p style="vertical-align: top;line-height: 30px;font-size: 12px;display: inline-block">
<span>{{json.data.replies[index].author.loginname}}</span>
<span class="tyf">{{index+1}}楼</span>
<span class="tyf">●{{3}}个月前</span>
<p  v-html="json.data.replies[index].content" style="font-size: 12px;margin-left: 40px;overflow: hidden">{{json.data.replies[index].content}} <span >👍({{1}})</span></p>
</p>

</div>


</div>
</div>`,



});