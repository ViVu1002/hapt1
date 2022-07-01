<template>
  <div>
    <div class="left-sidebar">
      <h2>DANH MỤC SẢN PHẨM</h2>
      <div class="panel-group category-products" id="accordian">
        <!--category-productsr-->
        <div v-for="(cat,index) in cats" :key="index" class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">
              <a
                data-parent="#accordian"
                @click="$router.push('/shop/product/'+cat.id)"
              >{{cat.name}}</a>
              <span data-toggle="collapse" class="badge pull-right" :href="'#a'+cat.id">
                <i class="fa fa-plus"></i>
              </span>
            </h4>
          </div>
          <div :id="'a'+cat.id" class="panel-collapse collapse">
            <div class="panel-body">
              <ul>
                <li v-for="(menu,key) in menus" :key="key" v-show="menu.cat_parent == cat.id">
                  <a @click="$router.push('/shop/product/'+menu.id)">{{menu.name}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--/category-products-->
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      cats: [],
      menus: []
    };
  },
  mounted: function() {
    this.getCatParent();
    this.getCatProduct();
  },
  methods: {
    getCatParent: function() {
      let self = this;
      let id = 0;
      this.$axios.get("/categories/cat_parent/" + id).then(function(res) {
        self.cats = res.data.data.rows;
      });
    },
    getCatProduct: function() {
      let self = this;
      this.$axios.get("/categories/cat_product").then(function(res) {
        self.menus = res.data.data.rows;
      });
    }
  }
};
</script>