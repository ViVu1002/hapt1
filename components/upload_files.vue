<template>
  <div class="container">
    <div class="row">
      <div class="col-md-2">
        <input type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()" />
      </div>
      <div class="col-md-4">
        <button class="btn btn-success" v-on:click="submitFiles()">Upload</button>
      </div>
    </div>

    <div class="large-12 medium-12 small-12 cell">
      <div v-for="(file, key) in files" :key="key" class="file-listing">
        {{ file.name }}
        <span class="remove-file" v-on:click="removeFile( key )">Cancel</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: []
    };
  },
  methods: {
    submitFiles() {
      if (!this.checkFilesValid()) {
        console.log(
          "%cMax file is 5, please remove some picsture",
          "color: red; font-size: 20px;"
        );
      } else {
        let formData = new FormData();
        for (let i = 0; i < this.files.length; i++) {
          formData.append("files", this.files[i]);
        }
        this.$axios
          .post("/gallery/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" }
          })
          .then(response => {
            this.$emit("uploaded", { productImageInfo: response.data.data });
            this.files = "";
          })
          .catch(error => {
            console.log(
              "%cOops! something went wrong!",
              "color: red; font-size: 20px;"
            );
            console.log(error);
          });
      }
    },

    handleFilesUpload() {
      let uploadedFiles = this.$refs.files.files;
      for (let i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }
    },

    removeFile(key) {
      this.files.splice(key, 1);
    },

    checkFilesValid() {
      return this.files.length <= 5;
    }
  }
};
</script>
<style scoped>
div.file-listing {
  width: 200px;
}

span.remove-file {
  color: red;
  cursor: pointer;
  float: right;
}
div button {
  margin-left: 14px;
}
div input {
  margin-left: -15px;
}
</style>
