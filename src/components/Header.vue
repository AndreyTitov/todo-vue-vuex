<template>
    <div class="header-wrapper">
        <h3 class="header-title">
            TODO
        </h3>
    </div>
</template>

<script>

export default {
    name: 'Header',
}

</script>

<style lang="scss">
    .header {
        &-wrapper {
            background: rgb(150, 15, 10);
        }

        &-title {
            margin: 0;
            color: #fff;
            padding: 20px 0;
        }
    }
</style>