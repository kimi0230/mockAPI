/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function (req, res) {
    return res.json({
      Message: "Hello Kimi33"
    });
  },
  login: async function (req, res) {
    return res.json({
      Data: {
        id: "4034",
        email: "kimi@gmail.com",
        name: "kimi",
        avatarPath: "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
        token: "aaa-aaa-aaa",
        expirationDate: "2020-12-13 02:56:19",
        lang: "en",
        allowURL: {
          "/test/calendar": 1,
          "/admin/home": 2
        },
        allowID: [1, 2]
      },
      Result: {
        status: true,
        code: "2000",
        message: "正確狀況"
      }
    })
  },
  userList: async function (req, res) {
    return res.json({
      "Data": {
        "items": [{
            "id": 126,
            "email": "1@gmail.com",
            "password": "85fb695b3c4b49922c93eee2f5d0dcae8ec1bccb",
            "name": "Hansen",
            "sex": "male",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "1965-01-01 00:00:00",
            "tel": "",
            "nation": "tw",
            "address": "新北市",
            "isActive": "work",
            "third_id": "1234567",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-06T10:27:25.000Z",
            "updatedAt": "2019-01-04T00:30:40.000Z"
          },
          {
            "id": 127,
            "email": "1@gmail.com",
            "password": "29a32d1644ccd9237ba9a54e4867ed1ec506011e",
            "name": "阿仁",
            "sex": "male",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "1978-07-06 08:00:00",
            "tel": "",
            "nation": "tw",
            "address": "林口",
            "isActive": "work",
            "third_id": "10209687675376980",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-06T11:24:59.000Z",
            "updatedAt": "2019-01-04T00:30:40.000Z"
          },
          {
            "id": 128,
            "email": "1@gmail.com",
            "password": "02f2028ee18186976b286322a66ee7b543fe18e0",
            "name": "測試先生",
            "sex": "male",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "2010-08-07 08:00:00",
            "tel": "",
            "nation": "tw",
            "address": "1233",
            "isActive": "work",
            "third_id": "1234567",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-06T11:25:59.000Z",
            "updatedAt": "2019-01-04T00:30:40.000Z"
          },
          {
            "id": 129,
            "email": "1@gmail.com",
            "password": "29a32d1644ccd9237ba9a54e4867ed1ec506011e",
            "name": "sheela",
            "sex": "female",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "2017-07-06 08:00:00",
            "tel": "",
            "nation": "tw",
            "address": "台灣台北",
            "isActive": "work",
            "third_id": "10158904136015655",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-06T12:41:13.000Z",
            "updatedAt": "2019-01-04T00:30:40.000Z"
          },
          {
            "id": 130,
            "email": "1@gmail.com",
            "password": "c1d77542909369ca80b6b72d17e4459e5f91538f",
            "name": "kk",
            "sex": "male",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "1976-11-06 08:00:00",
            "tel": "",
            "nation": "tw",
            "address": "台中",
            "isActive": "work",
            "third_id": "1234567",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-06T12:56:20.000Z",
            "updatedAt": "2019-01-04T00:30:40.000Z"
          },
          {
            "id": 131,
            "email": "1@gmail.com",
            "password": "29a32d1644ccd9237ba9a54e4867ed1ec506011e",
            "name": "fb",
            "sex": "male",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "1980-02-07 00:00:00",
            "tel": "",
            "nation": "tw",
            "address": "台北",
            "isActive": "work",
            "third_id": "653632934825195",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-06T13:08:55.000Z",
            "updatedAt": "2019-01-04T00:30:40.000Z"
          },
          {
            "id": 132,
            "email": "1@gmail.com",
            "password": "29a32d1644ccd9237ba9a54e4867ed1ec506011e",
            "name": "Michelle",
            "sex": "female",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "1989-05-28 08:00:00",
            "tel": "",
            "nation": "tw",
            "address": "",
            "isActive": "work",
            "third_id": "1766201656729699",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-06T15:49:31.000Z",
            "updatedAt": "2019-01-04T00:30:40.000Z"
          },
          {
            "id": 133,
            "email": "1@gmail.com",
            "password": "6f9c01651739ed658feae0f3f72a960bf286ff6d",
            "name": "Ken",
            "sex": "male",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "1974-01-26 00:00:00",
            "tel": "",
            "nation": "tw",
            "address": "新北市樹林區",
            "isActive": "work",
            "third_id": "B8kCWqZIgRbTVK2G3myl1wnoQ8u1",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-07T00:18:19.000Z",
            "updatedAt": "2019-10-22T01:58:55.000Z"
          },
          {
            "id": 134,
            "email": "1@gmail.com",
            "password": "29a32d1644ccd9237ba9a54e4867ed1ec506011e",
            "name": "",
            "sex": "male",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "0000-00-00 00:00:00",
            "tel": "",
            "nation": "tw",
            "address": "",
            "isActive": "work",
            "third_id": "1234567",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-07T00:27:12.000Z",
            "updatedAt": "2019-01-04T00:30:40.000Z"
          },
          {
            "id": 135,
            "email": "1@gmail.com",
            "password": "78c1c253f602bb2be43083cb5d384a2db6dda399",
            "name": "eason",
            "sex": "male",
            "avatarPath": "https://appdividend.com/wp-content/uploads/2019/03/Javascript-Array-Includes-Tutorial.png",
            "birthday": "0000-00-00 00:00:00",
            "tel": "",
            "nation": "tw",
            "address": "",
            "isActive": "work",
            "third_id": "1234567",
            "isCompany": 0,
            "isNotification": 1,
            "createdAt": "2017-07-07T00:43:31.000Z",
            "updatedAt": "2019-01-04T00:30:40.000Z"
          }
        ],
        "page": req.param("page"),
        "itemsPerPage": req.param("itemsPerPage"),
        "totalPages": 129
      },
      "Result": {
        "status": true,
        "code": 2000,
        "message": "正確狀況"
      }
    })
  }
};
