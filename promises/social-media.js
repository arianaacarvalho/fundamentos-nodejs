const {
    withPromises:{
        authenticate,
        listPosts,
        getPost
    }
} = require('../helpers/libSocialMedia');

const getFristPost = (username, password) =>
    authenticate(username, password)
    .then(token => 
        listPosts(token)
            .then(([{id}]) => getPost(token, id))
    )

const getPostLinear = ({token, posts: [{id}]}) =>
    getPost(token, id)

const listPostsLinear = (token) => 
    listPosts(token)
        .then(posts => ({posts, token}))

const getFristPostLinear = (username, password) =>
    authenticate(username, password)
    .then(listPostsLinear)
    .then(getPostLinear)

getFristPostLinear('staart', 'nodelife')
    .then(console.log)
    .catch(console.error)