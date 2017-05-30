<template>
    <div class="app">
        <web-header></web-header>
        <div class="main-container">
            <web-sidebar></web-sidebar>
            <router-view class="main"></router-view>
        </div>
    </div>
</template>

<script>
import WebHeader from './components/header';
import WebSidebar from './components/sidebar';

export default {
    components: { WebHeader, WebSidebar }
};
</script>