import farawin from "farawin";
 
 // آرایه شامل الگوها
 const formRegex = {
    username: /.{3,}/,
    mobile: farawin.mobileRegex,
    password: /.{8,}/
  } 

  export {formRegex}