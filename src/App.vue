<template>
<div id="app">
    <navbar></navbar>
    <router-view></router-view>
</div>
</template>

<script>
import Navbar from './components/common/Navbar'

export default {
    components: {
        Navbar
    }
}
</script>
