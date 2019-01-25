<template>
<mu-paper class="Bottom-Nav-Class">
    <mu-bottom-nav :value.sync="shift" shift @change="handleChange">
        <mu-bottom-nav-item value="movies" title="电影" icon="ondemand_video" to='/movie'></mu-bottom-nav-item>
        <mu-bottom-nav-item value="music" title="音乐" icon="music_note"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="books" title="书籍" icon="books"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="pictures" title="影像" icon="photo"></mu-bottom-nav-item>
    </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
    name: 'footnav',
    data() {
        return {
            shift: 'movies',
            selected: 'movie'
        }
    },
    created() {},
    mounted() {},
    methods: {
        handleChange: function (value) {
        }
    },
    computed: {},
    watch: {},
    components: {}
}
</script>

<style>
.Bottom-Nav-Class {
    position: fixed;
    width: 100%;
    bottom: 5px;
    table-layout: fixed;

    /* height:50px; */
}
</style>
