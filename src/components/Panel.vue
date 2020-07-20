<template>
  <ul class="menu">
    <li class="menu-item">
      <label>{{user.firstname}} {{user.lastname}}</label>
    </li>
    <li class="divider"></li>
    <!-- menu header text -->
    <li class="menu-item">
      <a href="#">
        <i class="icon icon-link"></i>
        Settings
      </a>
    </li>
    <li class="menu-item">
      <a href="#">Following</a>
      <div class="menu-badge">
        <label class="label">{{user.followingLength}}</label>
      </div>
    </li>
    <li class="menu-item">
      <a href="#">Followers</a>
      <div class="menu-badge">
        <label class="label">{{user.followerLength}}</label>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["user"]
};
</script>