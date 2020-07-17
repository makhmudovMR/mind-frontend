<template>
  <div class="mind" style="margin-bottom:20px">
    <span>
      <figure class="avatar avatar-lg">
        <img
          src="https://icons-for-free.com/iconfiles/png/512/basic+white-galaxy-131994931874908144.png"
        />
      </figure>
    </span>
    <span style="margin-left:10px">
      <b></b>
    </span>
    <blockquote>
      <p>{{item.body}}</p>
    </blockquote>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>