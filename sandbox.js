db.collection('recepies').get().then((snapshot) => {
    // when we have the data
    console.log(snapshot.docs)
}).catch(err => {
    console.log(err)
})
