!(function (c, l, a, r, i, t, y) {
  try {
    var d = "dataLayer",
      g = "gtag"
    ;(a[d] = a[d] || []),
      (a[g] =
        a[g] ||
        function () {
          a[d].push(arguments)
        }),
      a[g]("event", "optimize.callback", {
        callback: function (e, g) {
          a[c]("set", "optimizeExp", g + ":" + e)
        },
      })
  } catch (e) {}
  if (a[c].v || a[c].t) return a[c]("event", c, "dup." + i.projectId)
  ;(a[c].t = !0),
    ((t = l.createElement(r)).async = !0),
    (t.src = "https://www.clarity.ms/s/0.7.12/clarity.js"),
    (y = l.getElementsByTagName(r)[0]).parentNode.insertBefore(t, y),
    a[c]("start", i),
    a[c].q.unshift(a[c].q.pop()),
    a[c]("set", "C_IS", "0")
})("clarity", document, window, "script", {
  projectId: "123",
  upload: "https://z.clarity.ms/collect",
  expire: 365,
  cookies: ["_uetmsclkid", "_uetvid"],
  cookies: [],
  track: true,
  lean: false,
  content: true,
  dob: 1380,
})
