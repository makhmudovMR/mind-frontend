<template>
  <div>
    <div class="my_container">
      <div class="columns">
        <div class="column col-12">
          <Navbar />
        </div>
      </div>

      <div class="columns" style="margin-top:10px">
        <div class="column col-4">
          <ul class="menu">
            <!-- menu header text -->
            <li class="divider" data-content="LINKS"></li>
            <!-- menu item standard -->
            
            <li class="menu-item" v-for="item in this.chats.chats">
              
              <router-link :to="{ name: 'Chat', params: { chatId: item.chat_id }}" ><small>{{item.user1_firstname}} {{item.user1_lastname}} | {{item.user2_firstname}} {{item.user2_lastname}}</small></router-link>

              <!-- <a href="#" v-if="condition(item, 'user2')">{{item.user2.firstname}} {{item.user2.lastname}}</a> -->
              <!-- <a href="#">{{item.user1.firstname}} {{item.user1.lastname}}</a> -->

              <div class="menu-badge">
                <label class="form-checkbox">
                  
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div class="column col-8">
          <div class="panel">
            <div class="panel-header">
              <div class="panel-title">User Two</div>
              <hr />
            </div>
            <div class="panel-nav">
              <!-- navigation components: tabs, breadcrumbs or pagination -->
            </div>
            <div class="panel-body">

              <div class="left" v-for="item in this.messages">
                <h6>{{item.user.firstname}} {{item.user.lastname}}</h6>
                <p>{{item.text}}</p>
                <small>{{item.date}}</small>
                <hr>
              </div>
              <!-- contents -->
            </div>
            <div>
              <div class="panel-footer">
                <div class="form-group">
                  <label class="form-label" for="input-example-3">Message</label>
                  <textarea v-model="message" class="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
                </div>
                <button v-on:click="this.handlerMessage" class="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  props: ['chatId'],
  components: {
    Navbar
  },
  data(){
    return {
      messages: [],
      message: '',
      chats: [],
    }
  },

  watch: {
    '$route' (to, from) {
      location.reload()
    }
  },
  
  async mounted(){
    this.messages = (await this.$store.dispatch('loadMessages', {chatId: this.chatId})).data
    this.chats = (await this.$store.dispatch('loadChats')).data
    console.log('loadchats',this.chats)
  },

  methods:{
    async handlerMessage(){
      await this.$store.dispatch('writeMessage', {chatId: this.chatId, text: this.message});
      await this.updateMessages()
      console.log(this.message);
    },

    async updateMessages(){
      this.messages = (await this.$store.dispatch('loadMessages', {chatId: this.chatId})).data
    }
  }
}
</script>

<style scoped>
.left {
  text-align: left;
}

.right {
  text-align: right;
}

small {
  margin: 0px;
  padding: 0px;
}
.my_container {
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .my_container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .my_container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .my_container {
    width: 1170px;
  }
}
</style>