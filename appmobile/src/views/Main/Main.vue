<template>
<div class="app">
    <keep-alive>
        <router-view />
    </keep-alive>
    <foot-nav ref='foot'></foot-nav>
</div>
</template>

<script>
import footNav from '../../components/Foot_Nav.vue'

export default {
    name: 'Main',
    data() {
        return {
            selected: ''
        }
    },
    created() {},
    mounted() {
        let vm = this
        let footNav = this.$refs.foot;
        this.selected = footNav.selected;
        this.$router.push({
            name: vm.selected
        })
    },
    methods: {},
    computed: {},
    watch: {

    },
    components: {
        footNav
    }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* background-color: #fafafa; */
}
</style>

