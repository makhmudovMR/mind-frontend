<template>
    <div class="input-group">
        <span class="input-group-addon">Your Mind >></span>
        <input type="text" class="form-input" v-model="mindText" placeholder="Write you mind..."/>
        <button class="btn btn-primary input-group-btn" v-on:click="sendMind">Post</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            mindText: ''
        }
    },

    methods:{
        sendMind(){
            this.$emit('postMind', this.mindText)
        }
    }
}
</script>