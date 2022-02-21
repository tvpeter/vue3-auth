<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div>
        <h3>Signup</h3>
        <hr>
      </div>
      <form @submit.prevent="signup()">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" v-model.trim="email"/>
          <div class="error" v-if="errors.email">
              {{errors.email}}
          </div>
        </div>
        <div class="form-group">
          <label for="email">Password</label>
          <input type="text" class="form-control" v-model.trim="password" />
                    <div class="error" v-if="errors.password">
              {{errors.password}}
          </div>
        </div>
        <div class="my-3">
          <button class="btn btn-primary">Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SignupValidation from '../services/SignupValidation';
export default {
    data(){
        return {
            email: '',
            password: '',
            errors: [],
        }
    },

    methods: {
        signup(){
            let validation = new SignupValidation(this.email, this.password);

            this.errors = validation.checkValidations();

            if(this.errors.length){
                return false;
            }
        }
    }
};
</script>
