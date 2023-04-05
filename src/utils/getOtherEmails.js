const getOtherEmails = (users, user) => {
    return users.filter((userToFilter) => userToFilter !== user.email)[0]

}

export default getOtherEmails