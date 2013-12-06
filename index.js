module.exports = function (src) {
  var s = document.createElement('script')
  s.src = src
  s.async = true
  document.body.appendChild(s)
}