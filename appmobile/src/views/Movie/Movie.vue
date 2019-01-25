<template>
<div style="width:100%;">
    <div class="search_input">
        <i class="iconfont icon-sousuo"></i>
        <input id="search_input" type="text" v-model.trim="keyword" placeholder="请输入关键字" @keyup.enter="SearchResult()" @click="showcancel"/>
        <i class="iconfont icon-saoyisaoerweimasaomasaomiao" v-show="!search"></i>
        <span class="search" @click="CancelSearch()" v-show="search">取消</span>
    </div>
    <mu-tabs :value.sync="active3" center color="blue500" class="tabs" center>
        <mu-tab>
            电影
        </mu-tab>
        <mu-tab>
            电视
        </mu-tab>
        <mu-tab>
            综艺
        </mu-tab>
    </mu-tabs>
    <!-- <div class="demo-text" v-if="active3 === 0">
        <p>“……是的，我承认从很早以前我都害怕死亡，在医院里被人研究的时候，以前做出布局的时候，其实我很怕死的，因为除了死以外，我没有值得珍惜的东西，很奇怪是吧？恰好是这样我真的很怕死，因为我想要有值得珍惜的东西之后，死亡之后才会不寂寞，我才能够安然的面对死亡……”</p>
    </div>
    <div class="demo-text" v-if="active3 === 1">
        <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
        <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
        <p>“那么就去地狱找到你，我绝对不逃！”</p>
        <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
    </div>
    <div class="demo-text" v-if="active3 === 2">
        <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
        <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
        <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
        <p>“也许吧，未来……给你了。”</p>
    </div> -->
</div>
</template>

<script>
export default {
    name: 'Movie',
    data() {
        return {
            active3: 0,
            keyword: '',
            SearchClass: null,
            MusicRoot: null,
            BookRoot: null,
            MovieRoot: null,
            search: false
        };
    },
    mounted() {

    },
    methods: {
        //搜索
        SearchResult: function () {

        },
        showcancel: function () {
            this.search = true
            let search_input = document.getElementById('search_input')
            search_input.style.width = '85%'

        },
        CancelSearch:function(){
             this.search = false
            let search_input = document.getElementById('search_input')
            search_input.style.width = '100%'
        }
    }
}
</script>

<style lang="less">
.demo-text {
    padding: 16px;
    background: #fff;

    p {
        margin: 8px 0;
    }
}

.tabs {
    position: fixed;
    top: 0;
}

.search_team {
    padding: 0 5%;
}

.search_input {
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #f3f3f3;
    height: 50px;

    input {
        float: left;
        width: 100%;
        height: 30px;
        font-size: 12px;
        background: #F1F1F1;
        margin-right: 10px;
        border: 0;
        border-radius: 10px;
        padding: 0 7%;
    }

    i {
        position: absolute;
    }

    .icon-sousuo {
        left: 5%;
        line-height: 30px;
    }

    .icon-saoyisaoerweimasaomasaomiao {
        right: 5%;
        line-height: 30px
    }

    .search {
        font-size: 14px;
        margin-top: 5px;
        line-height: 30px;
        font-style: unset;
    }
    .search:hover{
        cursor: pointer;
    }
}
</style>
