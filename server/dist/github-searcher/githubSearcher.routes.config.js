"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubSearcherRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class GithubSearcherRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'GithubSearcher');
    }
    configureRoutes() {
        this.app.route(`/GithubSearcher/users`)
            .get((req, res) => {
            res.status(200).send(`List of users`);
        });
        this.app.route(`/GithubSearcher/repositories`)
            .get((req, res) => {
            res.status(200).send(`List of repositories`);
        });
        return this.app;
    }
}
exports.GithubSearcherRoutes = GithubSearcherRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViU2VhcmNoZXIucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2dpdGh1Yi1zZWFyY2hlci9naXRodWJTZWFyY2hlci5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlFQUFvRTtBQUdwRSxNQUFhLG9CQUFxQixTQUFRLHlDQUFrQjtJQUV4RCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO2FBQ2xDLEdBQUcsQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFBO1FBRU4sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUM7YUFDekMsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQTtRQUVOLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFuQkQsb0RBbUJDIn0=