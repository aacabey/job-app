<template>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col col-lg-9">
                <app-header></app-header>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./components/common/Header.vue";
export default {
  components: {
    appHeader: Header
  }
};
</script>