<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <header>
          <h1>Assignment 2</h1>
          <hr class="mb-2 header-rule" />
          <p>
            For this deliverable, Prism Break presents a report that covers the conceptual architecture of WheyPal. It is web-readable, with appropriate links to web-accessible related content. The report contains sufficient information to help a newcomer to a software project get up to speed. The conceptual architecture focusses primarily on the problem domain and architecture patterns.
          </p>
        </header>
        <hr class="my-2" />
        <rbc-card class="mt-3">
          <h2>Submissions</h2>
          <ul class="list-highlight">
            <li class="mb-1">
              <a href="https://docs.google.com/presentation/d/1RHgrhinAlaus3K48sdG81miNP7AC0mwbCLTaglNTVaY/edit?usp=sharing" class="file-ppt">Presentation Slides</a>
            </li>
            <li class="mb-1">
              <a href="https://docs.google.com/document/d/14rVDym5iTTMfnG351SsIfsjGwDa-2hcrpQqlIBS2jwI/edit?usp=sharing" class="file-pdf">Report</a>
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
  name: "Assignment2",
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
