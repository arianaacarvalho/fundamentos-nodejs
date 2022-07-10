const {
    withCallbacks: {
        authenticate,
        listPosts,
        getPost,
    }
} = require('../helpers/libSocialMedia');

const fristPost = (username, password, callback) => {
    authenticate(username, password, (errorAut, token) => {
        if(errorAut){
            callback(errorAut)
            return
        }

    listPosts(token, (erroeList, posts) => {
        if(erroeList) {
            callback(errorList)
            return
        }

    getPost(token, posts[0].id, (errorPost, post) => {
        if(errorPost) {
            callback(errorPost)
            return
        }

    // Temos o post
    callback(undefined, post)

    })
    
    })

    })
};

fristPost('staart', 'nodelife', (error, post) => {
    if(error) {
        console.log(post);
        return
    } 
    console.log("Temos o post");
    console.log(post);
});