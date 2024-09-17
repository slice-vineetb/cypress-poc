class HomePageObjects {
    get signIn()  {
        return '.panel > .header > .authorization-link > a'
    }

    get searchField() {
        return '#search'
    }

    get greeetingMessage() {
        return ':nth-child(2) > .greet > .logged-in'
    }
}
export default new HomePageObjects();