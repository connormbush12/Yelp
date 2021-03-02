import axios from 'axios'

export default axios.create({

    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer uEL-vcRppG5AitirrhHfUgXVlG2OJ2IyvrFDyX-efUj0nSnZ8gDVu2bZHWLT_4jq6YwAvtuutpwHnQZJyQGjPPIqoTDxJkSlWsoJlRhef_90wm4u6LJOGTp_Voo6YHYx'
    }
})