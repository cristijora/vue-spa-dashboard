<template>
  <div>
    <div class="wrapper wrapper-full-page">
      <div class="full-page loginimage: urlge" filter-color="black"
           style="background-image: url(static/img/login.jpeg)"
           data-image="static/img/login.jpeg">
        <!--   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                <form method="#" action="#">
                  <div class="card card-login">
                    <div class="card-header text-center" data-background-color="rose">
                      <h4 class="card-title">Feedback</h4>

                    </div>
                    <p class="category text-center">
                      Login
                    </p>
                    <div class="card-content">

                    </div>
                    <div class="text-xs-center">
                      <el-button @click.native="login">Login</el-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="full-page-background" style="background-image: url(static/img/login.jpeg) "></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        addModel: {
          email: '',
          password: ''
        },
        loading: false,
        error: false,
        buttonText: 'Login'
      }
    },
    methods: {
      login () {
          this.$router.push('/admin')
      }
    }
  }

</script>
