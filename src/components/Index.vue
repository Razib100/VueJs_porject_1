<template>
  <div>
    <h1>Items</h1>

    <table class="table table-hover">
      <thead>
        <tr>
          <td>ID</td>
          <td>Item Title</td>
          <td>Item Price</td>
          <td>Actions</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.item_price }}</td>
          <td>
            <router-link
              :to="{ name: 'Edit', params: { id: item.id } }"
              class="btn btn-primary"
              >Edit</router-link
            >
          </td>
          <td>
            <button class="btn btn-danger" v-on:click="deleteItem(item.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="col-lg-1">
      <a href="/">
        <b-button class="mb-3" variant="danger" type="submit">Home</b-button>
      </a>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      items: []
    };
  },

  created: function() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      let uri = "http://localhost/demo/api/demo/Content/data/";
      this.axios.get(uri).then(response => {
        this.items = response.data;
      });
    },
    deleteItem(id) {
      let uri = "http://localhost/demo/api/demo/Delete_item_by_id/data/" + id;
      this.items.splice(id, this.$route.params.id);
      this.axios.get(uri);
      window.location.href = "/index";
    }
    // deleteItem() {
    //   axios
    //     .post(
    //       "http://localhost/demo/api/demo/Delete_item_by_id/data/" +
    //         this.$route.params.id,
    //       {
    //         information: this.item
    //         // id: this.$route.params.id
    //       },
    //       { "Content-Type": "application/x-www-form-urlencoded" }
    //     )
    //     .then(result => {
    //       console.log(result.data);
    //     });
    //   //window.location.href = "/index";
    // }
  }
};
</script>
