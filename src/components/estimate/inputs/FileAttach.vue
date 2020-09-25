<template>
  <div></div>
</template>

<script>
export default {
  name: 'FileAttach',
}
</script>

<style lang="scss" scoped>
    // @LocalUtils
    @mixin common-error-message-style {
        padding: 10px 0;
        display: block;
        text-align: right;
        color: $hhr-red;
    }

    .validation-error {
        @include common-error-message-style;
        @include primary-shake;
    }

    .wrap-attach-file {
        height: 160px;
        padding-top: 40px;
        @media (max-width: $screen-mobile) {
            height: 90px;
            padding-top: 20px;
        }
    }
</style>
