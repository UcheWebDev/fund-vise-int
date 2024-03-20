const signUpPayload = (email, password) => {
    return {
        email: email.value,
        password: password.value,
    };
};

const updateProfilePayload = (firstname, lastname) => {
    return {
        firstname: firstname.value,
        lastname: lastname.value
    }
}

const postFeedPayLoad = (post, fullname, enterpreneur_id, role) => {
    return {
        feed_body: post.value,
        published_by: fullname.value,
        id: enterpreneur_id.value,
        role: role.value
    }
}


export {
    signUpPayload,
    updateProfilePayload,
    postFeedPayLoad
}