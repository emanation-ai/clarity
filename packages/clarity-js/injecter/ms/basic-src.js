!(function (c, l, a, r, i, t, y) {
  if (a[c].v || a[c].t) return a[c]("event", c, "dup." + i.projectId)
  ;(a[c].t = !0),
    ((t = l.createElement(r)).async = !0),
    (t.src = "https://www.clarity.ms/s/0.7.12/clarity.js"),
    // (t.src = "https://cdn.croboost.ai/.../clarity.min.js"),
    // (t.src = "./build/clarity.min.js"),
    (y = l.getElementsByTagName(r)[0]).parentNode.insertBefore(t, y),
    a[c]("start", i),
    a[c].q.unshift(a[c].q.pop()),
    a[c]("set", "C_IS", "0")
})("clarity", document, window, "script", {
  projectId: "j9ltezd000",
  upload: "https://z.clarity.ms/collect",
  // upload: "https://app.croboost.ai/webhook-test/topic/clarity",
  expire: 365,
  cookies: ["_uetmsclkid", "_uetvid"],
  track: true,
  lean: false,
  content: true,
  dob: 1380,
})