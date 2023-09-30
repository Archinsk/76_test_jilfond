<template>
  <div :class="containerStyleClass">
    <div :class="loaderStyleClass" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div :class="commentStyleClass" v-if="comment">{{ comment }}</div>
  </div>
</template>

<script>
export default {
  name: "VbPreloader",
  props: {
    comment: String,
    theme: String,
    commentColor: String,
    type: String,
    size: String,
    absolute: Boolean,
    backdropColored: Boolean,
    backdropBlurred: Boolean,
  },
  computed: {
    containerStyleClass() {
      let containerStyleClass =
        "h-100 d-flex flex-column justify-content-center align-items-center";
      if (this.absolute) {
        containerStyleClass += " preloader-absolute";
        if (this.backdropBlurred) {
          containerStyleClass += " backdrop-blurred";
        }
      }
      if (this.backdropColored) {
        containerStyleClass += " backdrop-colored";
      }
      return containerStyleClass;
    },
    loaderStyleClass: function () {
      let loaderClass = "";
      if (this.type) {
        loaderClass += "spinner-" + this.type;
      } else {
        loaderClass += "spinner-border";
      }
      if (this.theme) {
        loaderClass += " text-" + this.theme;
      }
      if (this.size) {
        if (this.type) {
          loaderClass += " spinner-" + this.type + this.size;
        } else {
          loaderClass += " spinner-border-" + this.size;
        }
      }
      return loaderClass;
    },
    commentStyleClass() {
      let commentStyleClass = "";
      if (this.commentColor) {
        commentStyleClass = `text-${this.commentColor}`;
      } else if (this.theme) {
        commentStyleClass = `text-${this.theme}`;
      }
      return commentStyleClass;
    },
  },
};
</script>

<style lang="scss" scoped>
.preloader-absolute {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.backdrop-colored {
  background-color: rgba(0, 0, 0, 0.5);
}
.backdrop-blurred {
  backdrop-filter: blur(0.25rem);
}
</style>
