/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/{query}",
  duckduckgo: "https://duckduckgo.com/?q={query}",
  ecosia: "https://www.ecosia.org/search?q={query}",
  google: "https://www.google.com/search?q={query}",
  startpage: "https://www.startpage.com/search?q={query}",
  youtube: "https://www.youtube.com/results?q={query}",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  const url = engineUrls[engine] ?? engine
  return url.replace("{query}", value)
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"5cMYB7P80FbBFqi1","label":"worth reading","bookmarks":[{"id":"6TxfrO0WZRvg79KF","label":"happy hues","url":"https://www.happyhues.co/"},{"id":"GWdBwyToQMgHl3wh","label":"styled-components","url":"https://www.joshwcomeau.com/react/demystifying-styled-components/"},{"id":"xDarvz25qfhuTKRj","label":"react docs","url":"https://react.dev/learn"},{"id":"MGNeG0zcwchRyOxp","label":"Cp Algorithms","url":"https://cp-algorithms.com/"}]},{"id":"xH5tWDlLOB0J9rhD","label":"Coding_Profiles","bookmarks":[{"id":"vS5QZw7LC3jTW3nX","label":"Codeforces","url":"https://codeforces.com/profile/Jardaani"},{"id":"0C6Cf8GMjHTCj1qi","label":"Leetcode","url":"https://leetcode.com/Jardani/"},{"id":"cWcN1ozRJp2Mdg3R","label":"codechef","url":"https://www.codechef.com/users/jardaani"},{"id":"CPDQuUDuYyYKlyg4","label":"Atcoder","url":"https://atcoder.jp/users/kiraa"}]},{"id":"NnQjRibZxpBQsXoX","label":"Mails","bookmarks":[{"id":"sIzqpxd3uSsmeCB9","label":"Kiraacodes","url":"https://mail.google.com/mail/u/1/#inbox"},{"id":"TyIkrt1TtBcR4ShX","label":"Akash gmail","url":"https://mail.google.com/mail/u/0/#inbox"}]},{"id":"A5Sn0s5fuyqjbqFW","label":"Coding_Practice","bookmarks":[{"id":"egfcUoMbJl38zdoa","label":"A2oj Ladder","url":"https://a2oj.herokuapp.com/"},{"id":"95Eu1gxlV29I7lxG","label":"Mock Interview Practice","url":"https://www.pramp.com/#/"}]},{"id":"nNutk4HDahFvjF19","label":"Git-Hub","bookmarks":[{"id":"PQlMheN9olxqNT9u","label":"My Github","url":"https://github.com/jardaanii"}]},{"id":"K0nkmyvQ6p03LD34","label":"Social","bookmarks":[{"id":"9Y9oVw9xvJxpvMFI","label":"Twitter","url":"https://twitter.com/_Kaashhh"},{"id":"jdNtJHdAJTU8ZItU","label":"Reddit","url":"https://www.reddit.com/user/Radioactive_uun"},{"id":"M2Bb6xmw7ymyK10o","label":"Insta","url":"https://www.instagram.com/"},{"id":"gcTfsOVpmalj7pXE","label":"Linked-In","url":"https://www.linkedin.com/in/akash-yadav-54590b219/"}]},{"id":"SmrXRvVz2SvIQD2D","label":"Anime-And-Manga","bookmarks":[{"id":"336tIzLBY2XVWeim","label":"Aniwatch","url":"https://aniwatch.to/home"},{"id":"a9ODGX81PFib4JmA","label":"Comick Manga","url":"https://comick.cc/"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
