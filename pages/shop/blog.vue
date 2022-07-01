<template>
  <div>
    <shopHeader @products="products=$event"></shopHeader>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <shopNav></shopNav>
          </div>

          <div class="col-sm-9 padding-right">
            <div class="blog-post-area">
              <h2 class="title text-center">Blog Scan & go</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <shopFooter></shopFooter>
  </div>
</template>
<script>
import shopHeader from "~/components/shopHeader.vue";
import shopFooter from "~/components/shopFooter.vue";
import shopNav from "~/components/shopNav.vue";
export default {
  data: function() {},
  components: {
    shopHeader,
    shopFooter,
    shopNav
  }
};
</script>