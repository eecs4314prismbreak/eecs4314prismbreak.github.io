<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <header>
          <h1>Assignment 2</h1>
          <hr class="mb-2 header-rule" />
          <p>
            For this deliverable, you will submit a report (10 - 15 pages long)
            that gives the abstract (i.e., conceptual) architecture of the
            project (Appendix A). Your report should be posted online. It should
            be web-readable, with appropriate links to web-accessible related
            content. The report should contain sufficient information to help a
            newcomer to a software project get up to speed. Your reports should
            present the conceptual structure of the software system rather than
            discuss the details of its design and implementation. The conceptual
            architecture should focus mostly on the problem domain and
            architecture patterns. At this stage you do not have to focus on
            platform specific models or details such as service oriented, cloud,
            continuous delievery, etc.
          </p>
        </header>
        <hr class="my-2" />
        <rbc-card class="mt-3">
          <h2>Submissions</h2>
          <ul class="list-highlight">
            <li class="mb-1">
              <a href="#" class="file-ppt">Presentation Slides</a>
            </li>
            <li class="mb-1">
              <a href="#" class="file-pdf">Report</a>
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
