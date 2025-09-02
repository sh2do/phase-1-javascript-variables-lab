require("./helpers.js");

const fs = require("fs");
const path = require("path");
const companyName = "Scuber";
let mostProfitableNeighborhood = "Chelsea";
let companyCeo = "Susan Smith";
const js = fs.readFileSync(path.resolve(__dirname, "..", "index.js"), "utf-8");

describe("index.js", function () {
  describe("companyName", function () {
    it("is set as Scuber", function () {
      expect(companyName).to.equal("Scuber");
    });

    it("is defined as a const", function () {
      expect(js).to.match(
        /const companyName = 'Scuber'/,
        "Expected companyName to be a const"
      );
    });
  });

  describe(mostProfitableNeighborhood, function () {
    it("is declared as equal to Chelsea", function () {
      expect(mostProfitableNeighborhood).to.equal("Chelsea");
    });

    it("is defined using let", function () {
      expect(js).to.match(
        /let mostProfitableNeighborhood = "Chelsea"/,
        "Expected mostProfitableNeighborhood to be defined using let"
      );
    });
  });

  describe(companyCeo, function () {
    it("is declared as equal to Susan Smith", function () {
      expect(companyCeo).to.equal("Susan Smith");
    });

    it("is defined using let", function () {
      expect(js).to.match(
        /let companyCeo/,
        "Expected companyCeo to be defined using let"
      );
    });
  });
});
