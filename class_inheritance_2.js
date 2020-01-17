class User {
  constructor(username) {
    this.username = username
    this.lastLoggedIn = null
  }

  toString() {
    let lastLoggedInText = 'Never'
    if (this.lastLoggedIn != null) {
      lastLoggedInText = this.lastLoggedIn
    }

    return (
      `User (${this.username}) ` +
      `Last Logged In: ${lastLoggedInText}`
    )
  }
}

class EmailUser extends User {
  constructor({ username, email, password }) {
    super(username)
    this.email = email
    this.password = password
  }

  login(formInput) {
    const { username, password } = formInput
    if (
      this.username === username &&
      this.password === password
    ) {
      this.lastLoggedIn = new Date()
      return true
    }
    return false
  }
}

class TwitterUser extends User {
  constructor({ username, twitterID }) {
    super(username)
    this.twitterID = twitterID
  }

  login({ twitterID }) {
    if (this.twitterID == twitterID) {
      this.lastLoggedIn = new Date()
      return true
    }
    return false
  }
}

const alice = new EmailUser({
  username: 'Alice',
  email: 'alice@example.com',
  password: 'hunter2',
})
const bob = new TwitterUser({
  username: 'Bob',
  twitterID: 'BobBobBob',
})
const carol = new User('Carol')

console.log(
  alice.login({
    username: 'Alice',
    password: 'WRONG_PASSWORD',
  })
)

console.log(
  alice.login({
    username: 'Alice',
    password: 'hunter2',
  })
)

console.log(
  bob.login({ twitterID: 'BobBobBob' })
)

console.log(`here's some info about Alice: ${alice}`)
console.log(bob.toString())
console.log(carol.toString())
