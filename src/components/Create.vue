<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addItem">
          <div class="form-group">
            <label>Item Title:</label>
            <input type="text" class="form-control" v-model="item.title" />
          </div>
          <div class="form-group">
            <label>Item Price:</label>
            <input type="text" class="form-control" v-model="item.item_price" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Item" />
          </div>
        </form>
      </div>
      <div class="col-lg-1">
        <a href="/">
          <b-button class="mb-3" variant="danger" type="submit">Home</b-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  // components: {
  //   name: "AddItem"
  // },
  data() {
    return {
      item: {}
    };
  },
  methods: {
    addItem() {
      axios
        .post(
          "http://localhost/demo/api/demo/Add_item/data/",
          {
            information: this.item
          },
          { "Content-Type": "application/x-www-form-urlencoded" }
        )
        .then(result => {
          console.log(result.data);
        });
      window.location.href = "/Create";
    }
  }
};
</script>
