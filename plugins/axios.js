export default function ({ $axios }) {
  $axios.defaults.withCredentials = true
  $axios.get('/csrf').then((res) => {
    $axios.defaults.headers.common['CSRF-TOKEN'] = res.data.csrfToken
  }, (err) => {
    console.error(err)
  })
}
