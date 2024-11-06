<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add new note" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-success">Submit</button>
        </div>
      </div>
    </div>
    <div v-for="i in 3" :key="i" class="card mb-4">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          necessitatibus quis reiciendis incidunt omnis maiores veritatis
          repudiandae ex non, doloremque assumenda id nesciunt architecto quae
          aliquam eum hic debitis natus!
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>
