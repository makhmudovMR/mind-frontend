<template>
  <div>
    <div class="my_container">
      <div class="columns">
        <div class="column col-12">
          <ul class="tab">
            <li class="tab-item active">
              <a href="#">Home</a>
            </li>
            <li class="tab-item">
              <a href="#">Notification</a>
            </li>
            <li class="tab-item">
              <a href="#">News</a>
            </li>
            <li class="tab-item tab-action">
              <div class="input-group input-inline">
                <input class="form-input input-sm" type="text" />
                <button class="btn btn-primary btn-sm input-group-btn">Search</button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="poster" style="margin-top:20px">
        <h3>The Poster</h3>
        <h6>Always here...</h6>
      </div>

      <div class="columns" style="margin-top:10px">
        <div class="column col-4">
          <div class="panel">
            <div class="panel-header">
              <center>
                <figure
                  class="avatar avatar-xl"
                  data-initial="YZ"
                  style="background-color: #5755d9;"
                >
                  <img
                    src="https://yt3.ggpht.com/a/AATXAJzR7mGFIp9S5lGJf5DjFlqXBUklv_RL4LxA2A=s900-c-k-c0xffffffff-no-rj-mo"
                  />
                </figure>
              </center>
              <center>Magomed Makhmudov</center>
              <div class="card-subtitle text-gray">
                <center>@makhmudov</center>
              </div>
            </div>
            <div class="panel-nav">
              <hr />
            </div>
            <div class="panel-body">
              <div style="margin-top:20px">
                <p>
                  <b>Age</b>: 22
                </p>
                <p>
                  <b>Following</b>: 15
                </p>
                <p>
                  <b>Followers</b>: 20
                </p>
              </div>
            </div>
            <div class="panel-footer">
              <!-- buttons or inputs -->
            </div>
          </div>
        </div>
        <div class="column col-8">
          <div class="panel">
            <div class="panel-body" style="padding: 20px">
              <div class="input-group">
                <span class="input-group-addon">Your Mind >></span>
                <input type="text" class="form-input" placeholder="..." />
                <button class="btn btn-primary input-group-btn">Submit</button>
              </div>

              <div style="margin-top:20px">
                <div class="mind" style="margin-bottom:20px">
                  <span>
                    <figure class="avatar avatar-lg">
                      <img src="https://cdn.onlinewebfonts.com/svg/img_106845.png" />
                    </figure>
                  </span>
                  <span style="margin-left:10px">
                    <b>Communist Party</b>
                  </span>
                  <blockquote>
                    <p>The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.</p>
                  </blockquote>
                </div>

                <div class="mind" style="margin-bottom:20px">
                  <span>
                    <figure class="avatar avatar-lg">
                      <img src="https://cdn.onlinewebfonts.com/svg/img_106845.png" />
                    </figure>
                  </span>
                  <span style="margin-left:10px">
                    <b>Communist Party</b>
                  </span>
                  <blockquote>
                    <p>The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.</p>
                  </blockquote>
                </div>

                <div class="mind" style="margin-bottom:20px">
                  <span>
                    <figure class="avatar avatar-lg">
                      <img src="https://cdn.onlinewebfonts.com/svg/img_106845.png" />
                    </figure>
                  </span>
                  <span style="margin-left:10px">
                    <b>Communist Party</b>
                  </span>
                  <blockquote>
                    <p>The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.poster h3,
.poster h6 {
  color: white;
}

.poster {
  padding: 20px;
  min-height: 100px;
  max-height: 120px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    39deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(67, 5, 170, 1) 50%,
    rgba(6, 221, 249, 1) 100%
  );
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