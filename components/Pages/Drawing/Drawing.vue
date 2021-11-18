<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START DRAWING SECTION -->
  <div class="drawing-anything">
    <!--START MULTIPLE USER CALLING -->
    <a-row :gutter="24">
      <a-col :xs="24" :sm="11" :md="11" :lg="14" :xl="16">
        <h3 class="font-600">Draw Anything</h3>
        <a-card :bordered="false">
          <a-row>
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              class="text-center py-5 my-5"
            >
              <canvas
                id="myCanvas"
                ref="myCanvas"
                :height="height"
                :width="width"
                @mousemove="draw"
                @mousedown="beginDrawing"
                @mouseup="stopDrawing"
              />
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" align="end">
              <img
                src="/images/Drawing/blue-icon.svg"
                @click="pikColor('#423869')"
              />
              <img
                src="/images/Drawing/grey-icon.svg"
                @click="pikColor('white')"
              />
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xs="24" :sm="11" :md="11" :lg="10" :xl="8" class="mt-4 pt-2">
        <MultipleUserCalling />
      </a-col>
    </a-row>
    <!--END MULTIPLE USER CALLING -->
  </div>
  <!--END DRAWING SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import MultipleUserCalling from '@/components/Pages/DrawingAnything/MultipleUserCalling/MultipleUserCalling.vue'
export default {
  components: {
    MultipleUserCalling
  },
  data() {
    return {
      lineColor: '#423869',
      x: 0,
      y: 0,
      isDrawing: false,
      canvas: null,
      height: 500,
      width: 700,
      margin: 200
    }
  },
  mounted() {
    const c = this.$refs.myCanvas

    this.canvas = c.getContext('2d')
    this.canvas.strokeStyle = 'green'
    this.canvas.lineWidth = 40
  },
  methods: {
    matchWidth() {
      const width = this.$refs.infoBox.clientWidth
      console.log(width)
      // this.width = width
      alert(width)
    },
    // handleResize() {
    //   this.height = window.innerHeight
    //   this.width = window.innerWidth - this.margin
    // },
    pikColor(color) {
      this.lineColor = color
    },
    drawLine(x1, y1, x2, y2) {
      const ctx = this.canvas
      ctx.beginPath()
      ctx.strokeStyle = this.lineColor
      //   ctx.font = "50px Roboto";
      ctx.lineWidth = 5
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
    },
    draw(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = e.offsetX
        this.y = e.offsetY
      }
    },
    beginDrawing(e) {
      this.x = e.offsetX
      this.y = e.offsetY
      this.isDrawing = true
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = 0
        this.y = 0
        this.isDrawing = false
      }
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/pages/drawing-anything/drawing-anything.scss';
</style>
