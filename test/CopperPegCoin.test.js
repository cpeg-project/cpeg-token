const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CopperPegCoin", function () {
  let token, owner, addr1, addr2;
  const TOTAL_SUPPLY = ethers.parseEther("1800000000");

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    const Factory = await ethers.getContractFactory("CopperPegCoin");
    token = await Factory.deploy(owner.address);
  });

  describe("Deployment", function () {
    it("should have correct name", async function () {
      expect(await token.name()).to.equal("Copper Peg Coin");
    });

    it("should have correct symbol", async function () {
      expect(await token.symbol()).to.equal("CPEG");
    });

    it("should have 18 decimals", async function () {
      expect(await token.decimals()).to.equal(18);
    });

    it("should mint total supply to recipient", async function () {
      expect(await token.totalSupply()).to.equal(TOTAL_SUPPLY);
      expect(await token.balanceOf(owner.address)).to.equal(TOTAL_SUPPLY);
    });

    it("should revert if recipient is zero address", async function () {
      const Factory = await ethers.getContractFactory("CopperPegCoin");
      await expect(Factory.deploy(ethers.ZeroAddress)).to.be.revertedWith("zero address");
    });
  });

  describe("Transfers", function () {
    it("should transfer tokens", async function () {
      const amount = ethers.parseEther("1000");
      await token.transfer(addr1.address, amount);
      expect(await token.balanceOf(addr1.address)).to.equal(amount);
      expect(await token.balanceOf(owner.address)).to.equal(TOTAL_SUPPLY - amount);
    });

    it("should approve and transferFrom", async function () {
      const amount = ethers.parseEther("500");
      await token.approve(addr1.address, amount);
      await token.connect(addr1).transferFrom(owner.address, addr2.address, amount);
      expect(await token.balanceOf(addr2.address)).to.equal(amount);
    });
  });

  describe("No mint or burn", function () {
    it("should not have a mint function", async function () {
      expect(token.mint).to.be.undefined;
    });

    it("should not have a burn function", async function () {
      expect(token.burn).to.be.undefined;
    });
  });
});
