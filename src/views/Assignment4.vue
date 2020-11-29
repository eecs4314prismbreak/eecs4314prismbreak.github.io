<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <header>
          <h1>Assignment 4</h1>
          <hr class="mb-2 header-rule" />
          <p>
            See the report below that explains project enhancements and
            WheyPal's concrete architecture to support self-management. The
            report additionally covers potential risks for changes implemented
            in the architecture. Sequence diagrams are included to explain the
            flow of use cases through the proposed architectural modifications.
            In addition to the report, see the slide-show presentation attached
            below.
          </p>
        </header>
        <hr class="my-2" />
        <rbc-card class="mt-3">
          <h2>Submissions</h2>
          <ul class="list-highlight">
            <li class="mb-1">
              <a
                href="https://docs.google.com/presentation/d/1Lra4nM2CSXHTha26jjGh5EUEtRVVj5_AMIU7BAWwcV8/edit?usp=sharing"
                class="file-ppt"
                >Presentation Slides</a
              >
            </li>
            <li class="mb-1">
              <a
                href="https://docs.google.com/document/d/15xrjgLh8nET8r2ZC2CVubcyZKHm2A0JBo9-lr5f8im0/edit?usp=sharing"
                class="file-pdf"
                >Report</a
              >
            </li>
          </ul>
        </rbc-card>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from "rbc-wm-framework-vuejs/dist/wm/components";
export default {
  name: "Assignment4",
  components: {
    "rbc-card": Card,
  },
};
</script>

<style scoped>
h1 {
  font-size: 3.074rem;
}
</style>
