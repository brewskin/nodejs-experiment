const hostname = process.env.BE_HOST || 'localhost';
const port = parseInt(process.env.BE_PORT) || 8080;

export class Repo {
    userTopics(userID) {
        var result = {
            "user_identifier": userID,
            "test": "123"
        }
        return result
    }
    userArguments(userID) { }
}
