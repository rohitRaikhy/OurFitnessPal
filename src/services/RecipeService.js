
const getRecipesAnonynmousUser = () =>
        fetch(`https://api.edamam.com/search?q=${this.state.keyword}&app_id=9b948587&app_key=3e7d74407131b5861669fbea1d249b1d`
        )
            .then(response => response.json())

export default {getRecipesAnonynmousUser}
