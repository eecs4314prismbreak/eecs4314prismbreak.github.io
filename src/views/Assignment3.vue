<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <header>
          <h1>Assignment 3</h1>
          <hr class="mb-2 header-rule" />
          <p>
            See below for a report that covers the concrete architecture of
            WheyPal and how it compares with that from Assignment 1. Diagrams
            are presented in the report that clearly visualize the services
            implemented and their interactions. Prism Break uses
            microservices/containers for deployment and implements 2 use-cases
            in Assignment 3.
          </p>
        </header>
        <hr class="my-2" />
        <rbc-card class="mt-3">
          <h2>Submissions</h2>
          <ul class="list-highlight">
            <li class="mb-1">
              <a
                href="https://docs.google.com/presentation/d/1QpSmZsTaWOtLMnFNU2yxeTc0r4kAZCuACFGKJWXUm10/edit?usp=sharing"
                class="file-ppt"
                >Presentation Slides</a
              >
            </li>
            <li class="mb-1">
              <a
                href="https://docs.google.com/document/d/1_Ldkhei_ynnhxUBOV5twDMLpr9evq6S9aXfqcJo3tBg/edit?usp=sharing"
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
  name: "Assignment3",
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
