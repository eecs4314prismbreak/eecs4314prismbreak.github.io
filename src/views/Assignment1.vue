<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <header>
          <h1>Assignment 1</h1>
          <hr class="mb-2 header-rule" />
          <p>
            For the first deliverable, Prism Break created a webpage with the
            project description and various links about the chosen project. This
            webpage contains sufficient information to help a newcomer to a
            software project get up to speed. Github is used to host the
            webpage.
          </p>
        </header>
        <hr class="my-2" />
        <rbc-card class="mt-3">
          <h2>Submissions</h2>
          <ul class="list-highlight">
            <li class="mb-1">
              <a
                href="https://docs.google.com/presentation/d/1qfglTsfsGmsqoZs1w-_hybfED76ps79-KJmsWPQLiDI/edit?usp=sharing"
                class="file-ppt"
                >Presentation Slides</a
              >
            </li>
            <li class="mb-1">
              <a
                href="https://docs.google.com/document/d/11-Lcmf870wc5FFhTiFur74ee0eWBKkso5T_RAcNbSmg/edit?usp=sharing"
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
  name: "Assignment1",
  components: {
    "rbc-card": Card
  }
};
</script>

<style scoped>
h1 {
  font-size: 3.074rem;
}
</style>
