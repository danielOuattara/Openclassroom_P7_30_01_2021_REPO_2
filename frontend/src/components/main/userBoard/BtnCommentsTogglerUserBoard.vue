<template>
    <span class="bloc-container-toggler" 
          data-toggle="collapse" 
          :data-target="'#photo-user-wall'+item" 
          tabindex="0"
          role="button"
          aria-expanded="false" :aria-controls="'photo-user-wall'+item"
          @click="onCommentToggleClick"> 
        Comments :
        <span  class="number-of-comments">{{comments.length}} </span>
        <font-awesome-icon v-if="!toggleClicked" class="chevron-down-comment" icon="chevron-down" />
        <font-awesome-icon v-if='toggleClicked' class="chevron-up-comment" icon="chevron-up" />
    </span>
</template>

<script>
export default {
    data() {
        return {
            toggleClicked : false,
        }
    },
    props: {
        item: {
            type: String,
            default: ''
        },
  
        comments: {
            type: Array,
            default: () => { return [] }
        },
    },

    methods: {
        onCommentToggleClick() {
            this.toggleClicked = ! this.toggleClicked;
        }
    }
}
</script>

<style lang="scss" scoped>


</style>