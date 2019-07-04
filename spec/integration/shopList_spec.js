const request = require("request");
const server = require("../../src/server");
const base = "http://localhost:5000/shopList"
const sequelize = require("../../src/db/models/index").sequelize;
const ShopList = require("../../src/db/models").ShopList;
const User = require("../../src/db/models").User;


describe("routes : shopList", () => {

  beforeEach((done) => {
  this.shopList;
  this.user;
  sequelize.sync({force: true}).then((res) => {
    User.create({
      email: "starman@tesla.com",
      password: "shopper4lyfe"
    })
    .then((user) => {
      this.user = user;

      ShopList.create({
        name: "Games",
        description: "Post your Winter Games stories.",
        userId:this.user.id
      })
      .then((shopList) => {
        this.shopList = shopList;

        done();
      })
    })
  });
});



  describe("admin user performing CRUD actions for Post", () => {
  beforeEach((done) => {
    User.create({
      email: "admin@example.com",
      password: "123456",
    })
    .then((user) => {
      request.get({         // mock authentication
        url: "http://localhost:5000/auth/fake",
        form: {
          userId: user.id,
          email: user.email
        }
      },
      (err, res, body) => {
        done();
      }
    );
  });
})
describe("POST :shopListId/create", () => {

  it("should create a new post and redirect", (done) => {
      const options = {
        url: `${base}/create`,
        form: {
          name: "shopper",
          description: "I am a shopper"
        }
      };
      request.post(options,
        (err, res, body) => {
         console.log(res.body);
          ShopList.findOne({where: {name: "shopper"}})
          .then((shopList) => {
            expect(shopList.name).toBe("shopper");
            expect(shopList.description).toBe("I am a shopper");
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        }
      );
    });

});

})
});
