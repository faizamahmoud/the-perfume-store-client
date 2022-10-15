# the-perfume-store-client
setup:

$ npx create-react-app client
$ cd client
$ npm start
$ npm install sass
$ npm i react-router-dom
$ npm i @material-ui/core
$ npm i @mui/icons-material
$ npm install @userfront/core
npm install react-bootstrap bootstrap
npm install axios
-> App
  -> Header
  -> Main |state: people|
    -> Routes
      -> Route |path: "/"|
        -> Index |props: people, createPeople|
      -> Route |path="/people/:id|
        -> Show |props: people, updatePeople, deletePeople|
         <Route path="/" element={<People />} />
        <Route path="/people/:id" element={<Show />} />


        https://mdbootstrap.com/docs/standard/extended/carousel-with-thumbnails/