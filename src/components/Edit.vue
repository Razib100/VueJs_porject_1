<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="form-group">
            <label>Item Title:</label>
            <input type="text" class="form-control" v-model="item.title" />
          </div>
          <div class="form-group">
            <label>Item Price:</label>
            <input type="text" class="form-control" v-model="item.item_price" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Item" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      item: {}
    };
  },

  created: function() {
    this.getItem();
  },

  methods: {
    getItem() {
      let uri =
        "http://localhost/demo/api/demo/Content_by_id/data/" +
        this.$route.params.id;
      this.axios.get(uri).then(response => {
        this.item = response.data;
      });
    },
    updateItem() {
      axios
        .post(
          "http://localhost/demo/api/demo/Update_item_by_id/data/" +
            this.$route.params.id,
          {
            information: this.item
            // id: this.$route.params.id
          },
          { "Content-Type": "application/x-www-form-urlencoded" }
        )
        .then(result => {
          console.log(result.data);
        });
      window.location.href = "/index";
    }
  }
};
</script>
