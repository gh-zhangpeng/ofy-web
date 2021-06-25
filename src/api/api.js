import request from "../utils/request";

export default {
    getSchedules(page, pageSize) {
        return request({
            url: "/ofy/schedules?page=1&pageSize=20",
            method: "get"
        });
    }
};