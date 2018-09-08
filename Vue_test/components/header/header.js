Vue.component('a-list', {
    props:['content'],
    template: `<div>
                    <template v-for="item of content.data">
                        <div  class="content_m">
                            <div class="left_m">
                                 <img :src="item.author.avatar_url" alt="" class="img" @click="$emit('top-right-bgc')">
                                 <p>
                                     <span>{{item.reply_count}}</span>
                                     <span>/</span>
                                     <span>{{item.visit_count}}</span>
                                 </p> 
                                 <template v-if="!item.top && !item.good && item.tab == 'share'">
                                      <span>分享</span>
                                 </template>
                                 <template v-else-if="!item.top && !item.good && item.tab == 'ask'">
                                     <span>问答</span>
                                 </template>
                                 <template v-else-if="!item.top && !item.good && item.tab == ''">
                                     <span>问答</span>
                                 </template>
                                 <template v-else-if="item.top && !item.good && item.tab == 'share'|| item.tab == 'ask'">
                                     <span style="background-color: #80bd01;color: #ffffff;">置顶</span>
                                 </template>
                                 <template v-else-if="!item.top && item.good && item.tab == 'share'|| item.tab == 'ask'">
                                     <span style="background-color: #80bd01;color: #ffffff;">精华</span>
                                 </template>
                                 <a href="" :title="item.title" @click.prevent>
                                     <span class="my_span_m"  @click="$emit('title-index-bgc')">{{item.title}}</span>
                                 </a>
                            </div>
                            <div class="right_m">
                                <img :src="item.author.avatar_url" alt="">
                            </div>
                        </div>
                    </template>
                    <div>
                        <button><img src="components/header/img/左箭头.png" alt=""></button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button>...</button>
                        <button><img src="components/header/img/右箭头.png" alt=""></button>
                    </div>
                    <div class="bottom_right">
                    <img src="components/header/img/one.png"/>
                    <img src="components/header/img/two.png"/>
                    <img src="components/header/img/three.png"/>
                </div>
                </div>`
});

