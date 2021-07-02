<template>
    <span class="bloc-container-toggler" 
          data-toggle="collapse" 
          :data-target="'#photo-user-wall'+item" 
          tabindex="0"
          role="button"
          aria-expanded="false" :aria-controls="'photo-user-wall'+item"
          @click="onCommentToggleClick"> 
        Comments :
        <span class="number-of-comments">{{comments.length}} </span>
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
.bloc-container-toggler {
    grid-row: 7 / span 1;
    grid-column: 1/ span 3;
    font-size: 0.9rem;
    padding: 0.2rem  0.5rem 0.2rem;
    margin: 1rem 0;
    background: rgba(191, 215, 223, 0.529);
    border-radius: 0.2rem;
    font-weight: 600;
    &:hover {
      border-bottom:0.16rem dotted grey;
      padding: 0.12rem  0.5rem 0.12rem;
    }
}

</style>