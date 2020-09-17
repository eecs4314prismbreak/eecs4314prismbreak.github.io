<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <header>
          <h1>EECS 4314 - Team Prism Break</h1>
          <hr class="mb-2 header-rule">
          <p>
            These assignments are intended to provide students with an appreciation for creating and evolving the software design and architecture in the context of a large-scale software system. This document outlines Prism Break's project and a detailed architecture for its software system. The architecture will be updated throughout the term according to each assignment.
          </p>
        </header>
        <hr class="my-2">
        <rbc-card class="mt-3">
          <h2>Members</h2>
          <ul class="list-highlight">
            <li class="mb-1">Jinho Hwang</li>
            <li class="mb-1">Jamie Dishy</li>
            <li class="mb-1">Kevin Banh</li>
            <li class="mb-1">Allen Kaplan</li>
            <li class="mb-1">Amer Alshoghri</li>
          </ul>
        </rbc-card>
      </div>
    </div>
  </div>
</template>

<script>
import { Card } from 'rbc-wm-framework-vuejs/dist/wm/components';
export default { 
  name: "Home",
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
