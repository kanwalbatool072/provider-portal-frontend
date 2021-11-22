<template>
  <div class="draft-signature">
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h3 class="mt-3 fs-large font-600">Patient Note</h3>
        <a-textarea
          :rows="5"
          class="signature"
          placeholder="Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod Lorem ip sum dolor sit amet, consetetur sadipscing. Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod Lorem ip sum dolor sit amet, consetetur sadipscing."
        />
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h3 class="mt-3 fs-large font-600">Patient Signature</h3>
        <a-textarea :rows="5" class="signature" />
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h3 class="mt-3 fs-large font-600">Doctor Note</h3>
        <a-textarea
          :rows="5"
          class="signature"
          placeholder="Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod Lorem ip sum dolor sit amet, consetetur sadipscing. Lorem ipsum dolor sit amet, consetetur sadip scing elitr, sed diam nonumy eirmod Lorem ip sum dolor sit amet, consetetur sadipscing."
        />
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <h3 class="mt-3 fs-large font-600">Doctor Signature</h3>
        <a-textarea :rows="5" class="signature" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
