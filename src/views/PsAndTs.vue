<template>
    <div class = "page">
       
        <p>Policies</p>
        <FormKit
        type="form"
        submit-label="Submit"
        action="/PoliciesView"
        method="post"
      >
        <FormKit
          name="number"
          label=" Broker ID"
          validation="required|id"
        />
        <FormKit
          type="number"
          name="page number"
          label="Page number"
          
        />
        <FormKit
        type="number"
        name="page size"
        label="Page size"
        />
      </FormKit>

       
    </div>
    <router-view/>

</template>