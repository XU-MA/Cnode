Vue.component('share', {
    props:['content'],
    template: `<div>
<template v-for="item of content.data" v-if="item.tab == 'share'">
                    <div  class="content_m">
                        <div class="left_m">
                            <img :src="item.author.avatar_url" alt="" class="img" @click="$emit('top-right-bgc')">
                            <p>
                                <span>{{item.reply_count}}</span>
                                <span>/</span>
                                <span>{{item.visit_count}}</span>
                            </p> 
                            <span>分享</span>
                            <a href="" :title="item.title" :title="item.title" @click.prevent>
                                <span class="my_span_m" @click="$emit('title-index-bgc')">{{item.title}}</span>
                            </a>
                        </div>
                        <div class="right_m">
                            <img :src="item.author.avatar_url" alt="">
                        </div>
                    </div>
               </template>
</div>`
});