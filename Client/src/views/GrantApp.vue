<tempalte>
  <div>
    <h1> The Grant Application </h1>
  </div>
  <form action="https://formspree.io/" method="POST">
    <div class="form-group">
      Name:
      <input type="text" name="Name" required class="form-control"><br>
      Email:
      <input type="email" name="Email" required class="form-control"><br>
      Message:
      <input type="textbox" name="Message" required class="form-control"><br>
      Department:
      <input type="text" name="Department" required class="form-control"><br>
      <button type="submit" class="d-flex justify-content-center btn-dark">Submit</button>
    </div>
  </form>
</tempalte>
<script>
  export default {
    name: 'grantapp'
  }
</script>