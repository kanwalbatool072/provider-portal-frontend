<!-- ************************** TEMPLATE  ************************* -->
<template>
  <!--START DRAWING SECTION -->
  <div class="drawing-anything">
    <!--START MULTIPLE USER ROW -->
    <a-row :gutter="24">
      <a-col :xs="24" :sm="24" :md="24" :lg="14" :xl="16">
        <h3 class="font-600">Draw Anything</h3>
        <a-card :bordered="false">
          <a-row>
            <a-col
              :xs="24"
              :sm="24"
              :md="24"
              :lg="24"
              :xl="24"
              class="text-center"
            >
              <div ref="infoBox" class="drawin-canvas">
                <canvas
                  id="myCanvas"
                  ref="myCanvas"
                  :height="height"
                  :width="width"
                  @mousemove="draw"
                  @mousedown="beginDrawing"
                  @mouseup="stopDrawing"
                />
              </div>
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
      <a-col :xs="24" :sm="24" :md="24" :lg="10" :xl="8" class="mt-4 pt-2">
        <MultipleUserCalling />
      </a-col>
    </a-row>
    <!-- END MULTIPLE USER ROW -->
    <!--START ATTENDES ROW -->
    <a-row :gutter="16" class="pt-5 px-5 mx-5 meeting-video-call">
      <!--START ATTENDES COLUMN-->
      <a-col :xs="8" :sm="6" :md="3" :lg="3" :xl="4" class="pl-5">
        <img src="/images/Vcarecalling/view attendees.svg" />
      </a-col>
      <!-- END ATTENDES COLUMN -->
      <!--START BOTTOM BAR CALLING -->
      <a-col
        :xs="8"
        :sm="16"
        :md="18"
        :lg="18"
        :xl="11"
        class="pt-4 text-center"
      >
        <img src="/images/Vcarecalling/Bottom Bar.png" height="50px" />
      </a-col>
      <!-- END BOTTOM BAR CALLING -->
      <!--START VCARE COLUMN  -->
      <a-col
        :xs="8"
        :sm="2"
        :md="3"
        :lg="3"
        :xl="3"
        class="pt-4 mt-2"
        align="end"
      >
        <img
          src="/images/Vcarecalling/Group 57059.svg"
          height="30px"
          style="cursor: pointer"
          @click="$router.push('/vcare-meeting')"
        />
      </a-col>
      <!--END VCARE COLUMN  -->
    </a-row>
    <!-- END ATTENDES ROW -->
  </div>
  <!--END DRAWING SECTION -->
</template>
<!-- ************************** SCRIPT  ************************* -->
<script>
import MultipleUserCalling from './MultipleUserCalling/MultipleUserCalling.vue'
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
      height: 600,
      width: 700,
      margin: 200
    }
  },
  watch: {},
  mounted() {
    // this.matchWidth()
    // // window.addEventListener('resize', this.handleResize)
    // // this.handleResize()

    const c = this.$refs.myCanvas

    this.canvas = c.getContext('2d')
    this.canvas.strokeStyle = 'green'
    this.canvas.lineWidth = 40
  },
  methods: {
    // matchWidth() {
    //   const width = this.$refs.infoBox.clientWidth
    //   console.log(width)
    //   this.width = width
    // },
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
.drawin-canvas {
  width: 400px;
  height: 600px;
}
// #myCanvas {
//   border: 1px solid grey;
// }

@import '~/assets/scss/pages/multiple-user-calling/multiple-user-calling.scss';
</style>
