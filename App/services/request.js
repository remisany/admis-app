import axios from "axios";

export const request = async (method, url, success, rejected, catchCallback, values) => {
    try {
        const response = await axios.request({
            url: url,
            method: method,
            data: values,
        })
        if (response.status === 200) {
            return success(response)
        } else {
            return rejected ? rejected(response) : console.log("notifications.warning()")
        }
    } catch (error) {
        return catchCallback ? catchCallback() : console.log("error")
    }
}