const heading = React.createElement("h1",{id : "first" },"This is new react new mudit")
const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

const parent = React.createElement("div",{id:"parent"},
  React.createElement("div",{id:"child"},
    React.createElement("h2",{id :"h2"},"I am an h2 tag")
  )
)

root.render(parent)